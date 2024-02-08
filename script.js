// Array of quotes for the random quote generator
const quotes = [
    "“The only way to do great work is to love what you do.” - Steve Jobs",
    "“Your time is limited, don't waste it living someone else's life.” - Steve Jobs",
    "“The best way to predict the future is to create it.” - Peter Drucker",
    "“Code is like humor. When you have to explain it, it’s bad.” - Cory House"
];

// Event listener for the button click
document.getElementById("button").addEventListener("click", function() {
    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("output").innerHTML = `<blockquote>${randomQuote}</blockquote>`;
});
