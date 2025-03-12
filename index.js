// Code your solutions in this file
const gifts = ["teddy bear","drone", "doll"]

function wrapGifts(gifts) {
for (let i = 0 ; i <gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and add a bow!`)
    debugger;
}
return gifts;
}
wrapGifts(gifts);

const names = ["Alice", "Bob", "Charlie"];

// Call the function and log the result
const thankYouMessages = function whiteCards(names){
    return thankYouMessages;
}



// index.js

// Function to generate thank you messages for each name
function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  
  // Function to count down from a given number to zero, logging each number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Exporting the functions so they can be used in other files
  module.exports = { writeCards, countDown };
  