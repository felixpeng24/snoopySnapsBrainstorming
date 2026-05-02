(() => {
  const startBtn = document.getElementById("startBtn");
  if (!startBtn) return;

  const body = document.body;
  let running = false;

  startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;

    body.classList.add("revealed");
    startBtn.disabled = true;

    setTimeout(() => {
      window.location.href = "../layout/";
    }, 900);
  });
})();
