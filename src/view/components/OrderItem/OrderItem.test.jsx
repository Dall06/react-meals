import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import OrderItem from "./OrderItem";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ORDER ITEM", () => {
  it("should render", async () => {
    render(
      <OrderItem
        data={{
            id: "1",
            name: "Taco al pastor",
            description: "Taco con carne al pastor y piña",
            price: 15.1,
            image: "https://picsum.photos/200/300",
          }}
      />
    );

    const item = screen.getByRole("heading")
    expect(item).toBeInTheDocument();
  });
});
