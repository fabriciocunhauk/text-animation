const text = document.querySelector('.fancy');
// Get the content in h1
const strText = text.textContent;
// Split letters from h1
const splitLetters = strText.split("");
// Hide content of the first h1
text.textContent = "";

// Create span for each letter
for (let i = 0; i < splitLetters.length; i++) {
    text.innerHTML += ' <span>' + splitLetters[i] + '</span>'
}

// Interval to add a class to each letter
let char = 0;
let timer = setInterval(onTick, 50);

// Add fade class to span
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitLetters.length) {
        complete();
        return;
    }
}

// Complete transition
function complete() {
    clearInterval(timer);
    timer = null;
}