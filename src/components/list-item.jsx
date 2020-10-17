import React, { Fragment } from "react";
import { useDidUpdateEffect } from "../hooks";

const STEP = 10;

export const ListItem = ({ data, keyWord, setvisibleCountResults, getData, visibleCountResults }) => {
  
  const checkText = (text) => {
    if (!keyWord.trim()) {
      return text;
    }

    const target = keyWord;
    const regPattern = new RegExp(`${target}`, "gi");

    const replacer = (match) => {
      return `<mark>${match}</mark>`;
    };

    return text.replace(regPattern, replacer);
  };

  useDidUpdateEffect(() => {
    if (visibleCountResults !== 0) {
      getData(visibleCountResults)
    }
  }, [visibleCountResults])

  return (
    <Fragment>
      <ul>
        {data.query.search.map((it) => {
          const title = checkText(it.title);
          const snippet = checkText(it.snippet);
          const url = `http://en.wikipedia.org/wiki?curid=${it.pageid}`;

          return (
            <li key={it.pageid}>
              <h3>
                <a
                  target="blank"
                  href={url}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></a>
              </h3>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: snippet }}
              ></p>
            </li>
          );
        })}
      </ul>
      {visibleCountResults + STEP < data.query.searchinfo.totalhits &&
        <button 
        className="btn"
        onClick={() => {
          setvisibleCountResults(prev => prev + STEP)
        }}>Continue</button>
      }
    </Fragment>
  );
};
