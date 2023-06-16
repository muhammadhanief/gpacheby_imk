import { FC } from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-cheby border-none py-4 px-8 rounded hover:brightness-110 duration-300 cursor-pointer"
    >
      {name}
    </button>
  );
};

export default Button;
