import React from "react";

export const Hoc = (Component, data) => {
  const Wrapper = (props) => {
    console.log("props", props);
    return (
      <div>
        <Component data={data} {...props} />
      </div>
    );
  };
  return Wrapper;
};
