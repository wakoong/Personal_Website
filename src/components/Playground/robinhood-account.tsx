import React from 'react';

import Button from '../Common/Material-UI/button.tsx';
import SimpleCard from '../Common/Material-UI/simpleCard.tsx';
import SimpleTable from '../Common/Material-UI/simpleTable.tsx';
import { SimplePieChart } from '../D3/PieChart';

import './robinhood-account.css';

class RobinhoodAccount extends React.Component {
  // DRY: extract account.payload.results.results[0] into a variable
  // Handling states using this.setStates vs. using redux

  render() {
    const cash = Math.round(this.props.account.cash);
    const stock = Math.round(this.props.portfolio.market_value);

    const data = [this.props.account.cash, this.props.portfolio.market_value];
    const updated_at = new Date(this.props.account.updated_at).toLocaleString(
      'en-US',
      { timeZone: 'America/Los_Angeles' }
    );

    const { onLogin, onLogout, authenticated, stockInfo, loading } = this.props;
    console.log(loading);
    return (
      <div className="tab-body">
        {authenticated ? (
          loading ? (
            <div>loading ...</div>
          ) : (
            <React.Fragment>
              <h1 className="tab-body-title">Total Portfolio Value</h1>
              <h2>{`Cash: $ ${cash.toLocaleString()} `}</h2>
              <h2>{`Stock: $ ${stock.toLocaleString()} `}</h2>
              <h2>{`Updated at: ${updated_at} `}</h2>
              <div className="flex-box">
                <div className="half-width-box">
                  <div className="pie-chart">
                    <SimplePieChart data={data} />
                  </div>
                </div>
                <div>
                  <SimpleTable stockInfo={stockInfo} totalStock={stock} />
                  <Button
                    buttonColor="primary"
                    class_name="position position-logout"
                    on_click={onLogout}
                    text="LOGOUT FROM YOUR ROBINHOOD ACCOUNT"
                  />
                </div>
              </div>
            </React.Fragment>
          )
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

export default RobinhoodAccount;
