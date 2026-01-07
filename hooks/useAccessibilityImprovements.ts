'use client'

import { useEffect } from "react";

export function useAccessibilityImprovements() {
  useEffect(() => {
    // Força foco visível em navegação por teclado
    function handleFirstTab(e: KeyboardEvent) {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }
    window.addEventListener("keydown", handleFirstTab);
    return () => window.removeEventListener("keydown", handleFirstTab);
  }, []);
}
