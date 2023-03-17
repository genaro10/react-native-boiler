import 'react-native';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import InitialScreen from '../src/initialScreen/InitialScreen';
import React from 'react';

describe('Ejemploi inicial', () => {
  it('Renderiza loading y texto', async () => {
    render(<InitialScreen />);
    const button = screen.getByTestId('button');
    const result = fireEvent.press(button);
    expect(result).toBe(30);
    const loadingText = screen.getByTestId('cargando');
    // fetchMock.mockResolvedValue({json: jest.fn(() => false)});
    expect(loadingText).toBeDefined();
    await waitFor(() => screen.getByTestId('texto'));
  });
});
