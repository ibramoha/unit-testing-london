function removeMiddle( words ){
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice

  return words.splice(Math.floor(words.length/2), 1);
}

function get2ndAnd3rd( myArray ){
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice

  return sliced = myArray.slice(1,3);


}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map

  function increment (myArrItems){
    return  ++myArrItems;
 }

 return mapped = myArray.map(increment);


}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property

  function stringLength (myArrItems){
    return  myArrItems.length;
 }

 return numOfLetters = words.map(stringLength);


}

function cities( capitals, formatter ){
  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences

var mappedArray = capitals.map(function formatter(myArrItems) {
      return (myArrItems.city + " is the capital of " + myArrItems.country)
    });
      return  mappedArray;
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter

  function filterItems(myArrItems){
    return  myArrItems > 10;
 }

    return filtered = numbers.filter(filterItems); 

}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'

  function filterEven(myArrItems){
    return  myArrItems % 2 === 0;
 }

    return even = numbers.filter(filterEven); 


}

function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf

  return words.indexOf('needle');
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  
  return Math.max.apply(null, numbers);
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  var result = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

    return result;
 
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  
  var filtered =  things.filter(function (myArrItems) {
        return typeof myArrItems === "number";
      });
     var result = filtered.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
  });
     return result/filtered.length;
  
}

function paintShop( cars, colour ){
  // cars is an array of objects that have 
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each car to be the colour 
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
    var paintedWith =[];
    cars.forEach(function(element) {
        paintedWith.push(Object.assign({}, element));
    });
    paintedWith.forEach(function(element){
      element.colour = colour;
    });

    return paintedWith;
  

}

function sales( cars ){
  // cars is an array of objects that have been sold
  // their properties are `make`, `model`, `colour` and `price`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red',
  //   price: 5999
  // }

  // calculate and return the total sales for each make and return the totals
  // the output should like a bit like

  // {
  //   'Ford': 20000,
  //   'Vauxhall': 15000
  // }
  totalSale = {};
  cars.forEach(function(element){
    totalSale[element.make] =  totalSale[element.make] || 0;
    totalSale[element.make] += element.price;
  });

  return totalSale;

}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
   var max= numbers.indexOf(Math.max(...numbers))
  
   numbers.splice(max, 1);  

   return numbers.indexOf(Math.max(...numbers));


}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
  if(int === 0 || int === 1){
    return 1;
  }
  else if( int < 0) {
    return undefined;
  }
    return int*factorial(int-1);
  
}

module.exports = {
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  average,
  paintShop,
  sales,
  secondLargest,
  factorial
};
