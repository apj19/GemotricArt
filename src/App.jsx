import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Art from "./Components/Art";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-w-[375px] max-w-[1440px] min-h-[100vh] flex justify-center items-start bg-cover bg-center overflow-hidden bg-[#111] pt-16"
      style={{ backgroundImage: "url(./bcg1.jpg)" }}
    >
      <Art />
    </div>
  );
}

export default App;
