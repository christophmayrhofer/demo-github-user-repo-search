import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Immutable from 'immutable';
import RepositoryList from './RepositoryList';

describe('RepositoryList', () => {
  it('renders existing repositories', () => {
    const props = {
      repositories: Immutable.fromJS([
        {
          id: 1,
          name: 'RepositoryName 1',
          description: 'RepositoryDescription 1',
          language: 'RepositoryLanguage 1',
          html_url: 'RepositoryUrl 1',
        },
        {
          id: 2,
          name: 'RepositoryName 2',
          description: 'RepositoryDescription 2',
          language: 'RepositoryLanguage 2',
          html_url: 'RepositoryUrl 2',
        },
      ]),
    };

    const wrapper = shallow(
      <RepositoryList {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders message if the list contains no repositories', () => {
    const props = { repositories: Immutable.fromJS([]) };

    const wrapper = shallow(
      <RepositoryList {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
