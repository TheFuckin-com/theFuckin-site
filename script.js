const quotes = [
    "“One-of-a-kind.”",
    "“Global shock appeal.”",
    "“Off the market for 20 years.”",
    "“Use it for whatever the fuck you want.”"
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

// Modal logic
function openMainModal() {
    document.getElementById("mainModal").style.display = "block";
}

function closeMainModal() {
    document.getElementById("mainModal").style.display = "none";
}

function openFormModal() {
    closeMainModal();
    document.getElementById("formModal").style.display = "block";
}

function closeFormModal() {
    document.getElementById("formModal").style.display = "none";
}

window.onclick = function (event) {
    const mainModal = document.getElementById("mainModal");
    const formModal = document.getElementById("formModal");
    if (event.target === mainModal) closeMainModal();
    if (event.target === formModal) closeFormModal();
};
