// console.log(Math.PI);
// let dec = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(dec);


const chai = {
    name : 'masala chai',
    flavour : 'hearbs',
    isAvalible : true,
    
    
}


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// console.log(chai.name)
