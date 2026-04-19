const startButton = document.getElementById("start-button");
const boothMessage = document.getElementById("booth-message");
const moodBoard = document.getElementById("mood-board");

const states = {
  idle: {
    label: "Start",
    message: "Tap start and let the curtain slide."
  },
  started: {
    label: "Restart",
    message: "Booth ready. Pick a vibe and strike a pose."
  }
};

startButton?.addEventListener("click", () => {
  const started = document.body.classList.toggle("started");
  const state = started ? states.started : states.idle;

  startButton.querySelector("span").textContent = state.label;
  boothMessage.textContent = state.message;

  if (started) {
    window.setTimeout(() => {
      moodBoard?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
