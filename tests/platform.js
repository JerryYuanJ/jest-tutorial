// some platform helper apis

const formatter = require('pretty-format')

const person = formatter({
    age: 12,
    name: 'jerry'
})

console.info(person)