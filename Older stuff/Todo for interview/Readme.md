``` import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([{}]);

  const [count, setCount] = useState(0);

  const compare = (a, b) => {
    if (a.completed) return 1;
    if (b.completed) return -1;
    return 0;
  };

  const addTodo = () => {
    setCount(count + 1);
    let todo = { task: value, id: count, completed: false };
    setTodoList([...todoList, todo]);
    setValue("");
  };

  const removeTodo = (e) => {
    console.log(typeof e.target.id);
    let tempList = todoList.filter(
      (item) => item.id !== Number.parseInt(e.target.id, 10)
    );
    console.log(tempList);
    setTodoList(tempList);
  };

  const sortTodo = () => {
    todoList.sort(compare);
  };

  const completeTodo = (e) => {
    console.log(typeof e.target.id);
    let tempList = [...todoList];
    tempList.forEach((item) => {
      if (item.id == e.target.id)
        item.completed = item.completed ? false : true;
    });
    console.log(tempList);
    setTodoList(tempList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task here"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={sortTodo}>Sort</button>

      <div className="todoList" onClick={removeTodo}>
        {todoList?.map((item) => {
          return (
            <div
              key={item.id}
              id={item.id}
              style={
                item.completed ? { color: "green" } : { textDecoration: "none" }
              }
            >
              {item.task}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```
