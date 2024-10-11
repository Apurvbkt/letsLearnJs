// console.log(Math.PI);
// let dec = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(dec);


const chai = {
    name : 'masala chai',
    flavour : 'hearbs',
    isAvalible : true,
    writable: false,
    enumerable: false
    
}


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

