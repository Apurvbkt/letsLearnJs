const arry = ["one", "two", "three", "four", "five", "six", "seven"];

arry.forEach((el) => {
//   console.log(el);
});

const marvelHeroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider-Man",
  "Doctor Strange",
  "Black Panther",
  "Scarlet Witch",
  "Ant-Man",
  "Hawkeye",
  "Captain Marvel",
  "Wolverine",
  "Deadpool",
  "Vision",
];

marvelHeroes.forEach((el)=>{
    // console.log(el);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((el)=>{
//     console.log(el.languageFileName);
    
// console.log(el.languageName);

console.log(`${el.languageFileName} and ${el.languageName}`);


})