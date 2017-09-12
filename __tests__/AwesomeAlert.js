import 'react-native';
import React from 'react';

import AwesomeAlert from '../src';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AwesomeAlert />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
