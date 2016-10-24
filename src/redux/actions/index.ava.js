import Immutable from 'immutable';
import test from 'ava';
import { actionTest } from 'redux-ava';
import {
  updateUsername,
  fetchUserRepositories,
  fetchRepositoriesSucceeded,
  fetchRepositoriesFailed,
} from './index';

test('action updateUsername',
  actionTest(updateUsername, 'username',
    {
      type: 'UPDATE_USERNAME',
      payload: 'username',
    }
  )
);

test('action fetchUserRepositories',
  actionTest(fetchUserRepositories, null,
    {
      type: 'USER_FETCH_REQUESTED'
    }
  )
);

test('action fetchRepositoriesSucceeded',
  actionTest(fetchRepositoriesSucceeded, Immutable.List.of(),
    {
      type: 'FETCH_REPOSITORIES_SUCCEEDED',
      payload: Immutable.List.of(),
    }
  )
);

test('action fetchRepositoriesFailed',
  actionTest(fetchRepositoriesFailed, 'error message',
    {
      type: 'FETCH_REPOSITORIES_FAILED',
      payload: 'error message',
    }
  )
);