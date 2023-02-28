'use strict'

const maxDate = (arr) => {
    let max = new Date(arr[0])
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const arr = [new Date('December 17, 1995 03:24:00'), new Date('November 27, 2005 09:24:00'), new Date('December 17, 1995 03:24:10'), new Date('November 27, 2007 09:24:00'), new Date('October 13, 2005 09:24:00'), new Date('November 27, 2015 09:24:00'),]

console.log(maxDate(arr).toString())