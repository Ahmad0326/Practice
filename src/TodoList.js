import React, { useState, useEffect } from "react";

export default function TodoList({ Todo, setTodo, items, func, index }) {
  const [editAble, seteditAble] = useState(false);
  const clicked = () => {
    seteditAble(!editAble);
  };
  const blur = () => {
    seteditAble(!editAble);
  };
  useEffect(() => {
    console.log("hello world asdaff");
  });
  const handleEdit = (e) => {
    const value = e.target.value;
    const index = Todo.findIndex((Todo) => Todo === e.target.defaultValue);
    Todo[index] = value;
    setTodo([...Todo]);
    set;
  };

  return (
    <div>
      <div>
        <li onBlur={blur}>
          {editAble ? (
            <>
              <input
                onDoubleClick={clicked}
                value={items}
                onChange={handleEdit}
              />
            </>
          ) : (
            <>
              <span onDoubleClick={clicked}>{items}</span>
            </>
          )}
          <span
            style={{
              alignItems: "center",
              textSizeAdjust: "auto",
              padding: "10px",
              margin: "10px",
            }}
          >
            <button
              onClick={() => func(index)}
              className="btn"
              aria-label="trash"
            ></button>
          </span>
        </li>
      </div>
    </div>
  );
}
