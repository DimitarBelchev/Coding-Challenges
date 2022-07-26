// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
function anagrams(word, words) {
  let wordModif = word.split("").sort().join("");
  let newArr = [];
  let wordsModif;
  for (i = 0; i < words.length; i++) {
    wordsModif = words[i].split("").sort().join("");
    if (wordModif === wordsModif) {
      newArr.push(words[i]);
    }
  }

  return newArr;
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
