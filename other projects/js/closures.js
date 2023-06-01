const test = () => {
  let secret = "test secret";

  return () => {
    console.log(secret);
  };
};
console.log(test()());
