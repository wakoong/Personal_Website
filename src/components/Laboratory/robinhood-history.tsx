import React from 'react';

import './robinhood.css';

class RobinhoodHistory extends React.Component {
  // create a global helper method
  // toFixed returns a string instead of an integer
  roundToTenth = (num) => {
    return Number.parseFloat(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  displayCurrency = (num, currency = '$') => {
    if (num >= 0) {
      return `${currency}${this.roundToTenth(num)}`;
    } else {
      return `-${currency}${this.roundToTenth(Math.abs(num))}`;
    }
  };

  getMonth = (utc) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months[new Date(utc).getMonth()];
  };

  getDate = (utc) => {
    return new Date(utc).getDate();
  };

  getYear = (utc) => {
    return new Date(utc).getFullYear();
  };

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
                  {`${this.getMonth(o.updated_at)} ${this.getDate(
                    o.updated_at
                  )}, ${this.getYear(o.updated_at)}`}
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
                    ? `${this.displayCurrency(o.average_price)}`
                    : '-'}
                </div>
                <div className='col col-avgbp'>{`${this.displayCurrency(
                  avgBuyPrice
                )}`}</div>
                <div className='col col-sp'>
                  {o.side === 'sell'
                    ? `${this.displayCurrency(o.average_price)}`
                    : '-'}
                </div>
                <div className='col col-co'>
                  {o.side === 'sell'
                    ? `${this.displayCurrency(totalCashVal)}`
                    : '-'}
                </div>
                <div className='col col-oc'>
                  {o.side === 'sell'
                    ? `${this.displayCurrency(netOutcome)}`
                    : '-'}
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
                    ? `${this.displayCurrency(totalNetOutcome)}`
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
