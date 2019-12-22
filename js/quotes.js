$( document ).ready(function() {
    const quoteTag = $("h1");
    const authorTag = $("p");
    const randomButton = $("footer img");

    //  Creates empty object to load quotes into
    let data = [];

    // Fetch quote database and load
    fetch("data/quotes.json")
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;

            getQuote()

            // Adjust quote font size if longer than 100 characters - spaces included
            if (jsonData.length > 100) {
                quoteTag.css("font-size", "20px");
            }
        })
    
    // If not quote data has been load, show error
    if (data.length == 0) {
        quoteTag.html("Sorry!");
        authorTag.html("No quotes are available<br>Please try again later");
    }

    // Returns random quote chosen from JSON database
    const getQuote = () => {
        // Checks if any data has been loaded from quote database
        if (data.length > 0) {
            // Choose index for random quote & author
            const randomNumber = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomNumber];
            
            // Updates html with randomly chosen quote & author
            quoteTag.html(`"${randomQuote.quote}"`);
            authorTag.html(`— ${randomQuote.author}`);
        }
    }

    randomButton.click(() => getQuote());
    
});