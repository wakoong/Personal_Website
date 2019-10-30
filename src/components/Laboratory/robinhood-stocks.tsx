import React from 'react';
import { connect } from 'react-redux';

class Stocks extends React.Component {
  render() {
    const { stocks, getTotal, getTable } = this.props;
    const stocksTotal = getTotal(stocks);
    return (
      <div className='rb-page'>
        <div className='rb-table'>
          {getTable('Stocks', stocks, stocksTotal)}
        </div>
      </div>
    );
  }
}

export default Stocks;
