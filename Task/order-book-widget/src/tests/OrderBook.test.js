import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import OrderBook from '../OrderBook';

test('renders order book with controls', () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );

  expect(screen.getByText(/Increase Precision/i)).toBeInTheDocument();
  expect(screen.getByText(/Decrease Precision/i)).toBeInTheDocument();
  expect(screen.getByText(/Zoom In/i)).toBeInTheDocument();
  expect(screen.getByText(/Zoom Out/i)).toBeInTheDocument();
});

test('increase and decrease precision', () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );

  const increaseButton = screen.getByText(/Increase Precision/i);
  const decreaseButton = screen.getByText(/Decrease Precision/i);

  fireEvent.click(increaseButton);
  fireEvent.click(decreaseButton);

});

test('zoom in and zoom out rows', () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );

  const zoomInButton = screen.getByText(/Zoom In/i);
  const zoomOutButton = screen.getByText(/Zoom Out/i);

  fireEvent.click(zoomInButton);
  fireEvent.click(zoomOutButton);

  // Add assertions based on the visible number of rows
});
