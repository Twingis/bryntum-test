"use client";
import "@bryntum/gantt/gantt.stockholm.css";
import dynamic from "next/dynamic";
import { ganttProps } from "../GanttProps";

const Gantt = dynamic(() => import("./Gantt"), {
  ssr: false,
});

const GanttWrapper = ({}) => {
  return <Gantt {...ganttProps} />;
};
export { GanttWrapper };
