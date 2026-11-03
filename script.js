
const noButton = document.getElementById("noButton");

function escapeButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.width = buttonWidth + "px";
    noButton.style.height = buttonHeight + "px";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
    noButton.style.zIndex = "9999";
}

noButton.addEventListener("mouseenter", escapeButton);

noButton.addEventListener("touchstart", (event) => {
    event.preventDefault();
    escapeButton();
});

function goToPageTwo() {
    window.location.href = "page2.html";
}
