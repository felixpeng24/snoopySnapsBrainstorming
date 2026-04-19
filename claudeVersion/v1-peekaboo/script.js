(() => {
  const startBtn = document.getElementById("startBtn");
  if (!startBtn) return;

  const body = document.body;
  let peekTimer = null;

  const doPeek = () => {
    body.classList.add("peeking");
    setTimeout(() => body.classList.remove("peeking"), 520);
  };

  // Kick off idle peeks at randomized intervals (6–9s)
  const schedule = () => {
    const wait = 6000 + Math.random() * 3000;
    peekTimer = setTimeout(() => {
      if (body.classList.contains("revealed")) return;
      doPeek();
      schedule();
    }, wait);
  };

  // Small initial peek ~2s after load to hint at the interaction
  setTimeout(() => {
    if (!body.classList.contains("revealed")) {
      doPeek();
      schedule();
    }
  }, 2000);

  startBtn.addEventListener("click", () => {
    console.log("[Snoopy Snaps · v1 Peek-a-boo] curtains opening.");
    body.classList.add("revealed");
    body.classList.remove("peeking");
    if (peekTimer) clearTimeout(peekTimer);
  });
})();
