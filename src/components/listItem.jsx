import React from "react";

export const ListItem = ({ data }) => {

  return (
    <ul>
      {data.map((it) => {
        return (
          <li key={it.pageid}>
            <h3>
              <a href={"#"}>{it.title}</a>
            </h3>
            <span>
              <a href={"#"}></a>
            </span>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: it.snippet }}
            ></p>
          </li>
        );
      })}
    </ul>
  );
};
