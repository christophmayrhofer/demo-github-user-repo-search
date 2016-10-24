import Immutable from 'immutable';

const repositoriesSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return state.merge({
        username: action.payload,
      });

    case 'USER_FETCH_REQUESTED':
      return state.merge({
        hasNeverFetched: false,
        hasFetchError: false,
        isFetching: true,
      });

    case 'FETCH_REPOSITORIES_SUCCEEDED':
      return state.merge({
        repositories: action.payload,
        hasFetchError: false,
        isFetching: false,
      });

    case 'FETCH_REPOSITORIES_FAILED':
      return state.merge({
        repositories: Immutable.List.of(),
        hasFetchError: true,
        isFetching: false,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default repositoriesSearchReducer;
