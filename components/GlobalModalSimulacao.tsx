"use client";

import { useState, useEffect, useCallback } from "react";
import ModalSimulacao from "./ModalSimulacao";

export default function GlobalModalSimulacao() {
  const [open, setOpen] = useState(true);

  return <ModalSimulacao open={open} onClose={() => setOpen(false)} />;
}
