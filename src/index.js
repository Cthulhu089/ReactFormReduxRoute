import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
class Foo extends React.Component {
  render() {
      return(<div>Hello!</div>);
  }
}

class Foo1 extends React.Component {
  render() {
      return(<div>Good-bye!</div>);
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Foo}/>
        <Route path="/by" component={Foo1}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
