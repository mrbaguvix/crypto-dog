import { render, screen } from '@testing-library/react';
import App from './App';

describe('Base test', () => {
  test('renders CryptoDog headline', () => {
    render(<App />);
    const linkElement = screen.getByText('CryptoDog');
    expect(linkElement).toBeInTheDocument();
  });
});
