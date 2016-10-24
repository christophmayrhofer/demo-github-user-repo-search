import test from 'ava';
import fromGenerator from 'redux-saga-test';
import { fetchRepositoriesSaga, watchFetchRepositoriesSaga, getUsername } from './fetchRepositoriesSaga';
import { fetchRepositoriesSucceeded, fetchRepositoriesFailed } from '../actions/index';
import { fetchUserRepositories } from '../../github/githubApi';

test('fetchRepositoriesSaga', (t) => {
  const expect = fromGenerator(t, fetchRepositoriesSaga());

  expect.next().select(getUsername);
  expect.next('username').call(fetchUserRepositories, 'username');
  const mockData = [{}];
  expect.next(mockData).put(fetchRepositoriesSucceeded(mockData));
  const mockError = { message: 'error message' };
  expect.throwNext(mockError).put(fetchRepositoriesFailed(mockError.message));
});

test('watchFetchRepositoriesSaga', (t) => {
  const expect = fromGenerator(t, watchFetchRepositoriesSaga());

  expect.takeLatest('USER_FETCH_REQUESTED', fetchRepositoriesSaga);
});
