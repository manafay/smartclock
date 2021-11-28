import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Smart Clock App', async () => {
  jest.useFakeTimers();
  render(<App />);
  await waitFor(() => jest.runOnlyPendingTimers());
  const linkElement = screen.getByTestId('smart-clock-app');
  const analogClock = screen.getByTestId('smart-analag-clock');
  const digitalClock = screen.getByTestId('smart-digital-clock');
  expect(linkElement).toBeInTheDocument();
  expect(analogClock).toBeInTheDocument();
  expect(digitalClock).toBeInTheDocument();
});
