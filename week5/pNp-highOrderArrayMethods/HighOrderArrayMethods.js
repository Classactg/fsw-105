function fiveAndGreaterOnly(arr) {
    var fiveAndUp = arr.filter(function(upperNum){return upperNum >= 5})
    return fiveAndUp
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    var evenSteven = arr.filter(function(stevensEven){return stevensEven % 2 === 0})
    return evenSteven
}
console.log(evensOnly([3, 6, 8, 2]));

 function fiveCharactersOrFewerOnly(arr) {
     var newLength = arr.filter(function(lengthOfFew){return lengthOfFew.length <= 5})
     return newLength
}
 console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))

  function peopleWhoBelongToTheIlluminati(arr){
  var result = arr.filter(function(object){if(object.member === true){return object}})
  return result
}
   console.log(peopleWhoBelongToTheIlluminati([{   name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
 { name: "Kanye West", member: false },{ name: "Bob Ziroll", member: true}]));

function ofAge(arr) {
    var Oldenough = arr.filter(function(fartsOfOld){return fartsOfOld <= 18})

}
  console.log([{ name: "Angelina Jolie", age: 80},
{ name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 },
{ name: "Kanye West", age: 16 },
{ name: "Bob Ziroll", age: 100},]);

function doubleNumber(arr) {
    var twoTimes = []; for(var i = 0; i < arr.length; i++){
        twoTimes.push(arr[i] * 2);
    }
    return twoTimes;
}
console.log(doubleNumber([2, 5, 100]));

function stringItUp(arr) {
    var nums = arr.toString();
    return nums
}
console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr) {
    var result = arr.map(function(names){return names.toUpperCase();})
    return result
}
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

  function namesOnly(arr){
    var result = arr.map(function(names){
        return names.name
})
return result
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age:80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }

]));
    function makeStrings(arr) {    
        var result = arr.map(function(names){
            if(names.age >= 18)
        {
        console.log(names.name + " can Go To Matrix")

        }else{
        console.log(names.name + " cant Go To The Matrix")
        }
    })
    return result
    }
    
    console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
    ]));
 
    function readyToPutInTheDOM(arr){
        return arr.map(function(obj) {
            return "<h1>" +obj.name +"</h1>" + "<h2>" + obj.age +"</h2>";
          });
        }
    
        console.log(readyToPutInTheDOM([
        {
            name: "Angelina Jolie",
                age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kanye West",
            age: 100
        }
    ]));
    const sum = [1, 2, 3].reduce(add,0);
    function add(accumulator,a) {
        return accumulator + a;
    }

    console.log(sum);
   
    function total(arr){
        var resul = arr.reduce(function(final, num){
            final += num
            return final
        })
        return result
    }

    console.log(stringItUp([1,2,3]));

    function stringConcat(arr) {
        var result = arr.reduce(function(final,num ){
            return final
        },[1,2,3])
        return result
    }

    console.log(stringConcat([1,2,3]))

     function totalVotes(arr) {
         var result = arr.reduce(function(final,voters){
             if(voters.voted){
                 final++
             }
             return final
         },0)
         return result
     }
 
     var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted: true},
        {names:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
     ];

     console.log(totalVotes(voters));

    function shoppingSpree(arr) {
        var result = arr.reduce(function(final,item){
            return final+item.price
        },0)
        return result
    }
    var wishlist = [
         { title: "Tesla Model S", price: 90000 },
         { title: "4 carat diamond ring", price: 45000 },
         { title: "Fancy hacky Sack", price: 5 },
         { title: "Gold fidgit spinner", price: 2000 },
         { title: "A second Tesla Model S", price: 90000}    
    ];

     console.log(shoppingSpree(wishlist));

    function flatten(arr) {
        var result = arr.reduce(function(final,flat){return final.concat(flat)})
        return result
    }

    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];
    console.log(flatten(arrays));

    var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: true},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name:'Mary', age: 31, voted: false},
        {name:'Becky', age: 43, voted: false},
        {name:'Joey', age: 41, voted: true},
        {name:'Jeff', age: 30, voted: true},
        {name:'Zack', age: 19, voted: false}
     ]; 
    function voterResults(arr){
        var result = arr.reduce(function(final,age){
            if(age.voted && age.age > 18 && age.age < 25)final.youngVotes++
            if(age.age > 18 && age.age > 26)final.youth++
            if(age.voted && age.age > 26 && age.age < 35)final.midVotes++
            if(age.age > 26 && age.age < 35)final.mids++
            if(age.voted && age.age > 36 && age.age < 56)final.oldVotes++
            if(age.age > 36 && age.age < 56)final.olds++

            return final
        },
    {youngVotes:0,youth:0,midVotes:0,mids:0,oldVotes:0,olds:0})
    return result
    }
    console.log(voterResults(voters));

    function leastToGreatest(arr) { 
        var result = arr.sort(function(a, b){
            return a-b});
            arr[0];
            return result
    }

     console.log(leastToGreatest([1, 3,5, 2, 90,20]));

    function greatestToLeast(arr) {
        var result = arr.sort(function(a, b)
        {return b-a});
        arr[0];
        return result
    }

     console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
 
    function lengthSort(arr) {
        var result = arr.sort(function(a, b)
        {return a.length-b.length});

        return result
    }

     console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

    function byAge(arr){
         var result = arr.sort(function(a, b)
         {return(a.age-b.age)})

         return result
    }

    console.log(byAge([
    { name: "Quiet Samurai", age: 22},
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
    ]));

    



       