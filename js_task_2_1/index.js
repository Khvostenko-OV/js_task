// First command string parameter - number of calculating prime numbers

function prime(n) {
    if (n < 1) return []
    let row = new Array(n)
    row[0] = 2
    for (let k=1; k<n; k++) {
        for (let i=row[k-1]+1;;i++){
            let root = Math.sqrt(i)
            for (let j=0; row[j]<=root; j++) {
                if (i % row[j] === 0) { root = 0; break }
            }
            if (root) { row[k] = i; break } 
        }
    }
    return row
}

console.log('Hello, World!')
console.log('First ' + process.argv[2] + ' prime numbers:')
console.log(prime(process.argv[2]))