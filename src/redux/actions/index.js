export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  payload: username,
});

export const fetchUserRepositories = () => ({
  type: 'USER_FETCH_REQUESTED',
});

export const fetchRepositoriesSucceeded = repositories => ({
  type: 'FETCH_REPOSITORIES_SUCCEEDED',
  payload: repositories,
});

export const fetchRepositoriesFailed = errorMessage => ({
  type: 'FETCH_REPOSITORIES_FAILED',
  payload: errorMessage,
});
