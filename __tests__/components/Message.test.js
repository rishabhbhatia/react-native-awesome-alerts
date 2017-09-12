import 'react-native';
import React from 'react';

import { Message } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Message />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
