import React from "react";

export const RenderProps = ({ name, children }) => {
  return (
    <div>
      welocome
      <p>Hello</p>
      {name("red")}
      {children}
      {name("green")}
    </div>
  );
};
