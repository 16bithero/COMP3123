// Exercise 1
gretter = (myArray, counter) => {
    let greetText = 'Hello ';

    for(let x of myArray){
        console.log(greetText + x);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2
capitalize = (word) => {
    let arr = [...word]
    return arr[0].toUpperCase() + arr.join('').slice(1)
}
console.log(capitalize("fooBar"))
console.log(capitalize("nodeJs"))

// Exercise 3
capitalizedColors = () => {
    const colors = ['red', 'green', 'blue']
    const colorCaps = colors.map(word => {
        return capitalize(word)
    })
    return colorCaps
}
console.log(capitalizedColors())


// Exercise 4
var values = [1, 60, 34, 30, 20, 5]
filterLessThan20= () => {
    const less = values.filter(num => num < 20)
    return less
}
console.log(filterLessThan20())

// Exercise 5
var array = [1, 2, 3, 4]

// Calculates Sum
calculateSum = () => {
    const arrSum = array.reduce(sum = (answer, num) => {
        return answer + num
    })
    return arrSum
}

// Calculates Product
calculateProduct = () => {
    const arrProd = array.reduce(sum = (answer, num) => {
        return answer * num
    })
    return arrProd
}

console.log(calculateSum())
console.log(calculateProduct())

// Exercise 6
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return "Model: " + this.model + "Engine: " + this.year
    }
}

class Sedan extends Car {
    constructor (model, year, balance){
        super(model, year)
        this.balance = balance
    }
    info(){
        return this.model + " has a balance of $" + this.balance + ".00"
    }
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())