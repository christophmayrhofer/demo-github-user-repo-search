import Immutable from 'immutable';

export const fetchUserRepositories = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    if (response.status === 404) {
      throw new Error('NOT_FOUND');
    }
    const repositories = await response.json();
    const immutableRepositories = Immutable.fromJS(repositories);
    return immutableRepositories;
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchUserRepositories;
