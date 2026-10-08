import { startTimer } from "./timer.js";

const input = document.getElementById("input");
const quoteEl = document.getElementById("quote");
let mistakes = 0;

export function getMistakes() {
  return mistakes;
}

export function setupTyping(onFinish) {
  input.addEventListener("input", () => {
    startTimer(onFinish);
    mistakes = 0;

    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] !== quoteEl.innerText[i]) mistakes++;
    }

    document.getElementById("mistakes").innerText = mistakes;
  });
}

export function disableTyping() {
  input.disabled = true;
}

export function resetTyping() {
  input.value = "";
  input.disabled = false;
  mistakes = 0;
  document.getElementById("mistakes").innerText = 0;
}
