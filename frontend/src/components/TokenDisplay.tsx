import type { Token } from "../types/token";
import { splitByHalfs } from "../utils/splitByHalfs";
import { DigitBox } from "./DigitBox";

type TokenDisplayProps = {
  token: Token;
};

function FlexBox({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center flex-wrap gap-2">{children}</div>;
}

export function TokenDisplay({ token }: TokenDisplayProps) {
  const splittedToken = splitByHalfs(token);
  return (
    <div>
      Token:
      <FlexBox>
        {splittedToken.map((half, i) => (
          <FlexBox key={i}>
            {half.map((quarter, j) => (
              <FlexBox key={i + j}>
                {quarter.map((digit, k) => (
                  <DigitBox key={i + j + k} digit={digit} />
                ))}
              </FlexBox>
            ))}
          </FlexBox>
        ))}
      </FlexBox>
    </div>
  );
}
