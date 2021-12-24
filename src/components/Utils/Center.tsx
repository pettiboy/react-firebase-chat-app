import React from "react";

interface Props {
  children: React.ReactNode;
  height?: number;
}

const Center = ({ children, height = 100 }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: height + "vh",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
