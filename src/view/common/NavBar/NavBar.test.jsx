import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

// Mock de toda la biblioteca "react-router-dom"
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('NAVBAR', () => {
  it('should render open', async () => {
    render(<NavBar />);

    const item = screen.getByRole('alert', {
      name: ''
    });
    expect(item).toBeInTheDocument();
  });
});
