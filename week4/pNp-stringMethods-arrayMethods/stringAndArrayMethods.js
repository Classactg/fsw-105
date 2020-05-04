function capitilizeAndLowerCase(str) {
    var strUpper = str.toUpperCase();
    var strLower = str.toLowerCase();
    return strUpper + strLower;
}

console.log(capitilizeAndLowerCase("Hello"));

function findMiddleIndex(txt) {
   var middleOfString = Math.floor(txt.length/2);
   return middleOfString
}

console.log(findMiddleIndex("Hello"));

function returnFirstHalf(half){
    var sliceItem = half.slice(0, half.length/2).toLowerCase()
    return sliceItem
} 
    
console.log(returnFirstHalf("Brown Fox High"));

console.log(returnFirstHalf("Hello World"));

function capitilizedAndLowerCase(goBack) {
var strUpper = goBack.slice(goBack.length/2).toLowerCase();
//strUpper = "hello world"
var strLower = goBack.slice(0, goBack.length/2).toUpperCase();
//strLower = "HELLO WORLD"
return strLower + strUpper;
        //HELLO WORLDhello world
}

console.log(capitilizedAndLowerCase("hello world"));


