// function removeRotten(bagOfFruits) {
//   let replacedBasket;
//   let lowerCaseBasket;
//   if (!isNaN(bagOfFruits)) {
//     return [];
//   } else {
//     let fruitBasket = bagOfFruits.join(" ");
//     replacedBasket = fruitBasket.replace(/rotten/g, "");
//     lowerCaseBasket = replacedBasket.toLowerCase().split(" ");
//   }
//   return lowerCaseBasket;
// }
// console.log(removeRotten([]));

// function removeRotten(bagOfFruits) {
//   let replacedBasket;
//   let lowerCaseBasket;
//   if (!isNaN(bagOfFruits)) {
//     return [];
//   } else {
//     return bagOfFruits.map((el) => el.replace(/rotten/g, "").toLowerCase());
//     // replacedBasket = fruitBasket.replace(/rotten/g, "");
//     // lowerCaseBasket = replacedBasket.toLowerCase().split(" ");
//   }
// }
// console.log(removeRotten(["apple", "rottenBanana", "apple"]));

function removeRotten(bagOfFruits) {
  if (bagOfFruits === undefined || !isNaN(bagOfFruits)) {
    return [];
  } else {
    return bagOfFruits.map((el) => el.replace(/rotten/g, "").toLowerCase());
  }
}
console.log(removeRotten());
console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));
