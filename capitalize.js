const exclaim = x => x + '!'
    
const capitalize = x =>
    x[0].toUpperCase() + x.substr(1)

const doubleSay = x => x + ', ' + x

const x =
    exclaim(capitalize(doubleSay('hello')))

console.log(x) // Hello, hello!