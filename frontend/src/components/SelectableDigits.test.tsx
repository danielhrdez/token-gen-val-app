import { describe, it, expect } from "vitest";
import { SelectableDigits } from "./SelectableDigits";
import { render, screen } from '@testing-library/react'
import { defaultDigitsActive } from "../utils/constants";
import { Digit } from "../types/digits";

describe("SelectableDigits", () => {
  it("renders", () => {
    const onClick = () => {};
    const activeDigits = defaultDigitsActive;
    render(<SelectableDigits onClick={onClick} activeDigits={activeDigits} />);
    const selectableDigits = screen.findByText(/1234567890/);
    expect(selectableDigits).toMatchSnapshot();
  });

  it("renders onClick", async () => {
    let counter = 0;
    const onClick = (i: Digit) => counter += i;
    const activeDigits = defaultDigitsActive;
    render(<SelectableDigits onClick={onClick} activeDigits={activeDigits} />);
    const selectableDigits = screen.findByText(/5/);
    (await selectableDigits).click();
    expect(counter).toBe(5);
  });
});
