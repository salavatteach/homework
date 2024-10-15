const user = 'John'

function nameUsers(user) {
    return `Hello ${'John'}`
}


console.log(nameUsers())


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function checkForNumbers(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 10) {
            return `${array[index]}`
        }
    }
    return `The not finded`
}

console.log(checkForNumbers(numbers, 5))