import React from 'react';
import { connect } from 'react-redux';

import { login, logout } from './robinhood-account-redux.tsx';
import Button from '../Common/button.tsx';
import { SimplePieChart } from '../D3/PieChart';

import './robinhood-account.css';

class RobinhoodAccount extends React.Component {
  // DRY: extract account.payload.results.results[0] into a variable
  // Handling states using this.setStates vs. using redux
  componentDidMount() {
    // this.props
    //   .getAccount(process.env.ROBINHOOD_TOKEN)
    //   .then(() => console.log('Account retrieved'))
    //   .catch(e => console.error(e));
  }

  render() {
    const cash = Math.round(this.props.account.cash).toLocaleString();
    // const stock = Math.round(this.props.account.stock).toLocaleString();
    const updated_at = new Date(this.props.account.updated_at).toLocaleString(
      'en-US',
      {
        timeZone: 'America/Los_Angeles',
      }
    );

    const { onLogin, onLogout, authenticated } = this.props;

    return (
      <div className="tab-body">
        {authenticated ? (
          <React.Fragment>
            <h1 className="tab-body-title">Total Portfolio Value</h1>
            <h2>{`Cash: $ ${cash} `}</h2>
            <h2>{`Updated at: ${updated_at} `}</h2>
            {/* <h2>{`Stock: ${stock}`}</h2> */}
            <SimplePieChart />
            <Button
              buttonColor="primary"
              class_name="position"
              on_click={onLogout}
              text="LOGOUT FROM YOUR ROBINHOOD ACCOUNT"
            />
          </React.Fragment>
        ) : (
          <Button
            buttonColor="default"
            class_name="position"
            on_click={onLogin}
            text="LOGIN TO YOUR ROBINHOOD ACCOUNT"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.robinhoodAccount.account,
  authenticated: state.robinhoodAccount.logged_in,
});

const mapDispatchToProps = dispatch => ({
  onLogin: token => dispatch(login(token)),
  onLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobinhoodAccount);
