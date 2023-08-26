import { describe, it, expect } from "vitest";
import { SelectButton } from "./SelectButton";
import { render, screen } from '@testing-library/react'

describe("SelectButton", () => {
  it("renders", () => {
    const onClick = () => {};
    const selected = false;
    render(
      <SelectButton onClick={onClick} selected={selected}>
        SelectButton
      </SelectButton>
    );
    const selectButton = screen.findByText(/SelectButton/);
    expect(selectButton).toMatchSnapshot();
  });

  it("renders onClick", async () => {
    let counter = 0;
    const onClick = () => counter++;
    const selected = false;
    render(
      <SelectButton onClick={onClick} selected={selected}>
        SelectButton
      </SelectButton>
    );
    const selectButton = screen.findByText(/SelectButton/);
    (await selectButton).click();
    expect(counter).toBe(1);
  });
});
