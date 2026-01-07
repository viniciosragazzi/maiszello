"use client"
import { useAccessibilityImprovements } from "../hooks/useAccessibilityImprovements";

export default function AccessibilityClientEffect() {
  useAccessibilityImprovements();
  return null;
}
