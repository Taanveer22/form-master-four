import { useState } from "react";

const useInputStateReturnArray = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleInputChange];
};

export default useInputStateReturnArray;
