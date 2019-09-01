import { RSAA } from 'redux-api-middleware';

export const LOGIN_REQUEST = '@@robinhood-account/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@robinhood-account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@robinhood-account/LOGIN_FAILURE';

export const LOGOUT_REQUEST = '@@robinhood-account/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@robinhood-account/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = '@@robinhood-account/LOGOUT_FAILURE';

export const ORDERS_REQUEST = '@@robinhood-account/ORDERS_REQUEST';
export const ORDERS_SUCCESS = '@@robinhood-account/ORDERS_SUCCESS';
export const ORDERS_FAILURE = '@@robinhood-account/ORDERS_FAILURE';

export const login = token => ({
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

const initialState = {
  cash: 0,
  updated_at: '',
  logged_in: false,
  logged_out: true,
  orders: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const result = action.payload.results.results;
      return {
        ...state,
        logged_in: true,
        logged_out: false,
        cash: result[0].cash,
        updated_at: result[0].updated_at,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logged_in: false,
        logged_out: true,
        cash: 0,
        updated_at: '',
      };
    case ORDERS_SUCCESS:
      console.log("inside redux", )
      return {
        ...state,
        orders: action.payload.results.results;
      };
    default:
      return state;
  }
};
