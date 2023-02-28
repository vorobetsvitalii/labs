'use strict'

const check = (str, mainStr) => {
    if(mainStr.includes(str)) return true
    return false
}
console.log(check("qwer", "nqwertyu"))