import { useState } from "react";
import "./App.css";
import { TokenDisplay } from "./components/TokenDisplay";
import { defaultDigitsActive } from "./utils/constants";
import { Button } from "./components/Button";
import { SelectableDigits } from "./components/SelectableDigits";
import { useToken } from "./hooks/useToken";
import { useVerifyToken } from "./hooks/useVerifyToken";

function App() {
  const { token, setToken } = useToken();
  const [activeDigits, setActiveDigits] = useState(defaultDigitsActive);
  const { validToken, setValidToken } = useVerifyToken();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleGenerate = () => {
    const allowedDigits = Object.entries(activeDigits)
      .filter(([, value]) => value)
      .map(([key]) => Number(key));
    setToken({
      digits: allowedDigits,
      onError: (msg: string) => setErrorMessage(msg),
    });
  };

  const handleValidate = () => {
    let tokenString = "";
    token.forEach((digit, index) => {
      if (index % 4 === 0 && index !== 0) {
        tokenString += "-";
      }
      tokenString += digit;
    });
    setValidToken({
      token: tokenString,
      onError: (msg: string) => setErrorMessage(msg),
    });
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
          <SelectableDigits
            activeDigits={activeDigits}
            onClick={(i) =>
              setActiveDigits({
                ...activeDigits,
                [i]: !activeDigits[i],
              })
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <Button onClick={handleGenerate}>Generate</Button>
          <Button onClick={handleValidate} primary>
            Validate
          </Button>
          {validToken ? (
            <div className="text-green-500 text-center">Valid token</div>
          ) : (
            <div className="text-red-500 text-center">Invalid token</div>
          )}
        </div>
      </div>
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
    </main>
  );
}

export default App;
