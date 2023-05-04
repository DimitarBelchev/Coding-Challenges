function filter_list(numArr) {
  return numArr.filter(
    (arrItem) => arrItem >= 0 && typeof arrItem === "number"
  );
}
