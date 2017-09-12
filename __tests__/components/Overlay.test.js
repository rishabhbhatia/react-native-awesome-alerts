import 'react-native';
import React from 'react';

import { Overlay } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Overlay />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
