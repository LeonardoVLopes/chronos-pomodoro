let isRunning = false;
let timeoutId = null;

self.onmessage = function (e) {
  const state = e.data;
  const { activeTask, secondsRemaining } = state;

  if (!activeTask) {
    isRunning = false;
    if (timeoutId) clearTimeout(timeoutId);
    return;
  }

  if (isRunning) return;

  isRunning = true;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    const countDownSeconds = Math.floor((endDate - now) / 1000);

    self.postMessage(countDownSeconds);

    if (countDownSeconds > 0) {
      timeoutId = setTimeout(tick, 1000);
    } else {
      isRunning = false;
    }
  }

  tick();
};
