// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// function rot13(message) {
//   let final = [];
//   let final2 = [];
//   let str;
//   //your code here
//   let addToMin;
//   message = message.split("");
//   for (let i = 0; i < message.length; i++) {
//     let code = message[i].charCodeAt(0);

//     let codeRot = code + 13;
//     if (code >= 65 && code <= 90) {
//       if (codeRot > 90) {
//         addToMin = codeRot - 90;
//         final.push(addToMin + 64);
//       } else {
//         final.push(codeRot);
//       }
//     } else if (code >= 97 && code <= 122) {
//       if (codeRot > 122) {
//         addToMin = codeRot - 122;
//         final.push(addToMin + 96);
//       } else {
//         final.push(codeRot);
//       }
//     } else {
//       final.push(message[i]);
//     }
//   }

//   for (let j = 0; j < final.length; j++) {
//     if (
//       (final[j] >= 65 && final[j] <= 90) ||
//       (final[j] >= 97 && final[j] <= 122)
//     ) {
//       str = String.fromCharCode(final[j]);
//       final2.push(str);
//     } else final2.push(final[j]);
//   }

//   return final2.join("");
//   //   console.log(String.fromCharCode(116, 101, 115, 116));
// }
// console.log(rot13("T2es!t"));

// function rot13(message) {
//   //const rot13 = (message) => {
//   const alpha =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
//   return message.replace(
//     /[a-z]/gi,
//     (letter) => alpha[alpha.indexOf(letter) + 13]
//   );
// }
// console.log(rot13("test"));

const rot13 = (message) =>
  message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() < "n" ? 13 : -13)
    )
  );
console.log(rot13("test"));
