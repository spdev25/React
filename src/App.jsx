import { useState } from "react";
import Cookies from "./Components/Cookies";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Cookies />
    </>
  );
}

export default App;
