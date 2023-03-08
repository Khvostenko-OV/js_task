// First command string parameter - range of generating numbers (default 1)

const rl = require('readline').createInterface(process.stdin, process.stdout)
const maxNum = Number(process.argv[2] || 1)
const num = Math.floor(Math.random() * (maxNum + 1));

console.log(`Я загадала число от 0 до ${maxNum}. Попробуйте угадать!`)
guessNumber()

async function guessNumber(attempt=1) {
    rl.question(`Попытка ${attempt}: Введите число от 0 до ${maxNum}: `, (answer) => {
        if (isNaN(answer) || answer < 0 || answer > maxNum) {
            console.log('Неверный ввод!')
            guessNumber(attempt)
        } else {
            if (answer > num) {
                console.log('Моё число меньше')
            } else if (answer < num) {
                console.log('Моё число больше')
            } else {
                console.log(`Поздравляю! Вы угадали! Количество попыток - ${attempt}`)
                rl.close()
                return
            }
            guessNumber(attempt + 1)
        }
    })
}
