let time = 60;
let started = false;
let interval;

export function getTime() {
  return time;
}

export function startTimer(onFinish) {
  if (started) return;
  started = true;

  interval = setInterval(() => {
    time--;
    document.getElementById("time").innerText = time;
    if (time === 0) {
      clearInterval(interval);
      onFinish();
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(interval);
  time = 60;
  started = false;
  document.getElementById("time").innerText = time;
}
