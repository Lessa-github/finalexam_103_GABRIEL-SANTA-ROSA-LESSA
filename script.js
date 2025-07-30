const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
const colors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#9b59b6",
  "#f1c40f",
  "orange",
  "purple",
];

changeColorBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colorBox.style.backgroundColor = randomColor;
});

const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Strive not to be a success, but rather to be of value.",
  "The secret of getting ahead is getting started.",
  "It's hard to beat a person who never gives up.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Do what you can, with what you have, where you are.",
  "Your time is limited, so don't waste it living someone else's life.",
];

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote;
});
