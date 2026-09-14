const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); // flash

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const new_heroes = [...marvel_heroes,...dc_heroes]
console.log(new_heroes);

// array ke ander  aaray ho or usse single aray me convert krna ho
const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const real_array = another_array.flat(Infinity) // in case of nested arrays
console.log(real_array);

console.log(Array.isArray("yogesh"));// false // array hai ki nhi check krne ke liye
console.log(Array.from("yogesh")); // array bnane ke liye
console.log(Array.from({name:"sunil"})); //  jab convrt nhi kr pay to ek khali array dega
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
