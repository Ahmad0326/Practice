import React, { useState } from "react";

export default function TodoList({ Todo, setTodo, items, func, index }) {
  const [editAble, seteditAble] = useState(false);
  const clicked = () => {
    seteditAble(!editAble);
  };
  const blur = () => {
    seteditAble(!editAble);
  };
  const handleEdit = (e) => {
    const value = e.target.value;
    const index = Todo.findIndex((Todo) => Todo === e.target.defaultValue);
    Todo[index] = value;
    setTodo([...Todo]);
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
              padding: "20px",
            }}
          >
            <button
              onClick={() => func(index)}
              className="btn-close"
              aria-label="trash"
            ></button>
          </span>
        </li>
      </div>
    </div>
  );
}
