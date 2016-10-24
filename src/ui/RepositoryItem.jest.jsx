import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RepositoryItem from './RepositoryItem';

describe('RepositoryItem', () => {
  it('renders correctly', () => {
    const props = {
      name: 'RepositoryName',
      language: 'RepositoryLanguage',
      description: 'RepositoryDescription',
      htmlUrl: 'RepositoryUrl',
    };

    const wrapper = shallow(
      <RepositoryItem {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
