
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
        console.log(data);
    })
