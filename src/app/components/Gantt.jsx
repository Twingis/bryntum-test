"use client";

import { BryntumGantt } from "@bryntum/gantt-react";
import { useRef } from "react";

export default function Gantt({ ...props }) {
  const ganttRef = useRef(null);

  return <BryntumGantt {...props} ref={ganttRef} showTaskColorPickers={true} />;
}
