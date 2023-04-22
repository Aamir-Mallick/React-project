import React from "react";
import { Hoc } from "./Hoc";

const LogInLogOut = ({ data, value }) => {
  console.log("vla", value);
  return (
    <div>
      LogInLogOut {data}: {value}
    </div>
  );
};

export const Enhanced = Hoc(LogInLogOut, "aamir");
