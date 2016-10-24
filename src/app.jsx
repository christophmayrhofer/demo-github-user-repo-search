import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import initStore from './redux/store';
import DevTools from './ui/DevTools';
import RepositorySearchForm from './ui/RepositorySearchForm';

const initialState = Immutable.fromJS({
  repositoriesSearch: {
    isFetching: false,
    hasNeverFetched: true,
    hasFetchError: false,
    username: 'christophmayrhofer',
    repositories: Immutable.List.of(),
  },
});
const store = initStore(initialState);

const App = () => (
  <RepositorySearchForm />
);

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>, document.getElementById('app'));
