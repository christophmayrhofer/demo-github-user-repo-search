import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => (
  <div className="flex full-width">
    <If condition={repositories.count() === 0}>
      <div className="alert alert-info">
        This user does not have any public repositories.
      </div>
    </If>

    {repositories.map(repository => (
      <RepositoryItem
        key={repository.get('id')}
        name={repository.get('name')}
        description={repository.get('description')}
        language={repository.get('language')}
        htmlUrl={repository.get('html_url')}
      />
    ))}
  </div>
);

RepositoryList.propTypes = {
  repositories: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    })
  ),
};

export default RepositoryList;
