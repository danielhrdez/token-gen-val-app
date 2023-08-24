import { useState } from "react";
import "./App.css";
import { TokenDisplay } from "./components/TokenDisplay";
import type { Token } from "./types/token";

function App() {
  const [token, setToken] = useState<Token>("9999999999999999");
  const handleGenerate = () => {
    setToken(
      token
        .split("")
        .map(() => {
          return Math.floor(Math.random() * 10);
        })
        .join("") as Token
    );
  };
  return (
    <>
      <h1 className="text-4xl font-semibold">Token Generator Validator</h1>
      <TokenDisplay token={token} />
      <div>
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={() => {}}>Validate</button>
      </div>
    </>
  );
}

export default App;
