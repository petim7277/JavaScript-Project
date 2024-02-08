//first question
let findLargeScores = function find(numberArray){
    return numberArray.filter((number) => number >= 70);
};

// second question
let increasingScores = function increase(scoreArray){
  return scoreArray.map((score) => score + 5);
};

//third question

let findSquareArray = function square(numberArray){
  return numberArray.map((number) => number * number);
};

//fourth question

let addingToStringArray = function append(nameArray,bookArray){
    let newArray = nameArray;
    for( const book of bookArray){
      newArray.push(book);
    }
return newArray;
};

//fifth question

let findTimeArray = function find(timeArray){
    return timeArray.filter((time)=> time.includes("PM") )

}

//sixth question









// let nameArray =["Emily","Jack","Sophia","Daniel"];
// let bookArray = ["BookOne","BookTwo","BookThree","BookFour"];
// console.log(addingToStringArray(nameArray,bookArray));
module.exports ={findLargeScores,increasingScores,findSquareArray,addingToStringArray,findTimeArray};
