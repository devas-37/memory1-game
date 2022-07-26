let d = (div) => document.createElement(div);
let game = document.getElementById("game");
let restart = document.getElementById("restart");
restart.addEventListener("click", () => document.location.reload(true));
const emojis = [
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🍅",
  "🍋",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🍗",
  "🧅",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🍅",
  "🍋",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🍗",
  "🧅",
];


let h = 0
let uzunlik = emojis.length-1
function creatingCard() {
  let flipCard = d("div");
  flipCard.className = "flip-card";
  let flipCardInner = d("div");
  flipCardInner.className = "flip-card-inner";
  let flipCardFront = d("div");
  flipCardFront.className = "flip-card-front";
  let flipCardBack = d("div");
  flipCardBack.className = "flip-card-back";
  flipCardBack.innerText =  emojis[uzunlik];
  console.log(flipCardBack.innerText)
  uzunlik --
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);
  flipCard.addEventListener("click", () => {
    h++;
    flipCardInner.style.transform = "rotateY(180deg)";
    console.log(flipCardBack, flipCardBack)
    if(h === 2) {
        console.log(flipCardBack.innerText)
        if(flipCardBack.innerText == flipCardBack.innerText) {
            console.log(flipCardInner.style.transform = 'rotateY(180deg)')
            console.log('yaxshiiii')
        }
        setInterval(() => {
            flipCardInner.style.transform = 'rotateY(0deg)'
            clearInterval()
        },1000)
        h=0
    }
  });
  game.appendChild(flipCard);
}

function shuffle(array) {
  let currentIndex = emojis.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
shuffle(emojis);
console.log(emojis)

for (let i = 0; i < 36; i++) {
  creatingCard();
}
