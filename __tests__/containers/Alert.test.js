import 'react-native';
import React from 'react';

import Alert from '../../src/containers/alert';

import renderer from 'react-test-renderer';

import props from '../props';

test('renders correctly', () => {
  const tree = renderer.create(
    <Alert {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
