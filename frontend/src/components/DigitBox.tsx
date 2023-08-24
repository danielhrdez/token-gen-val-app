type DigitBoxProps = {
  digit: number;
};

export function DigitBox({ digit }: DigitBoxProps) {
  return (
    <span className="text-2xl p-1 h-10 w-10 bg-blue-200 rounded-md border border-blue-300 flex justify-center items-center">
      {digit}
    </span>
  );
}
