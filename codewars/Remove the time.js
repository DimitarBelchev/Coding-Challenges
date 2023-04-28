function shortenToDate(longDate) {
  const dateParts = longDate.split(", ");
  return dateParts[0] + " " + dateParts[1].split(" ")[1];
}
console.log(shortenToDate("Friday May 2, 9am"));
