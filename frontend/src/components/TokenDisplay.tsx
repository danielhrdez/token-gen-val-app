import type { Token } from "../types/token";
import { DigitBox } from "./DigitBox";

type TokenDisplayProps = {
  token: Token;
};

export function TokenDisplay({ token }: TokenDisplayProps) {
  return (
    <div className="flex items-center justify-center gap-1">
      {token.split("").map((t, i) => {
        return (
          <>
            <DigitBox key={t} digit={parseInt(t, 10)} />
            {i % 4 === 3 && i !== token.length - 1 ? (
              <span className="text-2xl p-1 h-10 w-10">-</span>
            ) : null}
          </>
        );
      })}
    </div>
  );
}
