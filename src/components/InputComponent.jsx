import React, { useState } from "react";

export const InputComponent = () => {
  const [data, setData] = useState("");

  const InputButton = ({ value }) => {
    return <div>{value}</div>;
  };

  return (
    <>
      <h1>welcome</h1>
      <InputButton
        value={
          <input
            type='text'
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
        }
      />
    </>
  );
};
