import 'react-native';
import React from 'react';

import { Message } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Message message="I am just a message" />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
