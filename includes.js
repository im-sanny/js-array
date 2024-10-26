const friends = ["tom", "jerry", "bulldog", "cat", "mouse"];
const animal = ["cow", "goat", "hen", "duck"];

console.log(friends.includes("cat"));
console.log(friends.includes("catoo"));

if (friends.includes("catoo")) {
  console.log("we will adopt a cat");
} else {
  console.log("forget about cat, we will buy a rabbit");
}
console.log(friends.concat(animal));
