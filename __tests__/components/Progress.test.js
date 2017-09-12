import 'react-native';
import React from 'react';

import { Progress } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Progress />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
