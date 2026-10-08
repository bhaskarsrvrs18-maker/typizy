import { getTime } from "./timer.js";
import { getMistakes } from "./typing.js";

const input = document.getElementById("input");

export function updateStats() {
  const elapsed = 60 - getTime();
  if (elapsed <= 0 || input.value.length === 0) return;

  const words = input.value.trim().split(/\s+/).length;
  const wpm = Math.round((words / elapsed) * 60);
  const accuracy = Math.round(((input.value.length - getMistakes()) / input.value.length) * 100);

  document.getElementById("wpm").innerText = wpm;
  document.getElementById("accuracy").innerText = accuracy;
}
