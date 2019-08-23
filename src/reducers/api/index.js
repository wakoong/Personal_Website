import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  articles: [],
  loading: false,
  error: null
};

// export function postsBySubreddit(state={}, action) {
//     switch(action.type) {
//         case actionTypes.INVALIDATE_SUBREDDIT:
//         case actionTypes.RECEIVE_POSTS:
//         case actionTypes.REQUEST_POSTS:
//             return Object.assign({}, state, {
//                 [action.subreddit]: posts(state[action.subreddit], action)
//         })
//                 // can't fully understand what state[action.subreddit] is
//         default:
//             return state
//     }
// }

export default function posts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_POSTS:
      return Object.assign({}, state, { loading: true });
    case actionTypes.RECEIVE_POSTS:
      return Object.assign({}, state, {
        loading: false,
        articles: action.articles,
        lastUpdated: action.recievedAt
      });
    default:
      return state;
  }
}

// export function selectedSubreddit(state= 'reactjs', action) {
//     switch(action.type) {
//         case actionTypes.SELECT_SUBREDDIT:
//             return action.subreddit
//         default:
//             return state
//     }
// }
