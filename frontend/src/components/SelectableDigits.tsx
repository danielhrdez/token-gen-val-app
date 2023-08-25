import { digits } from "../constants";
import { DigitBox } from "./DigitBox";
import { SelectButton } from "./SelectButton";

type SelectableDigitsProps = {
  setActiveDigits: React.Dispatch<
    React.SetStateAction<{
      [key: number]: boolean;
    }>
  >;
  activeDigits: {
    [key: number]: boolean;
  };
};

export function SelectableDigits({
  setActiveDigits,
  activeDigits,
}: SelectableDigitsProps) {
  return (
    <div className="flex flex-wrap w-[120px] justify-center">
      {digits
        .map((i) => {
          return (
            <SelectButton
              key={i}
              onClick={() =>
                setActiveDigits({
                  ...activeDigits,
                  [i]: !activeDigits[i],
                })
              }
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
