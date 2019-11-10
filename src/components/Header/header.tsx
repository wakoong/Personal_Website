import React from 'react';

import Nav from '../Nav/nav.tsx';

export interface HeaderProps {
  nav: string;
  tab: string;
  key: string;
}

class Header extends React.Component<HeaderProps> {
  state = {
    nav: '',
  };

  render() {
    const navTabs: string[] = ['About', 'Laboratory'];
    return (
      <header>
        <nav>
          <ul>
            <Nav nav='' tab='WOOSIK.K' />
            <div className='menu'>
              {navTabs.map((nav) => {
                return <Nav key={nav} nav={nav} tab={nav} />;
              })}
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
