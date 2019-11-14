import {RSAA} from 'redux-api-middleware';

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

export const LOADING_REQUEST = '@@robinhood-account/LOADING_REQUEST';
export const LOADING_SUCCESS = '@@robinhood-account/LOADING_SUCCESS';

export const loginTest = () => (dispatch) => {
  return dispatch(login()).then(() => {
    dispatch(getPortfolio());
    dispatch(getOrders());
    return;
  });
};

const heroku = 'https://wk-playground.herokuapp.com/';
export const login = () => ({
  [RSAA]: {
    endpoint: `${heroku}/api/login`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

export const logout = () => ({
  [RSAA]: {
    endpoint: `${heroku}/api/logout`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
  },
});

export const getPortfolio = () => ({
  [RSAA]: {
    endpoint: `${heroku}/api/portfolio`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [PORTFOLIO_REQUEST, PORTFOLIO_SUCCESS, PORTFOLIO_FAILURE],
  },
});

export const getOrders = () => ({
  [RSAA]: {
    endpoint: `${heroku}/api/orders`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAILURE],
  },
});

export const getInstrument = (url, index) => ({
  [RSAA]: {
    endpoint: `${heroku}/api/instrument`,
    method: 'POST',
    body: JSON.stringify({url, index}),
    headers: {
      'Content-Type': 'application/json',
    },
    types: [INSTRUMENT_REQUEST, {type: INSTRUMENT_SUCCESS, meta: {order: index}}, INSTRUMENT_FAILURE],
  },
});

export const getQuotes = (symbol, index) => ({
  [RSAA]: {
    endpoint: `${heroku}/api/quotes`,
    method: 'POST',
    body: JSON.stringify({symbol}),
    headers: {
      'Content-Type': 'application/json',
    },
    types: [QUOTES_REQUEST, {type: QUOTES_SUCCESS, meta: {order: index}}, QUOTES_FAILURE],
  },
});

export const getPositions = () => ({
  [RSAA]: {
    endpoint: `${heroku}/api/positions`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
    },
    types: [POSITIONS_REQUEST, POSITIONS_SUCCESS, POSITIONS_FAILURE],
  },
});

export const getOverviewData = () => async (dispatch) => {
  await dispatch(loadingData());

  const positions = await dispatch(getPositions()); // 10 positions
  const getInstrumentFetches = [];
  for (let i = 0; i < positions.payload.results.length; i++) {
    getInstrumentFetches.push(dispatch(getInstrument(positions.payload.results[i].instrument, i)));
  }

  const instruments = await Promise.all(getInstrumentFetches);

  const getQuotesFetches = [];
  for (let i = 0; i < instruments.length; i++) {
    getQuotesFetches.push(dispatch(getQuotes(instruments[i].payload.results.symbol, i)));
  }

  const quotes = await Promise.all(getQuotesFetches);

  await dispatch(loadingSuccess());
};

export const loadingData = () => ({
  type: LOADING_REQUEST,
});

export const loadingSuccess = () => ({
  type: LOADING_SUCCESS,
});

const initialState = {
  loading: false,
  account: [],
  portfolio: [],
  logged_in: false,
  logged_out: true,
  orders: '',
  instruments: [],
  positions: '',
  quotes: [],
  overview: [],
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
      const {name, symbol, simple_name, fundamentals, id} = action.payload.results;
      return {
        ...state,
        instruments: [
          ...state.instruments,
          {
            name,
            symbol,
            simple_name,
            fundamentals,
            id,
            order: action.meta.order,
          },
        ],
      };
    case POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.payload.results.map((r) => ({
          created_at: r.created_at,
          updated_at: r.updated_at,
          average_buy_price: r.average_buy_price,
          instrument: r.instrument,
          quantity: r.quantity,
        })),
      };
    case QUOTES_SUCCESS:
      const {last_trade_price, previous_close} = action.payload.results;
      return {
        ...state,
        quotes: [
          ...state.quotes,
          {
            last_trade_price,
            previous_close,
            order: action.meta.order,
          },
        ],
      };
    case LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOADING_SUCCESS:
      const reordered_inst = state.instruments.sort((a, b) => (a.order > b.order ? 1 : -1));
      const reordered_quote = state.quotes.sort((a, b) => (a.order > b.order ? 1 : -1));
      return {
        ...state,
        loading: false,
        overview: state.positions.map((p, i) => ({
          ...p,
          ...reordered_inst[i],
          ...reordered_quote[i],
        })),
      };
    default:
      return state;
  }
};
