
const quotes = [
    "“It’s not whether you get knocked down; it’s whether you get up.” – Vince Lombardi",
    "“Float like a butterfly, sting like a bee.” – Muhammad Ali",
    "“Never let the fear of striking out keep you from playing the game.” – Babe Ruth",
    "“Champions keep playing until they get it right.” – Billie Jean King",
    "“You miss 100% of the shots you don’t take.” – Wayne Gretzky"
];

const premiumQuotes = [
    "“Hard work beats talent when talent doesn’t work hard.” – Tim Notke",
    "“You earn your trophies at practice. You just pick them up at competitions.” – Anonymous",
    "“You don’t inspire your teammates by showing them how amazing you are. You inspire them by showing them how amazing they are.” – Robyn Benincasa"
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

function loadPremiumQuotes() {
    quotes.push(...premiumQuotes);
    alert("Premium quotes unlocked! Thank you for your purchase.");
}

const stripe = Stripe('pk_test_YOUR_PUBLIC_KEY_HERE'); // Replace with your Stripe public key
document.getElementById('buy-premium').addEventListener('click', () => {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_YOUR_PRICE_ID_HERE', quantity: 1}], // Replace with your Stripe price ID
        mode: 'payment',
        successUrl: window.location.href + '?premium=true',
        cancelUrl: window.location.href,
    });
});

if (window.location.search.includes('premium=true')) {
    loadPremiumQuotes();
}
