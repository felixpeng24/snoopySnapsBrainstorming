(() => {
  const startBtn = document.getElementById("startBtn");
  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    console.log("[Snoopy Snaps] Start button clicked — opening the curtains.");
    document.body.classList.add("revealed");
  });
})();
