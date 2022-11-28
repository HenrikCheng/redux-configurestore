import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectName } from "./nameSlice";
import updateName from "./nameSlice";

export default function Name() {
  // const inputValue = useSelector(state => state.sample.value)
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    // dispatch(updateName(e.target.value));
  };

  return (
    <div>
      {name}
      <form>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
