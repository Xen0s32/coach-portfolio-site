let quotes = document.querySelectorAll(".testimonial-slider blockquote");
let i = 0;
setInterval(() => {
  quotes.forEach((q, index) => q.style.display = index === i ? "block" : "none");
  i = (i + 1) % quotes.length;
}, 3000);
