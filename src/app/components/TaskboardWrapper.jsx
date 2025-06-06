"use client";
import dynamic from "next/dynamic";
import { taskboardProps } from "../TaskboardProps.js";

const TaskBoard = dynamic(() => import("./Taskboard"), {
  ssr: false,
});

export const TaskboardWrapper = ({}) => {
  return <TaskBoard {...taskboardProps} />;
};
