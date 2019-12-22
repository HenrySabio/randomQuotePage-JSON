$( document ).ready(function() {
    const quoteTag = $("h1");
    const authorTag = $("p");
    const randomButton = $("footer img");

    //  Creates empty object to load quotes into
    const data = [];

    // Fetch quote database and load
    fetch("quotes.json")
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            getQuote();
        })


    const getQuote = () => {
        // Checks if any data has been loaded from quote database
        if (data.length > 0) {
            // Choose index for random quote & author
            const randomNumber = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomNumber];
            
            // Updates html with randomly chosen quote & author
            quoteTag.html(randomQuote.quote);
            authorTag.html(randomQuote.author);
        } else {
            quoteTag.html("Sorry!");
            authorTag.html("No quotes are available");
        }
    }

    randomButton.click( () => getQuote() );
    
});