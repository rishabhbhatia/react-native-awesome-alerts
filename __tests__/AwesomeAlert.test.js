import 'react-native';
import React from 'react';

import AwesomeAlert from '../src';

import props from './props';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AwesomeAlert {...props} />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
