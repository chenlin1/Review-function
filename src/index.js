// import React from 'react';
// import ReactDOM from 'react-dom';
// import CommentApp from './CommentApp';
// // import CommentApp from './ContextIndex'
// ReactDOM.render(<CommentApp />, document.getElementById('root'));
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './App.css'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);
