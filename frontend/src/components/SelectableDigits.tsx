import { digits } from "../utils/constants";
import { DigitBox } from "./DigitBox";
import { SelectButton } from "./SelectButton";

type SelectableDigitsProps = {
  onClick: (digit: number) => void;
  activeDigits: {
    [key: number]: boolean;
  };
};

/**
 * SelectableDigits component
 * @description Renders the selectable digits in a form of calc buttons
 */
export function SelectableDigits({
  onClick,
  activeDigits,
}: SelectableDigitsProps) {
  return (
    <div className="flex flex-wrap w-[120px] justify-center">
      {digits
        .map((i) => {
          return (
            <SelectButton
              key={i}
              onClick={() => onClick(i)}
              selected={activeDigits[i]}
            >
              <DigitBox digit={i} />
            </SelectButton>
          );
        })
        .reverse()}
    </div>
  );
}
