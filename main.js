// script.js

let currentTextIndex = 0;
const texts = [
    "Hello Miss OA!",
    "Just wanted to let you know how happy I am that you entered my life and became such an important part of it. Your vibes, silly jokes, and that stubborn mind of yours always keep things interesting.",
    "Life is a bit busy, but our hangouts together are the absolute best. Looking forward to more laughs and good times.",
    "-Lolo Basher Mo"
];

function changeText() {
  const textContainer = document.getElementById('textContainer');
  textContainer.classList.add('fade-out');
  
  setTimeout(() => {
    document.getElementById('cardText').innerText = texts[currentTextIndex];
    textContainer.classList.remove('fade-out');
    
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }, 500); // Adjust the timeout duration as needed
}
