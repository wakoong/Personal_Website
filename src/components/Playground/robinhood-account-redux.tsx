import { RSAA } from 'redux-api-middleware';

export const ACCOUNT_INFO_REQUEST = '@@robinhood-account/ACCOUNT_INFO_REQUEST';
export const ACCOUNT_INFO_SUCCESS = '@@robinhood-account/ACCOUNT_INFO_SUCCESS';
export const ACCOUNT_INFO_FAILURE = '@@robinhood-account/ACCOUNT_INFO_FAILURE';

export const getAccountInfo = token => ({
  [RSAA]: {
    endpoint: 'http://localhost:3001/accounts',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      // 'Access-Control-Allow-Origin': 'http://localhost:3001/',
    },
    types: [ACCOUNT_INFO_REQUEST, ACCOUNT_INFO_SUCCESS, ACCOUNT_INFO_FAILURE],
  },
});

const initialState = {
  // result: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case ACCOUNT_INFO_SUCCESS:
    //   return {
    //     result: action.payload.results,
    //   };
    default:
      return state;
  }
};
