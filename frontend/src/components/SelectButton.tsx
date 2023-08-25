type SelectButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
};

export function SelectButton({
  children,
  onClick,
  selected,
}: SelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${selected ? "opacity-100" : "opacity-50"}
        hover:opacity-75 hover:shadow-lg
        transition
        duration-200
        ease-in-out
      `}
    >
      {children}
    </button>
  );
}
