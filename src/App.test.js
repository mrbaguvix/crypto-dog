import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoDog headline', () => {
  render(<App />);
  const linkElement = screen.getByText('CryptoDog');
  expect(linkElement).toBeInTheDocument();
});
