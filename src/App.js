import React, { useRef, useState } from 'react';
import { ListItem } from './components/list-item';
import { SearchBar } from './components/search-bar';

const url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&srsearch=";

function App() {
  const [data, setData] = useState(null);
  const [keyWord, setKeyWord] = useState("");
  const [visibleCountResults , setvisibleCountResults] = useState(0);
  const targetRef = useRef()

  const getData = (visibleLinks) => {
    const endpoint = targetRef.current.value;

    if (!endpoint.trim()) {
      setData(null);
      return;
    }

    fetch(`${url}${endpoint}}&sroffset=${visibleLinks}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  };

  return (
    <div className="App">
      <SearchBar 
        setData={setData} 
        setKeyWord={setKeyWord} 
        setvisibleCountResults={setvisibleCountResults} 
        getData={getData} 
        targetRef={targetRef} 
      />
      {data && 
        <ListItem 
          data={data} 
          keyWord={keyWord} 
          setvisibleCountResults={setvisibleCountResults} 
          getData={getData} 
          targetRef={targetRef} 
          visibleCountResults={visibleCountResults} 
        />
      }
    </div>
  );
}

export default App;

