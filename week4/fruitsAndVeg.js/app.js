var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
function produce(){
    // console.log(fruit)
vegetables.pop()
// console.log(vegetables)
fruit.shift()
// console.log(fruit)
var goods = fruit.indexOf("orange")
// console.log(goods)
fruit.push(goods)
// console.log(fruit)
vegetables.length
var bag = vegetables.length
// console.log(bag)
vegetables.push(bag)
// console.log(vegetables)
var food = fruit.concat(vegetables)
// console.log(food)
food.splice(4, 2)
// console.log(food)
food.reverse()
// console.log(food)
var str = food.toString()
return str
}

produce()
console.log(produce())