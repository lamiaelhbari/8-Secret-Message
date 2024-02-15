// Secret message :

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Practicing some array methods :

console.log(secretMessage.length);

let removed = secretMessage.pop();
console.log(removed);

console.log(secretMessage.push("to", "Program"));

secretMessage[7] = "right";

let removed2 = secretMessage.shift();
console.log(removed2);

console.log(secretMessage.unshift("Programming"));

let removed3 = secretMessage.splice(6, 5, "know");
console.log(removed3);

// Display the secret message :
console.log(secretMessage.join(" "));
