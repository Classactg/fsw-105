function sum(num1, num2){
   return num1 + num2
}
console.log(sum(5, 9))

var numbers = [71, 23, 86]
function two(num1, num2, num3){
    return Math.max(num1, num2, num3)  
}
console.log(two(...numbers))

function para(num1){
    if(num1 % 2===0){
        return console.log("even")
        }
    else {
        return console.log("odd")
    }
    }
 para(4)
 para(3)

 
// function para(num1, num2, num3){

//}
// var result = sum(5, 4923, 7)
// console.log(result)

// function sum(num1){
// return num1 % 2

// }
// var result = sum(10)
// console.log(even % odd)

function stone(string){
    if (string.length <= 20){
        return string + string
    }
    else if (string.length > 21){
        var toon = string.slice(0, string.length/2)
        console.log(toon)
    }
    }


console.log(stone("dog"))
console.log(stone("dogwalkingthedoggobbledigoock"))