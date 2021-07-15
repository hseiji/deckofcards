let id = document.getElementById("deckId")
let rmnCards = document.getElementById("rmnCards")

// Shuffle the Cards
//'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
//'https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH'

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D')
    .then(res => {
        if (res.ok) {
            console.log("Success Shuffling")
            return res.json()
        } else { 
            console.log("Not Successful")
        }
    })
    .then(data => {
        const deckId = data.deck_id
        id.innerText = deckId;
        rmnCards.innerText = data.remaining
        console.log(data)

        // fetch("https://deckofcardsapi.com/api/deck/" + data.deck_id + "/draw/?count=1")
        //     .then(res => {
        //         if (res.ok) {
        //             console.log("Success drawing card")
        //             return res.json()
        //         } else { 
        //             console.log("Not Successful")
        //         }
        //     })
        //     .then(deck => deck.cards)
        //     // .then(cards => cards.filter(c => c.suit === 'CLUBS'))
        //     // .then(cards => cards.sort((c1, c2) => c1.value - c2.value))
        //     .then(cards => cards.map(c => c.image))
        //     .then(url => url.map(u => `<img width="100" src="${u}"/>`).join(''))
        //     .then(imgString => {
        //         const div = document.createElement('div')
        //         div.innerHTML = `<div>${imgString}</div>`
        //         document.getElementById('newCard').after(div)                
        //         // document.getElementById('newCard').innerHTML = `<div>${imgString}</div>`
        //     })
    })


function drawCard() {
    console.log("You drawed a card.")
    console.log(id.innerText)
    
    let cont = parseInt(rmnCards.innerText)
    
    
    fetch("https://deckofcardsapi.com/api/deck/" + id.innerText + "/draw/?count=1")
    .then(res => {
        if (res.ok) {
            console.log("Success drawing card")
            if ((cont - 1) < 0) {
                cont = 0
                alert("No cards remaining in the deck!")
            } else {
                rmnCards.innerText = cont - 1
            }
            return res.json()
        } else { 
            console.log("Not Successful")
        }
    })
    .then(deck => deck.cards)
    .then(cards => cards.map(c => c.image))
    .then(url => url.map(u => `<img width="100" src="${u}"/>`).join(''))
    .then(imgString => {
        const div = document.createElement('div')
        div.innerHTML = imgString
        document.getElementById('newCard').after(div)
    })


}

document.getElementById("drawBtn").addEventListener('click', drawCard)

