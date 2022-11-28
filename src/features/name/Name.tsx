import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectName, updateName, emptyName } from "./nameSlice";

export default function Name() {
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(name);

  useEffect(() => {
    setInputValue(name);
  }, [name]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={() => dispatch(updateName(inputValue))}>
          Submit
        </button>
        <button type="button" onClick={() => dispatch(emptyName())}>
          Empty
        </button>
      </form>
    </div>
  );
}
