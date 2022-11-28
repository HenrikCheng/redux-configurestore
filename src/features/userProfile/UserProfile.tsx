import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectUser,
  updateName,
  emptyName,
  updateYears,
} from "./userProfileSlice";

export default function UserProfile() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(user.name);
  const [inputYears, setInputYears] = useState(user.yearsOfService);

  useEffect(() => {
    setInputValue(user.name);
  }, [user.name]);

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
        <input
          type="number"
          onChange={(e) => dispatch(updateYears(e.target.valueAsNumber))}
        />
      </form>
    </div>
  );
}
