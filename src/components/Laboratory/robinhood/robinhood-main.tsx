import React from 'react';
import { Router, Link } from '@reach/router';
import styled from 'styled-components';

import RobinhoodOverview from './robinhood-overview';
import RobinhoodETFs from './robinhood-etfs';
import RobinhoodStock from './robinhood-stocks';
import RobinhoodHistory from './robinhood-history';
import './robinhood.css';

const MainStyles = styled.div`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  height: 100%;
  width: 100%;
  list-style: none;
`;

const Header = styled.header`
  position: fixed;
  bottom: 0;
  padding: 2em;
  width: 100%;
  background: ${(props) => props.theme.selectColor};

  .header-tabs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    list-style: none;
    text-decoration: none;

    a {
      font-weight: 900;
      font-size: 1.2em;
      cursor: pointer;
      text-decoration: none !important;
      color: ${(props) => props.theme.textColor};
    }

    a:hover {
      opacity: 0.8;
    }
  }
`;

const RobinhoodHeader = () => {
  const tabs = ['Overview', 'ETFs', 'Stocks', 'History'];
  // const urls = ['', 'etfs', 'stocks', 'history'];
  return (
    <Header>
      <ul className='header-tabs'>
        {tabs.map((tab, index) => (
          <Link to={tab.toLowerCase()} key={tab}>
            <li className='header-tab'>{tab}</li>
          </Link>
        ))}
      </ul>
    </Header>
  );
};

class RobinhoodMain extends React.Component {
  getTotal = (data) =>
    data
      .map((d) => d.last_trade_price * d.quantity)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

  getTable = (title, data, total) => {
    return (
      <div className='row'>
        <div className='row-title'>{title}</div>
        <div className='row-body'>
          {data.map((d) => (
            <div className='item' key={d.symbol}>
              <div className='item-name'>
                <div>{d.symbol}</div>
                <div>{d.simple_name}</div>
              </div>
              <div className='item-val'>
                {(((d.last_trade_price * d.quantity) / total) * 100).toFixed(
                  2
                ) + '%'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  render() {
    const { account, portfolio, overview, orders } = this.props;
    const [etfs, stocks] = overview.reduce(
      ([e, s], inst) =>
        inst.name.includes('ETF') ? [[...e, inst], s] : [e, [...s, inst]],
      [[], []]
    );

    return (
      <MainStyles>
        <RobinhoodHeader />
        <Router>
          <RobinhoodOverview
            portfolio={portfolio}
            etfs={etfs}
            stocks={stocks}
            cash={account.cash}
            getTotal={this.getTotal}
            getTable={this.getTable}
            path='overview'
            default
          />
          <RobinhoodETFs
            etfs={etfs}
            getTotal={this.getTotal}
            getTable={this.getTable}
            path='etfs'
          />
          <RobinhoodStock
            stocks={stocks}
            getTotal={this.getTotal}
            getTable={this.getTable}
            path='stocks'
          />
          <RobinhoodHistory orders={orders} path='history' />
        </Router>
      </MainStyles>
    );
  }
}

export default RobinhoodMain;
