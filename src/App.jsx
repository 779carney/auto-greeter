import { useState } from "react";
import InputName from "./InputName";
import "./App.css";
import Message from "./Message";

function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Message name={name} isSubmitted={isSubmitted} />
      <InputName
        name={name}
        setName={setName}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  );
}

export default App;
