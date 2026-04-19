# Snoopy Snaps — Landing Page Ideas

Five directions for the landing page, building on the current ref2 booth + curtain-reveal base. Each is a distinct flavor, not a feature list — pick the *feeling* you want the page to have and we can layer details after.

---

## 1. Peek-a-boo Teaser

**Hook:** Before you even click, the booth feels alive.

**What changes:** The curtain idles with a soft breathing sway. Every 6–8 seconds, Snoopy's nose briefly pokes through the gap between the two curtain panels, then ducks back. The Start button gets a subtle pulse when he peeks, as if daring you to press it.

**Scope:** Small. ~40 lines of CSS keyframes + one JS interval, no new assets.

**Trade-offs:**
- Pro: Huge polish-per-effort ratio; current layout stays identical.
- Con: Can feel gimmicky if overdone; needs careful timing or it reads as twitchy.

---

## 2. Photo-Strip Capture

**Hook:** The photobooth actually *takes a photo*.

**What changes:** Clicking Start plays a 3-shot sequence — curtains part, camera lens on the left panel flashes 3 times (1s apart), Snoopy swaps pose each flash (cool → waving → sleeping), and then a polaroid photo strip slides out of the coin slot with all three shots framed. User can click it to "save" (download as PNG).

**Scope:** Medium. Needs 3 Snoopy pose sprites + CSS flash/animation + HTML canvas to compose the strip for download.

**Trade-offs:**
- Pro: Most on-theme — the booth does what booths do. Strong shareable moment.
- Con: Most engineering; the download-a-PNG piece adds a real dependency on `<canvas>`.

---

## 3. Mood Picker

**Hook:** "a photobooth for every mood" stops being a subtitle and becomes the interaction.

**What changes:** Below the subtitle, 4 small mood chips appear: 😎 Cool / 😴 Sleepy / 🎉 Party / 🖤 Classic. Picking one re-skins the reveal: different Snoopy pose behind the curtain, different curtain color (yellow for Party, indigo for Sleepy), different twinkle density. Start still opens the curtains — but now *what* it reveals is yours.

**Scope:** Medium. 4 Snoopy assets (we already have cool + sleeping; need 2 more) + CSS variables swap via a data attribute.

**Trade-offs:**
- Pro: Turns a one-shot landing page into a replayable toy; pays off the tagline directly.
- Con: Adds a decision before Start, which cuts the "press the big button" simplicity of ref2.

---

## 4. Peanuts Gang Rotation

**Hook:** Start never reveals the same friend twice in a row.

**What changes:** Each Start click randomly picks from a pool — Cool Snoopy, Sleeping Snoopy, Woodstock (in place of the strip), Flying-ace Snoopy. A tiny counter under the booth ("met 2 of 4 friends ✦") encourages re-clicks until the collection completes, then a small confetti burst.

**Scope:** Small–Medium. Uses assets you already have in `assets/snoopy/`. Logic is ~20 lines of JS.

**Trade-offs:**
- Pro: Delight from repeat interaction without adding any UI chrome.
- Con: Randomness without a payoff can feel arbitrary; needs the "collect them all" hook to land.

---

## 5. Living Diorama

**Hook:** The booth is a scene, not an illustration.

**What changes:** Extend outward — Woodstock flutters in a lazy loop across the top of the page, musical notes drift up from him, a small doghouse peeks in at the bottom-right, and the cream background gets a soft diagonal drift (like a slow parallax sky). The booth itself stays still; everything *around* it breathes.

**Scope:** Medium. ~3 new animated elements with SVG paths + keyframes, plus one new asset (`woodstock-strip.png` — already in `assets/snoopy/trimmed/`).

**Trade-offs:**
- Pro: Feels like a world, not a web page. Sets a premium tone before any interaction.
- Con: Most visually busy option — risks pulling attention away from the Start button, which is the conversion target.

---

## Quick compare

| # | Idea               | Scope  | Core feel          | Biggest risk                |
| - | ------------------ | ------ | ------------------ | --------------------------- |
| 1 | Peek-a-boo         | S      | Playful, alive     | Reads as twitchy            |
| 2 | Photo-strip        | M      | On-theme, rewarding| Engineering cost            |
| 3 | Mood picker        | M      | Personal, replayable| Dilutes single-button focus |
| 4 | Gang rotation      | S–M    | Collectible, cozy  | Needs the "collect" hook    |
| 5 | Living diorama     | M      | Premium, ambient   | Distracts from Start        |

Ready for your thoughts on each.
