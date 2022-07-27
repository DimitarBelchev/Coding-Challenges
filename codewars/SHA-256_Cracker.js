// const crypto = require("crypto"),
//   hash = crypto.getHashes();
// var input_str = "code";

// hashPwd = crypto.createHash("sha256").update(input_str).digest("hex");

// console.log("Input String: " + input_str);
// console.log("Hash Value: " + hashPwd);

// Input String: I am converting string to hash.
// Hash Value: ceb443790638fbc0f543ccf80a08085a731c83a6fd1843c3c3ff2e6edd86c58b

function sha256Cracker(hash, chars) {
  const crypto = require("crypto");
  hashes = crypto.getHashes();
  let findPermutations = (string) => {
    if (!string || typeof string !== "string") {
      return "Please enter a string";
    } else if (string.length < 2) {
      return string;
    }

    let permutationsArray = [];

    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      let remainingChars =
        string.slice(0, i) + string.slice(i + 1, string.length);

      for (let permutation of findPermutations(remainingChars)) {
        permutationsArray.push(char + permutation);
      }
    }
    return permutationsArray;
  };
  const perm = findPermutations(chars);
  let sha = (chars) => crypto.createHash("sha256").update(chars).digest("hex");

  for (i = 0; i < perm.length; i++) {
    if (sha(perm[i]) === hash) {
      return perm[i];
    }
  }
  return null;
}
console.log(
  sha256Cracker(
    "5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b",
    "cdeo"
  )
);
