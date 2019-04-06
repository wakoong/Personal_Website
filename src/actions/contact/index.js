import * as actionTypes from "../../constants/actionTypes";

export function onTypeSenderName(name) {
  return {
    type: actionTypes.TYPE_SENDER_NAME,
    name
  };
}

export function onTypeSenderEmail(email) {
  return {
    type: actionTypes.TYPE_SENDER_EMAIL,
    email
  };
}

export function sendEmail(name, email) {
  return {
    type: actionTypes.SEND_EMAIL,
    name,
    email
  };
}
