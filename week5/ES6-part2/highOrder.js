const arr = [3, 6, 8, 2]
function fiveAndGreaterOnly(arr){
    return arr >= 5;
}
 
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

const result = arr.filter(function(num){
    if(num % 2 === 0){
        return num
    }
})

// console.log(result)

const dogs = fiveAndGreaterOnly
function fiveCharactersOrFewerOnly(){
    return dogs.filter()
}

console.log(fiveAndGreaterOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

