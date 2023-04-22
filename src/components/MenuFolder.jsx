import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
const folder = [
  {
    name: "A",
    child: [
      {
        name: "AB",
        child: [
          { name: "ABA" },
          {
            name: "ABB",
          },
          {
            name: "ABC",
          },
        ],
      },
      {
        name: "AC",
        child: [
          { name: "ACA" },
          {
            name: "ACB",
          },
          {
            name: "ACC",
          },
        ],
      },
      {
        name: "AD",
        child: [
          { name: "ADA" },
          {
            name: "ADB",
          },
          {
            name: "ADC",
          },
        ],
      },
    ],
  },
  {
    name: "B",
    child: [
      {
        name: "BB",
        child: [
          { name: "BBA" },
          {
            name: "BBB",
          },
          {
            name: "BBC",
          },
        ],
      },
      {
        name: "BC",
        child: [
          { name: "BCA" },
          {
            name: "BCB",
          },
          {
            name: "BCC",
          },
        ],
      },
      {
        name: "BD",
        child: [
          { name: "BDA" },
          {
            name: "BDB",
          },
          {
            name: "BDC",
          },
        ],
      },
    ],
  },
  {
    name: "C",
    child: [
      {
        name: "CB",
        child: [
          { name: "CBA" },
          {
            name: "CBB",
          },
          {
            name: "CBC",
          },
        ],
      },
      {
        name: "CC",
        child: [
          { name: "CCA" },
          {
            name: "CCB",
          },
          {
            name: "CCC",
          },
        ],
      },
      {
        name: "CD",
        child: [
          { name: "CDA" },
          {
            name: "CDB",
          },
          {
            name: "CDC",
          },
        ],
      },
    ],
  },
];

const Recursive = ({ child }) => {
  const [clickAbleState, setClickAbleState] = useState("");

  return (
    <div>
      {child?.map((x) => {
        return (
          <div
            style={{
              border: "1px solid green",

              position: "relative",
            }}
            key={x.name}
          >
            <p
              onClick={() => {
                setClickAbleState(x.name);
                // if (clickAbleState) {
                //   setClickAbleState("");
                // } else {

                // }
              }}
            >
              {clickAbleState !== x.name ? (
                <FontAwesomeIcon icon={faFolder} />
              ) : (
                <FontAwesomeIcon icon={faFolderOpen} />
              )}
            </p>
            {clickAbleState === x.name && (
              <div style={{ position: "absolute", left: "20px" }}>
                <Recursive child={x.child} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const MenuFolder = () => {
  return (
    <div>
      <Recursive child={folder} />
    </div>
  );
};
