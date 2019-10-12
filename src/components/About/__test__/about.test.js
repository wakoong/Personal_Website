import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../about.tsx';

afterEach(cleanup);

test('renders with snapshot', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});

test('Contains welcome text with hand wavy emoji', () => {
  const { getByText } = render(<About />);
  expect(getByText('👋 Welcome!')).toBeInTheDocument();
});
