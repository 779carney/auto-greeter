import { useState } from "react";

function InputName({ name, setName, setIsSubmitted }) {
  const [isDisabled, setIsDisabled] = useState(false);
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    setIsDisabled(true);
  }

  function handleReset() {
    setIsSubmitted(false);
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-box">What's your name?</label>
        <input
          type="text"
          id="name-box"
          onChange={handleChange}
          value={name}
          disabled={isDisabled}
        />
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}

export default InputName;
