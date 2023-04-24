import React, { useEffect, useRef, useState } from "react";
import SearchHoc from "./SearchHoc";
import { ContentContainer } from "./ContentContainer";

export const makeSearchApiCall = async (q, page, controller) => {
  if (controller.current) controller.current.abort();
  controller.current = new AbortController();
  const data = await fetch(
    `https://openlibrary.org/search.json?q=${q}&page=${page}`,
    {
      method: "GET",
      signal: controller.current.signal,
    }
  );

  return await data.json();
};
const SearchBar = ({ search, onChangeHandler, data }) => {
  return (
    <div>
      <input
        type='text'
        value={search}
        placeholder='search'
        onChange={onChangeHandler}
      />

      {data.map(({ title }) => {
        return <ContentContainer title={title} />;
      })}
    </div>
  );
};

export const EhancedSearchBar = SearchHoc(SearchBar);
