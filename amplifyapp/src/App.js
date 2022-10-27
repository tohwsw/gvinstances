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
    <div>
      <div className="w3-container w3-red">The information on this page is to provide general guidance in instance selection for those who are transitioning to Graviton from x86.
    These are general guidelines to help make initial recommendations, and adjustments maybe necessary after factoring performance</div>
      <div className="w3-container w3-yellow"> Graviton instances top out at 16xl</div>
      <h1>Graviton Instance Search</h1>
      <p>Please key in an x86 instance (C,R,M or T) to get a Graviton instance recommendation</p>
      <p>eg. c5.xlarge, r6a.2xlarge</p>
      <div>
        <input type="text"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
        />
      <p></p>
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
