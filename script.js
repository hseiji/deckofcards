let id = document.getElementById("deckId")

// Shuffle the Cards
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
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
        
        console.log(deckId);
        id.innerText = deckId;
        
    })


function test() {
    let aux = document.getElementById("deckId").innerText
    console.log(aux)
}

test()


// Draw a card
    // let str = "https://deckofcardsapi.com/api/deck/" + id.innerText + "/draw/?count=1"
    // fetch(str)
    //     .then(res => {
    //         if (res.ok) {
    //             console.log("Success")
    //             return res.json()
    //         } else { 
    //             console.log("Not Successful")
    //         }
    //     })
    //     .then(data => {
    //         console.log(data);
    //         //id.innerText = deckId
    //     })




