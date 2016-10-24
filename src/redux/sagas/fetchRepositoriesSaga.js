import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { fetchUserRepositories } from '../../github/githubApi';
import { fetchRepositoriesSucceeded, fetchRepositoriesFailed } from '../actions/index';

export const getUsername = state => state.getIn(['repositoriesSearch', 'username']);

export function* fetchRepositoriesSaga() {
  try {
    const username = yield select(getUsername);
    const repositories = yield call(fetchUserRepositories, username);
    yield put(fetchRepositoriesSucceeded(repositories));
  } catch (err) {
    yield put(fetchRepositoriesFailed(err.message));
  }
}

export function* watchFetchRepositoriesSaga() {
  yield* takeLatest('USER_FETCH_REQUESTED', fetchRepositoriesSaga);
}

export default watchFetchRepositoriesSaga;
