import {useState } from "react";
import {TaskItem} from "./TaskItem";

function App() {

  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Hocks",
    },
    {
      isCompleted: false,
      name: "Keep on Keeping on",
    },
  ]);

  const handleTaskChange = (index) => () =>{
    console.log("changed!" + index);
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr); 
  };
  return (
   
    <main>
      <form>
        <input type="text" placeholder="Task name" />
        <button>Create Task</button>
      </form> 

      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem 
              isChecked={task.isCompleted} 
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
            />
          );  
        })}


      </ul>
    </main>
  );
};

export default App;
