import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderList from './OrderList';

// Mock de toda la biblioteca "react-router-dom"
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('ORDER LIST', () => {
  it('should render', async () => {
    render(
      <OrderList
        list={[
          {
            id: '1',
            name: 'Taco al pastor',
            description: 'Taco con carne al pastor y piña',
            price: 15.1,
            image: 'https://picsum.photos/200/300'
          }
        ]}
      />
    );

    const list = screen.getByRole('list', {
      name: ''
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole('heading');
    expect(items.length).toBe(1);
  });

  it('should render empty', async () => {
    render(<OrderList list={[]} />);

    const list = screen.getByRole('txt', {
      name: ''
    });

    const { getByText } = within(list);
    const item = getByText('Your order is empty...');
    expect(item).toBeInTheDocument();
  });
});
