import { render, screen } from "@testing-library/react";
import MainPage from "./main.page";

describe("App", () => {
  it("should render", () => {
    render(<MainPage />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
