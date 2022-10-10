import OrderModal from "./OrderModal"
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Order Modal", () => {
	let container;
	const checkout = jest.fn();
	const onClose = jest.fn();

	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement("div");
		container.setAttribute("id", "modal-root")
		document.body.appendChild(container);
	});

	it("should render", async () => {
		act(() => {
			const rendered = render(
				<OrderModal
					open={true}
					total={0}
					cart={[]}
					checkout={checkout}
					onClose={onClose} />
			)
			container = rendered.container;
		})
		const menuContainer = container.querySelector("#order-modal");
		expect(menuContainer).toBeInTheDocument();
	});
});