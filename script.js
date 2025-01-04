function generate() {
    const quotes = [
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      }
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = quote.author;
  }