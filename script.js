
const quotes = [
    "“It’s not whether you get knocked down; it’s whether you get up.” – Vince Lombardi",
    "“Float like a butterfly, sting like a bee.” – Muhammad Ali",
    "“Never let the fear of striking out keep you from playing the game.” – Babe Ruth",
    "“Champions keep playing until they get it right.” – Billie Jean King",
    "“You miss 100% of the shots you don’t take.” – Wayne Gretzky"
];

function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = quote;
}

function copyQuote() {
    const quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    });
}
