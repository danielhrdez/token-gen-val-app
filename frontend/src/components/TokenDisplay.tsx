import { useEffect, useState } from "react";
import type { Token } from "../types/token";
import { splitByHalfs } from "../utils/splitByHalfs";
import { DigitBox } from "./DigitBox";

type TokenDisplayProps = {
  token: Token;
};

/**
 * FlexBox component
 * @description Renders a flexbox
 */
function FlexBox({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center flex-wrap gap-2">{children}</div>;
}

/**
 * TokenDisplay component
 * @description Renders the token
 */
export function TokenDisplay({ token }: TokenDisplayProps) {
  const splittedToken = splitByHalfs(token);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <FlexBox>
      {splittedToken.map((half, i) => (
        <FlexBox key={i}>
          {half.map((quarter, j) => (
            <FlexBox key={i + j}>
              {quarter.map((digit, k) => (
                <DigitBox key={i + j + k} digit={digit} />
              ))}
              {windowWidth > 470 && j === 0 && (
                <span className="w-5 h-10 flex justify-center items-center">
                  -
                </span>
              )}
              {windowWidth > 930 && j !== 0 && i === 0 && (
                <span className="w-5 h-10 flex justify-center items-center">
                  -
                </span>
              )}
            </FlexBox>
          ))}
        </FlexBox>
      ))}
    </FlexBox>
  );
}
