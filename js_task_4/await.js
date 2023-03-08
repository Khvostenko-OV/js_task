// First command string parameter - range of generating numbers (default 1)

const rl = require('readline/promises').createInterface(process.stdin, process.stdout)
const maxNum = Number(process.argv[2] || 1)
const num = Math.floor(Math.random() * (maxNum + 1));

console.log(`Я загадала число от 0 до ${maxNum}. Попробуйте угадать!`)
guessNumber()

async function guessNumber() {
    let attempt = 1
    while (true) {
        const answer = await rl.question(`Попытка ${attempt}: Введите число от 0 до ${maxNum}: `)
        if (isNaN(answer) || answer < 0 || answer > maxNum) {
            console.log('Неверный ввод!')
        } else {
            if (answer > num) {
                console.log('Моё число меньше')
            } else if (answer < num) {
                console.log('Моё число больше')
            } else {
                console.log(`Поздравляю! Вы угадали! Количество попыток - ${attempt}`)
                rl.close()
                break
            }
            attempt++
        }
    }
}
