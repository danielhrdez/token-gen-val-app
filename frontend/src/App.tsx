import { useState } from "react";
import "./App.css";
import { TokenDisplay } from "./components/TokenDisplay";
import type { Token } from "./types/token";
import { DigitBox } from "./components/DigitBox";
import { defaultDigitsActive, digits } from "./constants";
import { SelectButton } from "./components/SelectButton";
import { Button } from "./components/Button";

function App() {
  const [token, setToken] = useState<Token>("0000000000000000");
  const [activeDigits, setActiveDigits] = useState(defaultDigitsActive);
  const handleGenerate = () => {
    async function randomToken() {
      return token
        .split("")
        .map(() => {
          const activeDigitsArray = Object.entries(activeDigits)
            .filter(([, value]) => value)
            .map(([key]) => Number(key));
          const randomElement =
            activeDigitsArray[
              Math.floor(Math.random() * activeDigitsArray.length)
            ];
          return randomElement;
        })
        .join("") as Token;
    }
    randomToken()
      .then((token) => setToken(token))
      .catch(console.error);
  };
  return (
    <div className="flex flex-col items-center gap-2 justify-around h-full max-h-[500px]">
      <h1 className="text-2xl sm:text-4xl font-semibold text-start">
        Token Generator Validator
      </h1>
      <TokenDisplay token={token} />
      <div className="flex justify-between w-full max-w-sm gap-2">
        <div className="flex flex-wrap max-w-[120px] justify-center">
          Active digits:
          {digits
            .map((i) => {
              return (
                <SelectButton
                  key={i}
                  onClick={() =>
                    setActiveDigits({ ...activeDigits, [i]: !activeDigits[i] })
                  }
                  selected={activeDigits[i]}
                >
                  <DigitBox digit={i} />
                </SelectButton>
              );
            })
            .reverse()}
        </div>
        <div className="flex flex-col justify-center w-full gap-2">
          <Button onClick={handleGenerate}>Generate</Button>
          <Button onClick={() => {}} primary>
            Validate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
