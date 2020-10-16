import React, { useState } from 'react';
import { ListItem } from './components/listItem';
import { SearchBar } from './components/search-bar';

function App() {
  const [data, setData] = useState(null);
  
  return (
    <div className="App">
      <SearchBar setData={setData} />
      {data && <ListItem data={data} />}
    </div>
  );
}

export default App;

