// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let strFirstLet;
  str = str.split(" ");

  for (i = 0; i < str.length; i++) {
    strFirstLet = str[i].split("").shift();
    if (str[i].match("[a-zA-Z]")) {
      str[i] = str[i].slice(1);
      str[i] = str[i] + strFirstLet + "ay";
    }
  }
  return str.join(" ");
}
console.log(pigIt("Hello world !"));
