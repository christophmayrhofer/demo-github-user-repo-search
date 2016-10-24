import React, { PropTypes } from 'react';

const RepositoryItem = ({ name, htmlUrl, description, language }) => (
  <div className="panel panel-default repositoryPanel">
    <div className="panel-heading">
      <a href={htmlUrl}> {name} </a>

      <If condition={language}>
        <b> ({language}) </b>
      </If>

    </div>
    <div className="panel-body"> <cite> {description} </cite> </div>
  </div>
);

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
};

export default RepositoryItem;
