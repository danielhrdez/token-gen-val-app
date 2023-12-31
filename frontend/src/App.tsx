import { useState } from "react";
import { TokenDisplay } from "./components/TokenDisplay";
import { defaultDigitsActive } from "./utils/constants";
import { Button } from "./components/Button";
import { SelectableDigits } from "./components/SelectableDigits";
import { useToken } from "./hooks/useToken";
import { useVerifyToken } from "./hooks/useVerifyToken";
import { Digit } from "./types/digits";

/**
 * Main app component
 * @description Renders the main app component
 */
export function App() {
  const { token, setToken } = useToken();
  const [activeDigits, setActiveDigits] = useState(defaultDigitsActive);
  const { validToken, setValidToken } = useVerifyToken();
  const [errorMessage, setErrorMessage] = useState<string>("");

  /**
   * Handles the generate button click
   * @description Generates and set a new token
   */
  const handleGenerate = () => {
    const allowedDigits = Object.entries(activeDigits)
      .filter(([, value]) => value)
      .map(([key]) => Number(key) as Digit);
    setToken({
      digits: allowedDigits,
      onError: (msg: string) => setErrorMessage(msg),
    });
  };

  /**
   * Handles the validate button click
   * @description Validates the token
   */
  const handleValidate = () => {
    setValidToken({
      token,
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
