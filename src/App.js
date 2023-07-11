import React, { useEffect, useState } from "react";
//import axios from "axios";
import TodoList from "./TodoList";

function App() {
  const [Input, setInput] = useState("");
  const [Todo, setTodo] = useState([]);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [error, setError] = useState({
  //   title: " ",
  //   body: " ",
  // });

  const OnChange = (event) => {
    setInput(event.target.value);
  };
  let createTask = () => {
    if (Input !== "") setTodo([...Todo, Input]);
    setInput("");
  };
  const deleteListItem = (key) => {
    let newListTodo = [...Todo];
    newListTodo.splice(key, 1);
    setTodo([...newListTodo]);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!title) {
  //     setError({ ...error, title: "Title is required" });
  //   }

  //   if (!body) {
  //     setError({ ...error, body: "Body is required." });
  //   }

  //   if (title && body) {
  //     const data = await axios({
  //       method: "POST",
  //       url: "https://jsonplaceholder.typicode.com/posts",
  //       data: {
  //         title,
  //         body,
  //         userId: "1",
  //       },
  //     });
  //     console.log(data);
  //   }
  // };
  return (
    <card>
      <div
        className="container "
        style={{
          width: "30rem",
          padding: "2rem",
          borderStyle: "solid",
          borderRadius: "30px",
          alignItems: "center",
          backgroundColor: "#ffe",
        }}
      >
        <div
        //tyle={{ border: "black", borderRadius: "10px", marginLeft: "10px" }}
        >
          <div
            style={{
              border: "black",
              borderRadius: "10px",
              marginLeft: "10px",
            }}
          >
            <input
              style={{ borderRadius: "10px", height: "40px" }}
              type="text"
              placeholder=" Enter Task"
              onChange={OnChange}
              value={Input}
            ></input>
            <span style={{ padding: "10px" }}>
              <button
                style={{
                  borderRadius: "10px",
                  height: "40px",
                  alignItems: "center",
                }}
                onClick={createTask}
              >
                Add Task
              </button>
            </span>
          </div>
          <div>
            <hr
              style={{
                backgroundColor: "#fff",
                borderTop: " 5px dotted #8c8b8b",
              }}
            />
          </div>
          {Todo.map((items, i) => {
            return (
              <div>
                <TodoList
                  items={items}
                  index={i}
                  key={i}
                  func={deleteListItem}
                  Todo={Todo}
                  setTodo={setTodo}
                />
              </div>
            );
          })}
          ,
        </div>
      </div>
    </card>
  );
}
export default App;

// return (
//   <div>
//     <div className="container">
//       <form>
//         <div class="form-group m-2">
//           <label for="exampleInputEmail1">Title</label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter Title"
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           {error.title ? <p className="text-danger">{error.title}</p> : " "}
//         </div>
//         <div class="form-group m-2">
//           <label for="exampleInputPassword1">body</label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Enter body"
//             onChange={(e) => setBody(e.target.value)}
//           />
//           {error.body ? <p className="text-danger">{error.body}</p> : " "}
//         </div>
//         <button class="btn btn-primary m-2" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
// );
