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
    for (let i=0; i<cart.length; i++) 
      if (cart[i].good == good) { cart[i].amount += amount; return }
    
    cart.push({ good: good, amount: amount})
}

function del_position(good) {
    for (let i=0; i<cart.length; i++)
        if (cart[i].good == good) cart.splice(i, 1)
}

function cartClean() { cart = [] }

function cartCalc() {
    if (!cart.length) return { totalAmount: 0, totalSumm: 0 }
    
    const amnt = cart.reduce((sum, item) => sum + item.amount, 0)
    let total = 0
    for (let i=0; i<cart.length; i++)
        for (let j=0; j<catalogue.length; j++)
            if (catalogue[j].id == cart[i].good) { total += catalogue[j].price * cart[i].amount; break }
    
    return { totalAmount: amnt, totalSumm: total }
}

add_position(2, 5)
del_position(2)
add_position(2, 5)
add_position(4, 1)
console.log(cart)
console.log(cartCalc())
cartClean()
console.log(cart)
console.log(cartCalc())
