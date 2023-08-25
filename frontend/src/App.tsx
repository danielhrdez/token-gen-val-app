import { useState } from "react";
import "./App.css";
import { TokenDisplay } from "./components/TokenDisplay";
import type { Token } from "./types/token";
import { defaultDigitsActive } from "./constants";
import { Button } from "./components/Button";
import { SelectableDigits } from "./components/SelectableDigits";

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
    <main className="flex flex-col items-center gap-2 justify-around h-full max-h-[500px]">
      <h1 className="text-2xl sm:text-4xl font-semibold text-start">
        Token Generator Validator
      </h1>
      <TokenDisplay token={token} />
      <div className="flex justify-between w-full max-w-sm gap-2">
        <div className="flex flex-col">
          Active digits:
          <SelectableDigits {...{ setActiveDigits, activeDigits }} />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <Button onClick={handleGenerate}>Generate</Button>
          <Button onClick={() => {}} primary>
            Validate
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
