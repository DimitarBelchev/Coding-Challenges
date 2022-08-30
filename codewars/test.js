function solve(s) {
  let res = s.replace(/\[backspace\]\*([0-9][0-9]*)/g, (m, p1) =>
    "[backspace]".repeat(p1)
    (console.log(p1))
  );
  while (res.includes("[backspace]")) {
    res = res.replace(/[A-Za-z ]\[backspace\]|^\[backspace\]/, "");
  }
  return res;
}
console.log(solve("ooppp[backspace][backspace]s"));
