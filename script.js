document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "“One-of-a-kind.”",
        "“Global shock appeal.”",
        "“Off the market for 20 years.”",
        "“Use it for whatever the fuck you want.”"
    ];

    let current = 0;
    const quoteEl = document.getElementById("quotes");

    function rotateQuote() {
        if (!quoteEl) return;
        quoteEl.style.opacity = 0;
        setTimeout(() => {
            quoteEl.textContent = quotes[current];
            quoteEl.style.opacity = 0.8;
            current = (current + 1) % quotes.length;
        }, 500);
    }

    rotateQuote(); // Show first quote immediately
    setInterval(rotateQuote, 3000);

    const mainModal = document.getElementById("mainModal");
    const formModal = document.getElementById("formModal");

    window.openMainModal = () => {
        mainModal.style.display = "block";
    };

    window.closeMainModal = () => {
        mainModal.style.display = "none";
    };

    window.openFormModal = () => {
        closeMainModal();
        formModal.style.display = "block";
    };

    window.closeFormModal = () => {
        formModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === mainModal) closeMainModal();
        if (event.target === formModal) closeFormModal();
    };
});
