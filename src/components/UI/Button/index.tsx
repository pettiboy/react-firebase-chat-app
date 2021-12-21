import React from "react";

interface Props {
  onClick(): void;
  title: string;
}

const Button = ({ onClick, title }: Props) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
