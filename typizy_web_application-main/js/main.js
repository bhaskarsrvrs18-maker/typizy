import { getQuote } from "./api.js";
import { setupTyping, disableTyping, resetTyping } from "./typing.js";
import { updateStats } from "./stats.js";
import { resetTimer } from "./timer.js";

const quoteEl = document.getElementById("quote");
const restartBtn = document.getElementById("restart");

let statsInterval = null;

// Load random paragraph with animation
async function loadQuote() {
  // Reset animation
  quoteEl.classList.remove("animate");
  quoteEl.innerText = "Loading...";

  const paragraph = await getQuote();
  quoteEl.innerText = paragraph;

  // Trigger animation (next frame)
  requestAnimationFrame(() => {
    quoteEl.classList.add("animate");
  });
}

// Initialize app
async function init() {
  await loadQuote();

  setupTyping(() => {
    disableTyping();
  });

  // Prevent multiple intervals
  if (statsInterval) clearInterval(statsInterval);
  statsInterval = setInterval(updateStats, 1000);
}

// Restart button logic
restartBtn.addEventListener("click", async () => {
  resetTimer();
  resetTyping();
  await init();
});

// Start app
init();
