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

const awardsTableBody = document.getElementById("awards-table-body");
const knownForTableBody = document.getElementById("known-for-table-body");

awardsTableBody.innerHTML = awards
  .map(
    (award, index) => `
      <tr>
        <td class="index-cell">${index + 1}</td>
        <td>${award.category}</td>
        <td class="winner-cell">${award.winner}</td>
      </tr>
    `
  )
  .join("");

knownForTableBody.innerHTML = knownFor
  .map(
    (person) => `
      <tr>
        <td class="winner-cell">${person.name}</td>
        <td class="tags-cell">${person.tags.join(" &bull; ")}</td>
      </tr>
    `
  )
  .join("");
