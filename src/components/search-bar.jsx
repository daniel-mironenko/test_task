import React from "react";
let searchUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&srsearch=`;

export const SearchBar = ({ setData }) => {

  const getData = (endpoint) => {
    fetch(searchUrl + endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.query.search.forEach(async (it) => {
          const response = await fetch(
            `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${it.pageid}&inprop=url&format=json`
          );
          const json = await response.json();

          it.url = json.query.pages[it.pageid].fullurl;
        });

        return data;
      })
      .then((dataUpdated) => {
        setData(dataUpdated.query.search);
      });
  };

  return (
    <input
      onChange={(evt) => {
        getData(evt.target.value);
      }}
      type="search"
    ></input>
  );
};
