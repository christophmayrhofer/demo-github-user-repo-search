import test from 'ava';
import { reducerTest } from 'redux-ava-immutable';
import Immutable from 'immutable';
import repositoriesSearchReducer from './repositoriesSearchReducer';
import {
  updateUsername,
  fetchUserRepositories,
  fetchRepositoriesSucceeded,
  fetchRepositoriesFailed,
} from '../actions/index';

test('reducer repositoriesSearchReducer handles updateUsername', reducerTest(
  repositoriesSearchReducer,
  Immutable.fromJS({ username: null }),
  updateUsername('username'),
  Immutable.fromJS({ username: 'username' })
));

test('reducer repositoriesSearchReducer handles fetchUserRepositories', reducerTest(
  repositoriesSearchReducer,
  Immutable.fromJS({
    hasNeverFetched: true,
    hasFetchError: false,
    isFetching: false,
  }),
  fetchUserRepositories(),
  Immutable.fromJS({
    hasNeverFetched: false,
    hasFetchError: false,
    isFetching: true,
  })
));

test('reducer repositoriesSearchReducer handles fetchRepositoriesSucceeded', reducerTest(
  repositoriesSearchReducer,
  Immutable.fromJS({
    repositories: null,
    hasFetchError: true,
    isFetching: true,
  }),
  fetchRepositoriesSucceeded(Immutable.List.of()),
  Immutable.fromJS({
    repositories: Immutable.List.of(),
    hasFetchError: false,
    isFetching: false,
  })
));

test('reducer repositoriesSearchReducer handles fetchRepositoriesFailed', reducerTest(
  repositoriesSearchReducer,
  Immutable.fromJS({
    repositories: null,
    hasFetchError: false,
    isFetching: true,
    errorMessage: '',
  }),
  fetchRepositoriesFailed('Error Message'),
  Immutable.fromJS({
    repositories: Immutable.List.of(),
    hasFetchError: true,
    isFetching: false,
    errorMessage: 'Error Message',
  })
));
