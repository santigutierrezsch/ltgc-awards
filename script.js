const awards = [
  { category: "Who's the dumbest", winner: "Kingston" },
  { category: "Who's the smartest", winner: "Santi" },
  { category: "Who's the loudest", winner: "Caden" },
  { category: "Who's the quietest", winner: "Oliver" },
  { category: "Who's the most dramatic", winner: "Neel" },
  { category: "Who's the most athletic", winner: "Neel" },
  { category: "Who's most likely to be poor in 10 years", winner: "Malachi" },
  { category: "Who's most likely to be rich in 10 years", winner: "Santi" },
  { category: "Who has the best style", winner: "Santi" },
  { category: "Who's the funniest", winner: "Oliver" },
  { category: "Who's the most annoying", winner: "Caden" },
  { category: "Who's the tuffest", winner: "Isa" },
  { category: "Who's the biggest dork", winner: "Aidan" },
  { category: "Who's always chill to hang out with", winner: "Isa" },
  { category: "Who's the best to talk to", winner: "Isa" },
  { category: "Who's the worst at video games", winner: "Aidan" },
  { category: "Who's most likely to have kids first", winner: "Malachi" },
  { category: "Who's most likely to be a femboy", winner: "Aidan" },
  { category: "Who's most likely to drop out of high school", winner: "Malachi" },
  { category: "Who never goes outside", winner: "Drew" },
  { category: "Who spends too much time outside", winner: "Santi" },
  { category: "Who never goes to hangouts", winner: "Malachi" },
  { category: "Who's the most racist", winner: "Kingston" },
  { category: "Who acts the gayest", winner: "Caden" },
  { category: "Who's most likely to be accused of SA", winner: "Malachi" },
  { category: "Who's the most performative", winner: "Neel" },
  { category: "Who's the most evil", winner: "Malachi" },
  { category: "Who procrastinates the most", winner: "Devan" },
  { category: "Who uses AI for everything", winner: "Kingston" },
  { category: "Who has the biggest ego", winner: "Neel" },
  { category: "Who's most likely to get cancelled first", winner: "Kingston" },
  { category: "Who switches up the most", winner: "Devan" },
  { category: "Who makes the worst jokes", winner: "Neel" },
  { category: "Who has the most jokes made about them", winner: "Neel" }
];

const knownFor = [
  { name: "Aidan", tags: ["nerd", "employed", "glaze"] },
  { name: "Isa", tags: ["glaze", "chill", "hangout house"] },
  { name: "Neel", tags: ["fat", "gooning incident", "athletic"] },
  { name: "Devan", tags: ["chicken", "basketball", "not making team"] },
  { name: "Caden", tags: ["being annoying", "ragebait", "school story posts"] },
  { name: "Santi", tags: ["sggames", "driving fast", "coding"] },
  { name: "Keagan", tags: ["chill", "tf2", "darby"] },
  { name: "Oliver", tags: ["discord server owner", "tyrant", "fat"] },
  { name: "Juan", tags: ["coke", "juans little comeback", "touching"] },
  { name: "Kingston", tags: ["trans is a mental illness", "not explaining himself", "racist"] },
  { name: "Drew", tags: ["I'm sorry", "clipfarming", "legos"] },
  { name: "Malachi", tags: ["evil", "crash out", "turkey dick"] }
];

const homeSection = document.getElementById("home-section");
const showSection = document.getElementById("show-section");
const cardLabel = document.getElementById("card-label");
const awardTitle = document.getElementById("award-title");
const awardProgress = document.getElementById("award-progress");
const awardNote = document.getElementById("award-note");
const winnerStage = document.getElementById("winner-stage");
const revealButton = document.getElementById("reveal-winner");
const nextButton = document.getElementById("next-award");
const startButton = document.getElementById("start-show");

let currentIndex = 0;
let revealed = false;
let showingKnownFor = false;

function toResultPhrase(category) {
  if (category.startsWith("Who's the ")) {
    return `is the ${category.slice("Who's the ".length)}`;
  }

  if (category.startsWith("Who's most likely to ")) {
    return `is most likely to ${category.slice("Who's most likely to ".length)}`;
  }

  if (category.startsWith("Who's always ")) {
    return `is always ${category.slice("Who's always ".length)}`;
  }

  if (category.startsWith("Who's ")) {
    return `is ${category.slice("Who's ".length)}`;
  }

  if (category.startsWith("Who has the ")) {
    return `has the ${category.slice("Who has the ".length)}`;
  }

  if (category.startsWith("Who has ")) {
    return `has ${category.slice("Who has ".length)}`;
  }

  if (category.startsWith("Who uses ")) {
    return `uses ${category.slice("Who uses ".length)}`;
  }

  if (category.startsWith("Who makes ")) {
    return `makes ${category.slice("Who makes ".length)}`;
  }

  if (category.startsWith("Who acts ")) {
    return `acts ${category.slice("Who acts ".length)}`;
  }

  if (category.startsWith("Who switches ")) {
    return `switches ${category.slice("Who switches ".length)}`;
  }

  if (category.startsWith("Who spends ")) {
    return `spends ${category.slice("Who spends ".length)}`;
  }

  if (category.startsWith("Who never ")) {
    return `never ${category.slice("Who never ".length)}`;
  }

  if (category.startsWith("Who ")) {
    return category.slice("Who ".length).toLowerCase();
  }

  return category;
}

function showHome() {
  homeSection.classList.remove("hidden");
  showSection.classList.add("hidden");
}

function showStage() {
  homeSection.classList.add("hidden");
  showSection.classList.remove("hidden");
}

function renderAwardQuestion() {
  const award = awards[currentIndex];

  cardLabel.textContent = "Current Award";
  awardProgress.textContent = `Award ${currentIndex + 1} of ${awards.length}`;
  awardTitle.textContent = award.category;
  awardNote.textContent = "Tap to reveal.";
  winnerStage.innerHTML = "";
  revealButton.textContent = "Reveal";
  revealButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

function renderAwardReveal() {
  const award = awards[currentIndex];
  const phrase = toResultPhrase(award.category);

  cardLabel.textContent = "Current Award";
  awardProgress.textContent = `Award ${currentIndex + 1} of ${awards.length}`;
  awardTitle.textContent = award.category;
  awardNote.textContent = "";
  winnerStage.innerHTML = `
    <div class="winner-card">
      <div class="winner-ribbon">Revealed</div>
      <h2 class="winner-name">${award.winner}</h2>
      <p class="winner-detail">${award.winner} ${phrase}.</p>
    </div>
  `;
  revealButton.classList.add("hidden");
  nextButton.textContent = currentIndex === awards.length - 1 ? "Most Known For" : "Next Award";
  nextButton.classList.remove("hidden");
}

function renderKnownForBoard() {
  cardLabel.textContent = "Most Known For";
  awardProgress.textContent = "Final Section";
  awardTitle.textContent = "What is everyone most known for?";
  awardNote.textContent = "Tap a card to flip it and reveal what people say about them.";
  revealButton.classList.add("hidden");
  nextButton.textContent = "Recap";
  nextButton.classList.remove("hidden");

  winnerStage.innerHTML = `
    <div class="known-board" id="known-board">
      ${knownFor
        .map(
          (person) => `
            <button class="known-card" type="button" data-name="${person.name}">
              <div class="known-card-inner">
                <div class="known-face known-front">
                  <h3 class="known-name">${person.name}</h3>
                  <p class="known-prompt"></p>
                </div>
                <div class="known-face known-back">
                  <h3 class="known-name">${person.name}</h3>
                  <p class="known-tags">${person.tags.join(" • ")}</p>
                </div>
              </div>
            </button>
          `
        )
        .join("")}
    </div>
  `;

  const cards = winnerStage.querySelectorAll(".known-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

function updateStage() {
  if (showingKnownFor) {
    renderKnownForBoard();
    return;
  }

  if (revealed) {
    renderAwardReveal();
    return;
  }

  renderAwardQuestion();
}

function revealCurrentAward() {
  if (showingKnownFor || revealed) {
    return;
  }

  revealed = true;
  updateStage();
}

function goNext() {
  if (showingKnownFor || !revealed) {
    return;
  }

  if (currentIndex === awards.length - 1) {
    showingKnownFor = true;
    updateStage();
    return;
  }

  currentIndex += 1;
  revealed = false;
  updateStage();
}

function resetShow() {
  currentIndex = 0;
  revealed = false;
  showingKnownFor = false;
  updateStage();
}

function handleKeyboard(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    return;
  }

  if (showSection.classList.contains("hidden")) {
    return;
  }

  if ((event.code === "Enter" || event.code === "Space") && !revealed && !showingKnownFor) {
    event.preventDefault();
    revealCurrentAward();
  }

  if (event.code === "ArrowRight" && revealed && !showingKnownFor) {
    event.preventDefault();
    goNext();
  }
}

startButton.addEventListener("click", () => {
  resetShow();
  showStage();
});

revealButton.addEventListener("click", revealCurrentAward);
nextButton.addEventListener("click", () => {
  if (showingKnownFor) {
    window.location.href = "/summary";
    return;
  }

  goNext();
});
document.addEventListener("keydown", handleKeyboard);

showHome();
resetShow();
