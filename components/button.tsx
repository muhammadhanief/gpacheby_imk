import { FC } from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-cheby text-black hover:bg-black hover:text-white border-none py-4 px-8 rounded  cursor-pointer"
    >
      {name}
    </button>
  );
};

export default Button;
