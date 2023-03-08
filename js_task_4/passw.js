function getPasswordChecker(pattern) { return psw => psw === pattern }

const p1 = getPasswordChecker('1234')
const p2 = getPasswordChecker('qwerty')

console.log(p1('qwerty'))
console.log(p2('qwerty'))