import React from 'react';
import { connect } from 'react-redux';

import RAccount from './robinhood-account.tsx';
import ETFs from './robinhood-etfs.tsx';
import Stocks from './robinhood-stocks.tsx';
import VerticalPanel from '../Common/Material-UI/verticalPanel.tsx';

import {
  loginTest,
  logout,
  getOrders,
  getInstrument,
  getPositions,
  getQuotes,
} from './robinhood-account-redux.tsx';

class Robinhood extends React.Component {
  componentDidMount() {
    console.log('didMount');
  }

  componentWillMount() {
    console.log('willMount');
  }

  componentDidUpdate(prevProps) {
    // if (
    //   prevProps.authenticated &&
    //   prevProps.portfolio.length === 0 &&
    //   prevProps.orders === ''
    // ) {
    //   this.props
    //     .onOrders()
    //     .then(() => console.log('Orders retrieved'))
    //     .catch((e) => console.error(e));
    // }

    if (
      prevProps.authenticated &&
      prevProps.portfolio.length === 0 &&
      prevProps.positions === ''
    ) {
      this.props
        .onPositions()
        .then((positions) => positions.payload.results)
        .then((positions) =>
          positions.map((p) =>
            this.props
              .onInstrument(p.instrument)
              .then((i) => this.props.onQuotes(i.payload.results.symbol))
          )
        )
        .catch((e) => console.error(e));
    }
  }

  // async function getInfo() {
  //   try {
  //     const p_all = await this.props.onPositions()
  //     console.log(p_all)
  //     const p_filled = p_all.filter(res => res.payload.results.results.filter(r => parseInt(r.quantity) > 0))
  //     // const i_each =
  //     // const q_all =
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  render() {
    const tabs: string[] = ['Overview', 'ETFs', 'Regular Stocks'];
    const {
      account,
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
    } = this.props;
    const components: React.Component[] = [
      <RAccount
        authenticated={authenticated}
        account={account}
        portfolio={portfolio}
        positions={positions}
        instruments={instruments}
        quotes={quotes}
        onLogin={login}
        onLogout={logout}
      />,
      <ETFs />,
      <Stocks
        authenticated={authenticated}
        portfolio={portfolio}
        positions={positions}
        instruments={instruments}
        orders={orders}
      />,
    ];

    return (
      <div className="main-background">
        <div className="main-block">
          <VerticalPanel tabs={tabs} components={components} />
        </div>
      </div>
    );
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
});

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(loginTest(token)),
  logout: () => dispatch(logout()),
  onOrders: () => dispatch(getOrders()),
  onInstrument: (url) => dispatch(getInstrument(url)),
  onPositions: () => dispatch(getPositions()),
  onQuotes: (symbol) => dispatch(getQuotes(symbol)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Robinhood);
