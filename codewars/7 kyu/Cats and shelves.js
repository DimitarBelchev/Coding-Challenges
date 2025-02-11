function solution(start, finish, diff = finish - start) {
  console.log(diff % 3);
  return Math.floor(diff / 3) + (diff % 3);
}
