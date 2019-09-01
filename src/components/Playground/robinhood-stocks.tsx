import React from 'react';
import { connect } from 'react-redux';

import { getOrders } from './robinhood-account-redux.tsx';

class Stocks extends React.Component {
  componentDidUpdate() {
    console.log(this.props.orders === '');
    if (this.props.authenticated && this.props.orders === '') {
      console.log('test2');

      this.props
        .onOrders()
        .then(orders => console.log('orders retrieved', this.props.orders))
        .catch(e => console.error(e));
    }
  }

  render() {
    const { authenticated, orders } = this.props;
    console.log('redux', orders);
    return (
      <div>
        {authenticated ? (
          <React.Fragment>
            <h1 className="tab-body-title">Stocks Overview</h1>
          </React.Fragment>
        ) : (
          <div>no</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.robinhoodAccount.logged_in,
  orders: state.robinhoodAccount.orders,
});

const mapDispatchToProps = dispatch => ({
  onOrders: () => dispatch(getOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stocks);
