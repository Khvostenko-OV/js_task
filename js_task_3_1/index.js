class Good {
    constructor(id, name, description, sizes, price, available=true) {
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes
        this.price = price
        this.available = available
    }
    setAvailable(value) { this.available = value }
}

class GoodsList {
    #goods
    constructor(...list) {
        this.#goods = list.filter((elem, index) =>  list.findIndex(first => first.id == elem.id) == index)
        this.nameFilter = new RegExp('', '')
        this.sortPrice = false
        this.sortDir = true
    }

    get list() {
        return this.#goods.filter(elem => this.nameFilter.test(elem.name))
                          .sort((a, b) => (a.price - b.price) * this.sortPrice * (+this.sortDir - 0.5))
    }
    
    add(good) {
        if (this.#goods.findIndex(elem => elem.id == good.id) < 0)  this.#goods.push(good)
    }
    
    remove(id) {
        const pos = this.#goods.findIndex(elem => elem.id == id)
        if (pos >= 0) this.#goods.splice(pos, 1)
    }
}

class BasketGood { //extends Good {
    constructor(good, amount) {
//        super(good.id, good.name, good.description, good.sizes, good.price, good.available)
        this.good = good
        this.amount = amount
    }
}

class Basket {
    constructor(...basketGoods) {
        this.goods = basketGoods.filter((elem, index) => basketGoods.findIndex(first => first.id == elem.id) == index)
    }
    
    get totalAmount() {
        return this.goods.reduce((sum, item) => sum + item.amount, 0)
    }
    
    get totalSum() {
        return this.goods.reduce((sum, item) => sum + item.good.price * item.amount, 0)
    }
    
    add(good, amount) {
        const pos = this.goods.findIndex(elem => elem.good.id == good.id)
        if (pos >= 0) this.goods[pos].amount += amount
        else this.goods.push(new BasketGood(good, amount))
    }
    
    remove(good, amount) {
        const pos = this.goods.findIndex(elem => elem.good.id == good.id)
        if (pos < 0) return
        this.goods[pos].amount -= amount
        if (this.goods[pos].amount <= 0) this.goods.splice(pos, 1)
    }
    
    clear() { this.goods = [] }
    
    removeUnavailable() {
        this.goods = this.goods.filter(elem => elem.good.available)
    }
}

const g1 = new Good(1, 'Gloves', 'Leather gloves', [1, 2, 3, 4], 10)
const g2 = new Good(2, 'Shoes', 'Sport shoes', [37, 38, 39, 40], 20)
const g3 = new Good(3, 'Cap', 'Whool cap', [50, 51, 52], 15)
const g4 = new Good(4, 'Jacket', 'Jeans jacket', ['S', 'M', 'L', 'XL'], 30)
const g5 = new Good(5, 'Coat', 'Whool coat', ['S', 'M', 'L'], 100)
let catalogue = new GoodsList(g1, g2, g3, g4, g5, g1, g3)
let myBasket = new Basket(new BasketGood(g1, 1))

//console.log(catalogue.list)
catalogue.remove(2)
//console.log(catalogue.list)
catalogue.add(g2)
g5.setAvailable(false)
catalogue.nameFilter = /es/
catalogue.sortPrice = true
catalogue.sortDir = false
console.log(catalogue.list)

myBasket.add(g2, 2)
myBasket.add(g1, 1)
myBasket.remove(g2, 3)
myBasket.add(g3, 1)
myBasket.add(g5, 5)
myBasket.removeUnavailable()
myBasket.add(g5, 1)
//console.log(myBasket.goods)

console.log(myBasket.totalAmount, myBasket.totalSum)
