import React from 'react';

import * as helper from '../Common/helper';
import './robinhood.css';

class RobinhoodHistory extends React.Component {
  renderTableData = () => {
    const { orders } = this.props;
    const headers = [
      'Date',
      'Shares(Buy)',
      'Shares(Sell)',
      'Total Shares',
      'Buy Price',
      'Avg. Buy Price',
      'Sell Price',
      'Cashed Out',
      'Net Outcome',
      'Total Net Outcome',
    ];
    return Object.keys(orders).map((key, i) => {
      // average_price from the Robinhood API indicates average buy or sell price
      // avgBuyPrice variable represents the average buy price of a stock after each buy transaction
      let totalShare = 0;
      let avgBuyPrice = 0;
      let totalCashVal = 0;
      let netOutcome = 0;
      let totalNetOutcome = 0;

      const { getMonth, getDate, getYear, displayCurrency } = helper;

      return (
        <div className='table' key={key}>
          {' '}
          <div className='header'>
            {headers.map((h) => (
              <div className='col' key={h}>
                {h}
              </div>
            ))}
          </div>
          {orders[key].reverse().map((o, idx) => {
            totalCashVal = o.quantity * o.average_price;
            if (o.side === 'buy') {
              totalShare += Math.round(o.quantity);
              avgBuyPrice =
                ((totalShare - Math.round(o.quantity)) * avgBuyPrice +
                  totalCashVal) /
                totalShare;
            } else {
              totalShare -= Math.round(o.quantity);
              netOutcome = totalCashVal - avgBuyPrice * o.quantity;
              totalNetOutcome += netOutcome;
            }

            return (
              <div className='row' key={o.updated_at}>
                <div className='col col-date'>
                  {`${getMonth(o.updated_at)} ${getDate(
                    o.updated_at
                  )}, ${getYear(o.updated_at)}`}
                </div>
                <div className='col col-buys'>
                  {o.side === 'buy' ? Math.round(o.quantity) : 0}
                </div>
                <div className='col col-sells'>
                  {o.side === 'sell' ? Math.round(o.quantity) : 0}
                </div>
                <div className='col col-tsh'>{totalShare}</div>
                <div className='col col-bp'>
                  {o.side === 'buy'
                    ? `${displayCurrency(o.average_price)}`
                    : '-'}
                </div>
                <div className='col col-avgbp'>{`${displayCurrency(
                  avgBuyPrice
                )}`}</div>
                <div className='col col-sp'>
                  {o.side === 'sell'
                    ? `${displayCurrency(o.average_price)}`
                    : '-'}
                </div>
                <div className='col col-co'>
                  {o.side === 'sell' ? `${displayCurrency(totalCashVal)}` : '-'}
                </div>
                <div className='col col-oc'>
                  {o.side === 'sell' ? `${displayCurrency(netOutcome)}` : '-'}
                </div>
                <div
                  className='col col-toc'
                  style={{
                    background:
                      o.side === 'buy'
                        ? ''
                        : totalNetOutcome >= 0
                        ? 'rgb(33, 206, 153)'
                        : 'rgb(244, 85, 49)',
                    fontWeight: 'bold',
                  }}>
                  {o.side === 'sell'
                    ? `${displayCurrency(totalNetOutcome)}`
                    : '-'}
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  render() {
    const { orders } = this.props;
    return <div className='rb-history'>{this.renderTableData()}</div>;
  }
}

export default RobinhoodHistory;
