import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [free, setFree] = useState(true)
  return (
    <div className="App">
      {free ? <h1>Take A Candyy</h1> : <h1>DOO the HomeWork</h1>}
      <Button

        action={() => {
          setFree(true)
        }}

        text="Finished HomeWork" />


      <Button

        action={() => {
          setFree(false)
        }}

        text=" Want a Candy" />
    </div>
  );
}

export default App;
