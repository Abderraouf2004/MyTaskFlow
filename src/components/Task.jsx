import { useState } from "react";
import List from "./List";
const initialvalue = {
  par: "",
  completed: false,
};

const Task = () => {
  const [text, settext] = useState(initialvalue);
  let [tasks, settasks] = useState([]);
  const addtask = (e) => {
    e.preventDefault();
    if (text.par.trim()) {
      settasks([...tasks, text]);
      settext(initialvalue);
    }
  };
  return (
    <>
      <form onSubmit={addtask}>
        <input
          type="text"
          className="input-task"
          value={text.par}
          onChange={(e) => settext({ ...text, par: e.target.value })}
          placeholder="Add a new task..."
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
      <List tasks={tasks}  settasks={ settasks}/>

    </>
  );
};

export default Task;
