"use client";
import { BryntumTaskBoard } from "@bryntum/taskboard-react";
import { useRef } from "react";

export default function Taskboard({ ...props }) {
  const taskboardRef = useRef(null);

  return (
    <BryntumTaskBoard
      {...props}
      ref={taskboardRef}
      showtaskColorPickers={true}
    />
  );
}
