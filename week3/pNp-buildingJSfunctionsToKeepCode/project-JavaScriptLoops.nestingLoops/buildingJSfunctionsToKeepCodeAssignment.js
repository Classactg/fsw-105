var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0

for (var i = 0; i < officeItems.length; i++){
   if (officeItems[i] === "computer"){
        count++
    }
}
console.log(count)  // -> 4
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }]
  {function isOldEnough(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough");
    }if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log("old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
      console.log("not old enough");
  }
       }
    }
  }
  isOldEnough();

  function evenOrOdd(){
    for(var i = 0; i < 101; i++){
      if(i % 2 === 1) {
        console.log(`${i} is odd`)
          }
      else{
        console.log(`${i} is even`)
      }
    }
  }
    evenOrOdd()   
