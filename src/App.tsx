import { useState } from "react";
import "./App.css";
import { Checkboxgroup } from "./components/checkboxGroup";
import { CheckboxGroupMenu } from "./components/CheckboxGroupMenu";
import { Menu } from "./components/Menu";

function App() {
  const [free, setFree] = useState(true);
  return (
    <div className="App">

      {free ? <h1>Take A Candyy</h1> : <h1>DOO the HomeWork</h1>}


      <Menu setFree={setFree} />
      < CheckboxGroupMenu />


    </div>
  );
}

export default App;
