import React from 'react';
import { connect } from 'react-redux';

import { getAccountInfo } from './robinhood-account-redux.tsx';
import './robinhood-account.css';

class RobinhoodAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      updated_at: '',
    };
  }

  // DRY: extract account.payload.results.results[0] into a variable
  componentDidMount() {
    var result = 'payload.results.results[0]';
    this.props
      .getAccount(process.env.ROBINHOOD_TOKEN)
      .then(account =>
        this.setState({
          cash: Math.round(
            account.payload.results.results[0].cash
          ).toLocaleString(),
          updated_at: new Date(
            account.payload.results.results[0].updated_at
          ).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
        })
      )
      .catch(e => console.error(e));
  }

  render() {
    // const { result } = this.props;
    // console.log('result: ', this.state.cash);
    // if (result.results !== undefined) {
    //   console.log(result.results[0].cash);
    // }

    return (
      <div className="tab-body">
        <h1 className="tab-body-title">Total Portfolio Value</h1>
        <h2>{`Cash: $ ${this.state.cash} `}</h2>
        <h2>{`Updated at: ${this.state.updated_at}`}</h2>
        <div className="box-container">
          <div className="item-1" />
          <div className="item-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // result: state.robinhoodAccount.result,
});

const mapDispatchToProps = dispatch => ({
  getAccount: token => dispatch(getAccountInfo(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobinhoodAccount);
