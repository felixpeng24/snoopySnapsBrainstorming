(() => {
  const startBtn = document.getElementById("startBtn");
  const reveal = document.getElementById("reveal");
  if (!startBtn || !reveal) return;

  const body = document.body;
  const flash = reveal.querySelector(".flash");
  const poses = [...reveal.querySelectorAll(".pose")];

  const fireFlash = () =>
    new Promise((resolve) => {
      flash.classList.remove("firing");
      // force reflow so the animation restarts
      void flash.offsetWidth;
      flash.classList.add("firing");
      setTimeout(resolve, 360);
    });

  const showPose = (idx) => {
    poses.forEach((p, i) => p.classList.toggle("pose--active", i === idx));
  };

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  let running = false;
  startBtn.addEventListener("click", async () => {
    if (running) return;
    running = true;
    console.log("[Snoopy Snaps · v2 Photo-Strip] opening curtain, starting 3-shot sequence.");

    body.classList.add("revealed", "snapping");

    // Give the curtains time to part before the first flash
    await wait(1200);

    for (let i = 0; i < poses.length; i++) {
      showPose(i);
      await wait(260);
      await fireFlash();
      await wait(720);
    }

    // Print the polaroid
    body.classList.add("printed");
    body.classList.remove("snapping");
    running = false;
  });
})();
