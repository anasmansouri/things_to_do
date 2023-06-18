import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TextField from "./text_field";
import Title from "./title";
import ListItem from "./ListItem";
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  var items_temp: string[] = [];

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      const newTask = event.target.value;
      if (newTask.trim() != "") {
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
      event.target.value = "";
    }
  };

  return (
    <>
      <Title text="Things to DO" />
      <TextField onKeyDown={handleKeyDown} />{" "}
      <ListItem
        ListOfItems={tasks}
        update_listOfItems={setTasks}
      />
    </>
  );
}

export default App;
