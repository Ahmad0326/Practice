import React, { useState } from "react";
import List from "./List";

function Form() {
  const [val, setVal] = useState("");
  const [list, setlist] = useState([]);
  const onClick = () => {
    setlist([...list, val]);
    console.log(list);
    setVal("");
  };

  return (
    <div>
      <input
        placeholder="Enter Anything"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <span>
        <button onClick={onClick}>Click</button>
      </span>
      <div>
        {list.map((items) => {
          return (
            <div>
              <List item={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
