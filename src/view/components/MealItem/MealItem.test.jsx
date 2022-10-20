import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MealItem from './MealItem';

// Mock de toda la biblioteca "react-router-dom"
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('ORDER ITEM', () => {
  it('should render', async () => {
    render(
      <MealItem
        data={{
          id: '1',
          name: 'Taco al pastor',
          description: 'Taco con carne al pastor y piña',
          price: 15.1,
          image: 'https://picsum.photos/200/300'
        }}
        id={1}
      />
    );

    const item = screen.getByRole('heading', {
      name: 'Taco al pastor'
    });
    expect(item).toBeInTheDocument();
  });

  it('should handle change', async () => {
    render(
      <MealItem
        data-testid="my-wrapper"
        data={{
          id: '1',
          name: 'Taco al pastor',
          description: 'Taco con carne al pastor y piña',
          price: 15.1,
          image: 'https://picsum.photos/200/300'
        }}
        id={1}
      />
    );

    const item = screen.getByRole('button', {
      name: '0'
    });
    expect(item).toBeInTheDocument();
  });
});
