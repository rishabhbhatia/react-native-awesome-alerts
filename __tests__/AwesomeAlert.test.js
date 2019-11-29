import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

import AwesomeAlert from '../src/AwesomeAlert';

import props from './props';

test('renders correctly', () => {
  const tree = renderer.create(<AwesomeAlert {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
