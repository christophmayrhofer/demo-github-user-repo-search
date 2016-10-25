import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spin';
import RepositoryList from './RepositoryList';
import { updateUsername, fetchUserRepositories } from '../redux/actions';

export const RepositorySearchFormComponent = ({
    username = 'christophmayrhofer',
    hasNeverFetched = true,
    isFetching = false,
    hasFetchError = false,
    errorMessage = '',
    repositories = Immutable.List.of(),
    onChangeUsername = () => {},
    onClickFetch = () => {},
  }) => (
    <div className="flex">
      <form className="form-inline full-width">
        <input id="username" type="text" className="form-control" placeholder="Github Username" value={username} onChange={onChangeUsername} />
        <input id="submit" type="submit" className="btn btn-primary" onClick={onClickFetch} value="Fetch Repositories" />
      </form>

      <Choose>
        <When condition={hasNeverFetched}>
          <div className="alert alert-info">
            Enter Github username and click fetch...
          </div>
        </When>
        <When condition={isFetching}>
          <Spinner />
        </When>
        <When condition={hasFetchError}>
          <div className="alert alert-danger">
            {errorMessage}
          </div>
        </When>
        <Otherwise>
          <RepositoryList repositories={repositories} />
        </Otherwise>
      </Choose>
    </div>
);

RepositorySearchFormComponent.propTypes = {
  username: PropTypes.string.isRequired,
  hasNeverFetched: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasFetchError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  repositories: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    })
  ),
  onChangeUsername: PropTypes.func.isRequired,
  onClickFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.getIn(['repositoriesSearch', 'username']),
  hasNeverFetched: state.getIn(['repositoriesSearch', 'hasNeverFetched']),
  isFetching: state.getIn(['repositoriesSearch', 'isFetching']),
  hasFetchError: state.getIn(['repositoriesSearch', 'hasFetchError']),
  errorMessage: state.getIn(['repositoriesSearch', 'errorMessage']),
  repositories: state.getIn(['repositoriesSearch', 'repositories']),
});
const mapDispatchToProps = dispatch => ({
  onClickFetch: (event) => { event.preventDefault(); dispatch(fetchUserRepositories()); },
  onChangeUsername: event => dispatch(updateUsername(event.target.value)),
});

const RepositorySearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositorySearchFormComponent);

export default RepositorySearchForm;
