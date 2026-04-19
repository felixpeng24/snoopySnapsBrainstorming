(() => {
  const startBtn = document.getElementById("startBtn");
  const reveal = document.getElementById("reveal");
  const counterEl = document.getElementById("counterCount");
  const confettiEl = document.getElementById("confetti");
  if (!startBtn || !reveal || !counterEl) return;

  const body = document.body;
  const friends = ["cool", "sleepy", "classic", "woodstock"];

  let unseen = shuffle([...friends]);
  let met = 0;
  let busy = false;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const showFriend = (name) => {
    reveal.querySelectorAll(".friend").forEach((el) => {
      el.classList.toggle("is-current", el.dataset.friend === name);
    });
  };

  const bumpCounter = () => {
    counterEl.textContent = String(met);
    body.classList.add("bumped");
    setTimeout(() => body.classList.remove("bumped"), 420);
  };

  const fireConfetti = () => {
    const chars = ["✦", "✧", "✶", "❋", "◆"];
    for (let i = 0; i < 22; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti__piece";
      piece.textContent = chars[i % chars.length];
      const angle = (i / 22) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 110 + Math.random() * 90;
      piece.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      piece.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      piece.style.setProperty("--rot", `${(Math.random() - 0.5) * 720}deg`);
      piece.style.animationDelay = `${Math.random() * 120}ms`;
      piece.style.fontSize = `${10 + Math.random() * 10}px`;
      confettiEl.appendChild(piece);
      setTimeout(() => piece.remove(), 1600);
    }
  };

  startBtn.addEventListener("click", async () => {
    if (busy) return;
    busy = true;

    // If completed, reset the cycle
    if (body.classList.contains("complete")) {
      body.classList.remove("complete");
      met = 0;
      counterEl.textContent = "0";
      unseen = shuffle([...friends]);
    }

    const alreadyOpen = body.classList.contains("revealed");

    // Close curtains first if already open, so each reveal feels fresh
    if (alreadyOpen) {
      body.classList.remove("revealed");
      await wait(950);
    }

    const next = unseen.shift();
    showFriend(next);
    body.classList.add("revealed");
    met += 1;
    await wait(520);
    bumpCounter();

    console.log(`[Snoopy Snaps · v4 Gang] revealed: ${next}  (${met}/${friends.length})`);

    if (met === friends.length) {
      body.classList.add("complete");
      fireConfetti();
    }

    busy = false;
  });

  function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
})();
