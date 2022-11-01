function compareVersions(version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");
  let result = true;
  const length =
    version1.length > version2.length ? version1.length : version2.length;
  for (i = 0; i < length; i++) {
    if (+version1[i] < +version2[i]) {
      result = false;
      break;
    }
    if (+version1[i] > +version2[i]) {
      break;
    }
    if (version2[i] !== undefined && version1[i] === undefined) {
      result = false;
      break;
    }
    if (version1[i] !== undefined && version2[i] === undefined) {
      break;
    }
  }

  return result;
}

// console.log(compareVersions("11", "10"));
// console.log(compareVersions("11", "11"));
console.log(compareVersions("10.4.6", "10.4"));
// console.log(compareVersions("10.4", "10.4.6"));
// console.log(compareVersions("0", "0"));
// console.log(compareVersions("1.0", "0"));
// console.log(compareVersions("0.0.10", "1"));
// console.log(compareVersions("10.4", "11"));
// console.log(compareVersions("10.1", "9.2.2"));
// console.log(compareVersions("10.4", "10.10"));
// console.log(compareVersions("10.4.9", "10.5"));
