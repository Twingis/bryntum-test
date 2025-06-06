import "@bryntum/taskboard/taskboard.stockholm.css";
import { GanttWrapper } from "./components/GanttWrapper";
import { TaskboardWrapper } from "./components/TaskboardWrapper";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <MainSection />
    </div>
  );
}
