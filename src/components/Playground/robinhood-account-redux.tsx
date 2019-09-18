import { RSAA } from 'redux-api-middleware';

export const LOGIN_REQUEST = '@@robinhood-account/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@robinhood-account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@robinhood-account/LOGIN_FAILURE';

export const LOGOUT_REQUEST = '@@robinhood-account/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@robinhood-account/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = '@@robinhood-account/LOGOUT_FAILURE';

export const PORTFOLIO_REQUEST = '@@robinhood-account/PORTFOLIO_REQUEST';
export const PORTFOLIO_SUCCESS = '@@robinhood-account/PORTFOLIO_SUCCESS';
export const PORTFOLIO_FAILURE = '@@robinhood-account/PORTFOLIO_FAILURE';

export const ORDERS_REQUEST = '@@robinhood-account/ORDERS_REQUEST';
export const ORDERS_SUCCESS = '@@robinhood-account/ORDERS_SUCCESS';
export const ORDERS_FAILURE = '@@robinhood-account/ORDERS_FAILURE';

export const INSTRUMENT_REQUEST = '@@robinhood-account/INSTRUMENT_REQUEST';
export const INSTRUMENT_SUCCESS = '@@robinhood-account/INSTRUMENT_SUCCESS';
export const INSTRUMENT_FAILURE = '@@robinhood-account/INSTRUMENT_FAILURE';

export const POSITIONS_REQUEST = '@@robinhood-account/POSITIONS_REQUEST';
export const POSITIONS_SUCCESS = '@@robinhood-account/POSITIONS_SUCCESS';
export const POSITIONS_FAILURE = '@@robinhood-account/POSITIONS_FAILURE';

export const QUOTES_REQUEST = '@@robinhood-account/QUOTES_REQUEST';
export const QUOTES_SUCCESS = '@@robinhood-account/QUOTES_SUCCESS';
export const QUOTES_FAILURE = '@@robinhood-account/QUOTES_FAILURE';

export const LOADING_SUCCESS = '@@robinhood-account/LOADING_SUCCESS';

export const loginTest = (token) => (dispatch) => {
  return dispatch(login(token)).then(() => {
    dispatch(getPortfolio());
    dispatch(getOrders());
    return;
  });
};

export const login = (token) => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/login',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': 'http://localhost:3001/',
    },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

export const logout = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/logout',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': 'http://localhost:3001/',
    },
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
  },
});

export const getPortfolio = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/portfolio',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [PORTFOLIO_REQUEST, PORTFOLIO_SUCCESS, PORTFOLIO_FAILURE],
  },
});

export const getOrders = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/orders',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAILURE],
  },
});

export const getInstrument = (url) => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/instrument',
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [INSTRUMENT_REQUEST, INSTRUMENT_SUCCESS, INSTRUMENT_FAILURE],
  },
});

export const getQuotes = (symbol) => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/quotes',
    method: 'POST',
    body: JSON.stringify({ symbol }),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [QUOTES_REQUEST, QUOTES_SUCCESS, QUOTES_FAILURE],
  },
});

export const getPositions = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/positions',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [POSITIONS_REQUEST, POSITIONS_SUCCESS, POSITIONS_FAILURE],
  },
});

export const loadingData = () => ({
  type: LOADING_SUCCESS,
});

const initialState = {
  loading: true,
  account: [],
  portfolio: [],
  logged_in: false,
  logged_out: true,
  orders: '',
  instruments: [],
  positions: '',
  quotes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged_in: true,
        logged_out: false,
        account: action.payload.results,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolio: action.payload.results,
      };
    case ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.results,
      };
    case INSTRUMENT_SUCCESS:
      const i_parsed = action.payload.results;
      return {
        ...state,
        instruments: state.instruments.concat({
          symbol: i_parsed.symbol,
          name: i_parsed.name,
          simple_name: i_parsed.simple_name,
          fundamentals: i_parsed.fundamentals,
          id: i_parsed.id,
        }),
      };
    case POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.payload.results,
      };
    case QUOTES_SUCCESS:
      const q_parsed = action.payload.results;
      return {
        ...state,
        quotes: state.quotes.concat({
          last_trade_price: q_parsed.last_trade_price,
          previous_close: q_parsed.previous_close,
          symbol: q_parsed.symbol,
          instrument: q_parsed.instrument,
        }),
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
