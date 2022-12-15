// Create a function that converts a given ASCII string to its hexadecimal SHA-256 hash.

// "Hello World!" => "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"

// function sha256(string) {
//   const crypto = require("crypto");
//   hashes = crypto.getHashes();
//   return crypto.createHash("sha256").update(string).digest("hex");
// }
// console.log(sha256("Hello World!"));

function asciiToHexSha256(asciiString) {
  // Create a new instance of the jsSHA library
  const jsSHA = require("jssha");
  const sha256 = new jsSHA("SHA-256", "ASCII");

  // Update the hash with the given ascii string
  sha256.update(asciiString);

  // Get the hexadecimal hash of the string
  const hexHash = sha256.getHash("HEX");

  return hexHash;
}

console.log(asciiToHexSha256("Hello World!"));
