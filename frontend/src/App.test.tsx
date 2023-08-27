import { describe, it, expect } from "vitest";
import { App } from "./App";
import { render, screen } from '@testing-library/react'

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const app = screen.findByText(/Token Generator Validator/);
    expect(app).toMatchSnapshot();
  });
});
