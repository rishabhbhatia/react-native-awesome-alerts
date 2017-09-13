import 'react-native';
import React from 'react';

import { Button } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Button
      show={true}
      text="Dismiss"
      backgroundColor="#AEDEF4"
    />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
