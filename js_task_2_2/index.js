let catalogue = [
    {
        id: 1,
        name: "Gloves",
        description: "Leather gloves",
        sizes: [1, 2, 3, 4],
        price: 10,
        available: true,
    },
    {
        id: 2,
        name: "Shoes",
        description: "Sport shoes",
        sizes: [37, 38, 39, 40],
        price: 20,
        available: true,
    },
    {
        id: 3,
        name: "Cap",
        description: "Whool cap",
        sizes: [50, 51, 52],
        price: 15,
        available: true,
    },
    {
        id: 4,
        name: "Jacket",
        description: "Jeans jacket",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 30,
        available: true,
    },
    {
        id: 5,
        name: "Coat",
        description: "Whool coat",
        sizes: ['S', 'M', 'L'],
        price: 100,
        available: true,
    },
]

let cart = [
    {
        good: 2,
        amount: 2,
    },
    {
        good: 3,
        amount: 3,
    },
    {
        good: 4,
        amount: 1,
    },
]

function add_position(good, amount) {
    let pos = cart.findIndex((elem, index, array) => elem.good == good)
    if (pos >= 0) cart[pos].amount += amount
    else {
        pos = catalogue.findIndex((elem, index, array) => elem.id == good)
        if (pos >= 0) cart.push({ good: good, amount: amount})
        else console.log('Cannot find good ' + good)
    }
}

function del_position(good) {
    const pos = cart.findIndex((elem, index, array) => elem.good == good)
    if (pos >= 0) cart.splice(pos, 1)
}

function cartClean() { cart = [] }

function cartCalc() {
    return { 
      totalAmount: cart.reduce((sum, item) => sum + item.amount, 0),
      totalSumm: cart.reduce((sum, item) => sum + catalogue.find((elem, index, array) => elem.id == item.good).price * item.amount, 0)
    }
}

add_position(2, 5)
del_position(2)
add_position(2, 5)
add_position(4, 2)
console.log(cart)
console.log(cartCalc())
cartClean()
console.log(cart)
console.log(cartCalc())
