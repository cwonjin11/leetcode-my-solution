

const isPalindrome = (x) => {

    let newNum = x.toString().split('').reverse().join('')
    let parseNum = parseInt(newNum)
    let originalNum = x

    return parseNum === originalNum



};



console.log(isPalindrome(-232))