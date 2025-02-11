function breakTheWeb(strength, width) {
  let total = 0;
  let res = 0;
  for (let item = width; item > 0; item--) {
    for (let i = 0; i < item; i++) {
      total += (width - item + 1) * 1000;
      if (total > strength) {
        return res;
      }
      res++;
    }
  }
  return res;
}
