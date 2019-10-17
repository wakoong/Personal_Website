import React from 'react';
import { connect } from 'react-redux';

import RAccount from './robinhood-account.tsx';
import RobinhoodMain from './robinhood-main';
import ETFs from './robinhood-etfs.tsx';
import Stocks from './robinhood-stocks.tsx';
import Button from '../Common/Material-UI/button.tsx';
import twitter from '../../assets/images/twitter.png';

import {
  loginTest,
  logout,
  getOrders,
  getInstrument,
  getPositions,
  getQuotes,
  getOverviewData,
  loadingData,
} from './robinhood-account-redux.tsx';

class Robinhood extends React.Component {
  componentDidMount() {
    console.log('didMount');
  }

  componentWillMount() {
    console.log('willMount');
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.authenticated &&
      prevProps.portfolio.length === 0 &&
      prevProps.positions === ''
    ) {
      try {
        this.props.onOverviewData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const {
      account,
      overview,
      portfolio,
      positions,
      authenticated,
      instruments,
      orders,
      quotes,
      login,
      logout,
      onOrders,
      onInstrument,
      onPositions,
      loading,
    } = this.props;

    let main;

    if (authenticated && overview.length !== 0) {
      main = (
        <RobinhoodMain
          account={account}
          portfolio={portfolio}
          overview={overview}
        />
      );
    } else {
      main = (
        <React.Fragment>
          <div className='robinhood-login-wrapper' onClick={login}>
            <img src={twitter} alt='twitter bird' />
            <div>{loading ? 'Loading...' : 'Login'}</div>
          </div>
          {/* <div>How to login</div> */}
        </React.Fragment>
      );
    }

    return <div className='project-background robinhood'>{main}</div>;
  }
}

const mapStateToProps = (state) => ({
  account: state.robinhoodAccount.account,
  portfolio: state.robinhoodAccount.portfolio,
  authenticated: state.robinhoodAccount.logged_in,
  instruments: state.robinhoodAccount.instruments,
  orders: state.robinhoodAccount.orders,
  positions: state.robinhoodAccount.positions,
  quotes: state.robinhoodAccount.quotes,
  overview: state.robinhoodAccount.overview,
  loading: state.robinhoodAccount.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(loginTest(token)),
  logout: () => dispatch(logout()),
  onOrders: () => dispatch(getOrders()),
  onOverviewData: () => dispatch(getOverviewData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Robinhood);
