import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorSnackBar from "./ErrorSnackBar";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ERROR SNACKBAR", () => {
    const handleClose = jest.fn();
  it("should render open", async () => {
    render(
      <ErrorSnackBar
        msg="im an error"
        severity="error"
        handleClose={handleClose}
        open={true}
      />
    );

    const item = screen.getByRole("alert", {
      name: "",
    });
    expect(item).toBeInTheDocument();
  });
});