(() => {
  const startBtn = document.getElementById("startBtn");
  const chips = [...document.querySelectorAll(".mood")];
  if (!startBtn || chips.length === 0) return;

  const body = document.body;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const mood = chip.dataset.mood;
      body.dataset.mood = mood;
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      // If curtains are already open, keep them open — user can cycle moods live.
    });
  });

  startBtn.addEventListener("click", () => {
    const mood = body.dataset.mood || "cool";
    console.log(`[Snoopy Snaps · v3 Mood Picker] opening for mood: ${mood}`);
    body.classList.add("revealed");
  });
})();
