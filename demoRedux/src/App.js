import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './redux/stores/Store';
import Main from './components/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store = {Store}>
          <Main/>
        </Provider>
    );
  }
}
