import * as actionTypes from "../../constants/actionTypes";
import fetch from "cross-fetch";

require("dotenv").config();

export function requestPosts() {
  return {
    type: actionTypes.REQUEST_POSTS
  };
}

export function receivePosts(json) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    articles: json.articles,
    receivedAt: Date.now()
  };
}

export function invalidateSubreddit() {
  return {
    type: actionTypes.INVALIDATE_SUBREDDIT
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts());
    console.log(process.env.API_KEY);
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d8a040e4b6d0468db9ceb4354da4c091";
    return fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(receivePosts(json));
        return json.articles;
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
