import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { RepositorySearchFormComponent } from './RepositorySearchForm';

describe('RepositorySearchForm', () => {
  const baseState = Immutable.fromJS({
    username: 'username',
    hasNeverFetched: false,
    isFetching: false,
    hasFetchError: false,
    errorMessage: '',
    repositories: Immutable.List.of(),
    onChangeUsername: jest.fn(),
    onClickFetch: jest.fn(),
  });

  it('renders hasNeverFetched message if the fetch button has never been pressed', () => {
    const props = baseState.merge({ hasNeverFetched: true }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders a spinner if isFetching is true', () => {
    const props = baseState.merge({ hasNeverFetched: false, isFetching: true }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders errorMessage if hasFetchError is true', () => {
    const props = baseState.merge({
      hasNeverFetched: false,
      isFetching: false,
      hasFetchError: true,
      errorMessage: 'errorMessage',
    }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders repositoryList after fetching', () => {
    const props = baseState.merge({
      repositories: Immutable.List.of(),
    }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('calls onChangeUsername when typing in the username input field', () => {
    const props = baseState.merge({
      onChangeUsername: jest.fn(),
    }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    wrapper.find('#username').simulate('change', 'username');
    expect(props.onChangeUsername).toBeCalledWith('username');
  });

  it('calls onClickFetch when the fetch button is clicked', () => {
    const props = baseState.merge({
      onClickFetch: jest.fn(),
    }).toObject();

    const wrapper = shallow(
      <RepositorySearchFormComponent {...props} />
    );

    wrapper.find('#submit').simulate('click');
    expect(props.onClickFetch).toBeCalled();
  });
});
