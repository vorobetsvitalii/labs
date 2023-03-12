'use strict'

const factorial = (number) => {
    let res = 1
    if(number < 0) return "Error"
    for (let i = 1; i <= number; i++) {
        res = res * i
    }
    return res
}

console.log(factorial(5))