function isAValidMessage(message) {
  message = message.split(/(\d+)/).filter(Boolean);
  // console.log(message.length);
  for (let i = 0; i < message.length; i += 2) {
    if (message[i + 1] === undefined || !isNaN(message[i + 1])) {
      return false;
    } else if (+message[i] === message[i + 1].length) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isAValidMessage("3hey5hello2hi"));
console.log(isAValidMessage("3hey5hello2hi5"));
