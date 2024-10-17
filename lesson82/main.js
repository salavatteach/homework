const user = 'John'

function nameUsers(user) {
    return `Hello ${'John'}`
}


console.log(nameUsers())


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function checkForNumbers(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 10) {
            console.log(array[index])

        }
    }
}
checkForNumbers(numbers)

function diffNumbers(num1, num2, action) {
    if (action === '-') {
        return num1 - num2
    } else if (action === '+') {
        return num1 + num2
    } else if (action === '*') {
        return num1 * num2
    } else if (action === '/') {
        return num1 / num2
    } 
    console.log('Error!!!')
}

// const resault = diffNumbers(10, 12, '*')
// const resault = diffNumbers(10, 12, '/')
// const resault = diffNumbers(10, 12, '+')
const resault = diffNumbers('h', 'h', '5')
console.log(resault)


