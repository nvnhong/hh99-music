import { useState } from "react";

function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return [input, handleChange];
}

export default useInput;
