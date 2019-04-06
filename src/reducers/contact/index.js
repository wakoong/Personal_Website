import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  name: "",
  email: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TYPE_SENDER_NAME:
      return Object.assign({}, state, { name: action.name });
    case actionTypes.TYPE_SENDER_EMAIL:
      return Object.assign({}, state, { email: action.email });
    case actionTypes.SEND_EMAIL:
      return Object.assign({}, state, {
        name: action.name,
        email: action.email
      });
    default:
      return state;
  }
}
