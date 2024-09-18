const lang = ['java', 'javascript', 'ruby', 'c++', 'c', 'python' ]

// let resp=lang.forEach((el)=>console.log(el))





// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// let res = myNum.filter((num)=> num >5)
// console.log(res);

// let res = myNum.filter((num)=> {
//    return num>5
// })
// console.log(res);


// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// const newNum = []

// myNum.forEach((el)=>{
//     if (el < 5) {
//         newNum.push(el)
//         console.log(el);
//     }
    
// })


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let res = books.filter((bks)=> bks.genre === 'History')
//   console.log(res);
  let year = books.filter((el)=>el.genre ==="Fiction")
//   console.log(year);
  let pub = books.filter((el)=> el.publish > 2000)
console.log(pub);

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);