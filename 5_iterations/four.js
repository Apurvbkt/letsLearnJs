const myObj = {
  js: "javascript",
  cpp: "c++",
  ruby: "ry",
  swift: "swift by apple",
};

for (const key in myObj) {
  // console.log(`keys = ${key} and Value = ${myObj[key]}`);
  // console.log(key);
  // console.log(myObj[key]);
}

const arry = ["one", "two", "three", "four", "five", "six", "seven"];

// for (const arr of arry) {
//     console.log(arr);

// }

for (const key in arry) {
  // console.log(arry[key]);
  // console.log(key);
}

const map = new Map();
map.set("one", "India");
map.set("two", "Australia");
map.set("three", "Nepal");

for (const key in map) {
    console.log(key);
    
}