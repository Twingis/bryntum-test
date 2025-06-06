import "@bryntum/taskboard/taskboard.stockholm.css";
import { GanttWrapper } from "./components/GanttWrapper";
import { TaskboardWrapper } from "./components/TaskboardWrapper";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <GanttWrapper />
      <TaskboardWrapper />
    </div>
  );
}
