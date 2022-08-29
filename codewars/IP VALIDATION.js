function isValidIP(str) {
  str = str.toString();

  //   str = str.split(".");
  //   for (i of str) {
  //     if (i[0] == 0) {
  //       return false;
  //     }
  //   }

  if (/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(str)) {
    return true;
  }
  return false;
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("444.0.0.0"));
console.log(isValidIP("u.0.0.0"));
