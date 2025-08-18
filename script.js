const quotes = [
    "One-of-a-kind.",
    "Global shock appeal.",
    "Off the market for 20 years.",
    "Use it for whatever the fuck you want."
];

let current = 0;
const quoteEl = document.getElementById("quotes");

if (quoteEl) {
    setInterval(() => {
        current = (current + 1) % quotes.length;
        quoteEl.style.opacity = 0;
        setTimeout(() => {
            quoteEl.textContent = quotes[current];
            quoteEl.style.opacity = 0.8;
        }, 500);
    }, 3000);
}

function openModal() {
    document.getElementById("offerModal").style.display = "block";
}

function closeModal() {
    document.getElementById("offerModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("offerModal");
    if (event.target === modal) {
        closeModal();
    }
};
