import React, { useState, useEffect, useRef } from "react";
import { makeSearchApiCall } from "./SearchBar";

function SearchHoc(EnhancedComponent) {
  const WrappedComponent = () => {
    const pageRef = useRef(1);
    const controller = useRef(null);

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
      makeSearchApiCall(search, pageRef.current, controller).then((data) => {
        setData(data.docs);
      });
    }, [search]);
    return (
      <div>
        <EnhancedComponent
          search={search}
          onChangeHandler={(e) => {
            setSearch(e.target.value);
          }}
          data={data}
        />
      </div>
    );
  };

  return WrappedComponent;
}

export default SearchHoc;
