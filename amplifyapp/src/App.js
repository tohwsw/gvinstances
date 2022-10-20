import { React, useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div>The information on this page is to provide general guidance in instance selection for those who are transitioning to Graviton from x86.
    These are general guidelines to help make initial recommendations, and adjustments maybe necessary after factoring performance</div>
      <h1>Graviton Search</h1>
      <div className="search">
        <input type="text"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
