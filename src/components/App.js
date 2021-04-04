import React from 'react';
import AddItem from "./AddItem";
import Table from "./Table";

import '../style/App.css';

function App(props) {
  return (
      <div className="App">
          <AddItem />
          <Table />
    </div>
  );
}

export default App;