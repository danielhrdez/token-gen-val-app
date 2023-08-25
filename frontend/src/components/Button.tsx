type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
};

export function Button({ children, onClick, primary }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        p-2
        rounded-md
        shadow-md w-20
        ${primary ? "bg-green-400" : "bg-blue-400"}
        hover:bg-opacity-80 hover:shadow-lg
        transition
        duration-200
        ease-in-out
      `}
    >
      {children}
    </button>
  );
}
