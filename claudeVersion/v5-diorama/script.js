(() => {
  const startBtn = document.getElementById("startBtn");
  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    console.log("[Snoopy Snaps · v5 Living Diorama] opening curtains in the quiet world.");
    document.body.classList.add("revealed");
  });
})();
