let d = (div) => document.createElement(div)
let game = document.getElementById('game')
let restart = document.getElementById('restart')
restart.addEventListener('click', () => document.location.reload(true))
const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']     

let h = 0
function creatingCard() {
    let flipCard = d('div')
    flipCard.className = 'flip-card'
    let flipCardInner = d('div')
    flipCardInner.className = 'flip-card-inner'
    let flipCardFront = d('div')
    flipCardFront.className = 'flip-card-front'
    let flipCardBack = d('div')
    flipCardBack.className = 'flip-card-back'
    flipCardBack.innerText = emojis[Math.floor(Math.random() * emojis.length)]
    flipCardInner.appendChild(flipCardFront)
    flipCardInner.appendChild(flipCardBack)
    flipCard.appendChild(flipCardInner)
    flipCard.addEventListener('click', () => {
        h++
        flipCardInner.style.transform = 'rotateY(180deg)'
        if(h === 2) {
            console.log(flipCardBack.innerText)
            if(flipCardBack.innerText === flipCardBack.innerText) {
                console.log('yaxshiiii')
            }
            setInterval(() => {
                flipCardInner.style.transform = 'rotateY(0deg)'  
                clearInterval()
            },1000) 
            h=0  
        }
    })
    game.appendChild(flipCard)
}


for(let i = 0; i < 36; i++) {
    creatingCard()
}
