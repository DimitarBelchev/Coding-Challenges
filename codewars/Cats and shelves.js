function solution(start, finish, diff = finish - start) {
  return Math.floor(diff / 3) + (diff % 3);
}
