import 'react-native';
import React from 'react';

import Alert from '../../src/containers';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Alert />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
