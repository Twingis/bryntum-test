"use client";
import { useState } from "react";
import { GanttWrapper } from "./GanttWrapper";
import { TaskboardWrapper } from "./TaskboardWrapper";

export default function MainSection() {
  const [activeTab, setActiveTab] = useState(0);
  const listTab = [
    {
      tab: <p>Gantt</p>,
      content: <GanttWrapper />,
    },
    {
      tab: <p>Taskboard</p>,
      content: <TaskboardWrapper />,
    },
  ];
  console.log(activeTab);
  return (
    <section className="h-screen">
      <div className="flex flex-wrap rounded border">
        {listTab.map((tab, index) => {
          return (
            <div
              key={index}
              className={`text-sm p-2 ${activeTab == index ? "border-4" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.tab}
            </div>
          );
        })}
      </div>
      <div className="h-full">{listTab[activeTab].content}</div>
    </section>
  );
}
