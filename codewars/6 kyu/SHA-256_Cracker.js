// const crypto = require("crypto"),
//   hash = crypto.getHashes();
// var input_str = "code";

// hashPwd = crypto.createHash("sha256").update(input_str).digest("hex");

// console.log("Input String: " + input_str);
// console.log("Hash Value: " + hashPwd);

// Input String: I am converting string to hash.
// Hash Value: ceb443790638fbc0f543ccf80a08085a731c83a6fd1843c3c3ff2e6edd86c58b
const crypto = require("crypto");
hashes = crypto.getHashes();

let findPermutations = (string) => {
  if (string.length <= 2)
    return string.length === 2 ? [string, string[1] + string[0]] : [string];
  return string
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          findPermutations(string.slice(0, i) + string.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

let sha = (chars) => crypto.createHash("sha256").update(chars).digest("hex");

function sha256Cracker(hash, chars) {
  const perm = findPermutations(chars);
  console.log(perm);

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
