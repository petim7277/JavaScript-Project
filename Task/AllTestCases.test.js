const {findLargeScores,increasingScores,findSquareArray,addingToStringArray,findTimeArray} = require("./AllTask");
test("testFindingScores_GreaterThanSeventy_ArrayFunctionWorks",()=>{
    let studentScores = [10,20,30,45,78,89,99,95,100,70];
    let expected = [78,89,99,95,100,70];
    let result = findLargeScores(studentScores);
    expect(result).toEqual(expected);
});

test("testThatIncreasing_ScoresFunctionWorks",()=>{
    let studentScores = [10,20,30,40,50,60,70,80,90];
    let expected =      [15,25,35,45,55,65,75,85,95];
    let result = increasingScores(studentScores);
    expect(result).toEqual(expected);
});

test("testThatFind_SquareArrayFunction_Works",()=>{
    let studentScores = [2,4,6,8,10];
    let expected =      [4,16,36,64,100];
    let result = findSquareArray(studentScores);
    expect(result).toEqual(expected);
});

test("testThatAdding_ToStringArray_FunctionWorks",()=>{
    let nameArray =["Emily","Jack","Sophia","Daniel"];
 let bookArray = ["BookOne","BookTwo","BookThree","BookFour"];
 let  expected = ["Emily","BookOne","Jack","BookTwo","Sophia","BookThree","Daniel","BookFour"];
 let result = addingToStringArray(nameArray,bookArray);
 expect(result).toEqual(expected);
});

test("testThatFindTime_ArrayFunctionWorks",()=>{
    let time =["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM","5:00 PM"];
    let expected = [ '1:00 PM', '3:00 PM', '5:00 PM' ];
    let result = findTimeArray(time);
    expect(result).toEqual(expected);
})