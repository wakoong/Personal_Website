import React from 'react';
import {Router, Link} from '@reach/router';

import Robinhood from './robinhood';

import robinhood from '../../assets/images/rh-gorilla.png';
import CP from '../../assets/images/CoachPlayer.png';
import NBA from '../../assets/images/nba-gorilla.png';

class Laboratory extends React.Component {
  render() {
    return (
      <div className='lab'>
        <Link to='/robinhood'>
          <div className='lab-card'>
            <img
              className='lab-img'
              src={robinhood}
              alt='Stock Management App'
            />

            <div className='description description-green'>
              <p>
                This project used Robinhood APIs to analyze my Robinhood
                account's portfolio distribution based on ETF and Non-ETF
                stocks. Also, it keeps track of net capital gains/losses for
                every stock I owned via Robinhood.
              </p>
              <br />
              <p>Frontend: React, Redux, D3</p>
              <p>Backend: NodeJS</p>
            </div>
          </div>
        </Link>
        <Link to='/coach-and-player'>
          <div className='lab-card'>
            <img className='lab-img' src={CP} alt='Coach-and-Player' />
            <div className='description description-blue'>
              <p>
                A basketball playboard that helps coaches - mainly at youth or
                junior level - to share plays with their players. The goal of
                this app is to enhance team and individual performance by
                providing players to review plays that are otherwise only
                available during practices.
              </p>
              <br />
              <p>Frontend: React, React-Native, Redux, D3</p>{' '}
              <p>Backend: NodeJS, MongoDB</p>
            </div>
          </div>
        </Link>
        <Link to='/laboratory'>
          <div className='lab-card'>
            <img className='lab-img' src={NBA} alt='NBA Gorilla' />
            <div className='description description-orange'>
              <p>*****UNDER CONSTRUCTION*****</p>
              <p>
                Experiementation with interactive data visualization with D3 and
                real NBA data
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Laboratory;
