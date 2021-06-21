let id = document.getElementById("deckId")
let aux = ""

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
        id.innerText = deckId;
        aux = id.innerText;
        console.log(deckId);

        fetch("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1")
            .then(res => {
                if (res.ok) {
                    console.log("Success")
                    return res.json()
                } else { 
                    console.log("Not Successful")
                }
            })
            .then(data => {
                console.log(data)
            })


    })

    console.log(aux)

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




