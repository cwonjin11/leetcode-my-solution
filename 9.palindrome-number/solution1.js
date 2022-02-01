

const isPalindrome = (x) => {

    let newNum = x.toString().split('').reverse().join('')
    console.log(newNum)
    let parseNum = parseInt(newNum)
    let originalNum = x

    return parseNum === originalNum



};



// console.log(isPalindrome(-232))
console.log(isPalindrome(12345321))