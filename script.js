let id = document.getElementById("deckId")
let drawBtn = document.getElementById("drawBtn")

// Shuffle the Cards
//'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH')
    .then(res => {
        if (res.ok) {
            console.log("Success")
            return res.json()
        } else { 
            console.log("Not Successful")
        }
    })
    .then(data => {
        const deckId = data.deck_id
        id.innerText = deckId;


        fetch("https://deckofcardsapi.com/api/deck/" + data.deck_id + "/draw/?count=1")
            .then(res => {
                if (res.ok) {
                    console.log("Success")
                    return res.json()
                } else { 
                    console.log("Not Successful")
                }
            })
            //.then(data => console.log(data))
            .then(deck => deck.cards)
            // .then(cards => cards.filter(c => c.suit === 'CLUBS'))
            // .then(cards => cards.sort((c1, c2) => c1.value - c2.value))
            .then(cards => cards.map(c => c.image))
            .then(url => url.map(u => `<img width="100" src="${u}"/>`).join(''))
            .then(imgString => {
                document.getElementById('newCard').innerHTML = `<div>${imgString}</div>`
            })
    })



drawBtn.addEventListener('click', e => {
    console.log("this is a test")
})


// function drawCard(deck) {

// }