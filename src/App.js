import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyD9ib-NUcwqQFUwktL_MAYbExDA5Ds5Hn4',
    authDomain: 'manager-cba4c.firebaseapp.com',
    databaseURL: 'https://manager-cba4c.firebaseio.com',
    projectId: 'manager-cba4c',
    storageBucket: 'manager-cba4c.appspot.com',
    messagingSenderId: '886116712782'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
