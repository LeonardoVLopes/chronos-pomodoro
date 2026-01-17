let isRunning = false;

self.onmessage = function (e) {
  if (isRunning) return;

  isRunning = true;

  const state = e.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  const countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    const now = Date.now();
    const countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
