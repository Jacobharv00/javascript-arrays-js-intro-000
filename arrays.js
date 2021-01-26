//var ingredient1 = 'bread'
//var ingredient2 = 'mild cheese'
//var ingredient3 = 'sharp cheese'
//var ingredient4 = 'butter'
//var ingredient5 = 'tomato'
//var ingredient6 = 'garlic'

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// make function addElementToBeginningOfArray
// make function take two parameters
//an array and an element to add to the beginning of the array
//then add the element to beginning of array
//and make it return the whole array



function addElementToBeginningOfArray(array, element) {
  let newArray = [element, ...array ]
      return newArray
}

function  destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array, element) {
  let newArray = [...array, element]
    return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
    return array
}

function accessElementInArray(array, index) {
  let years = [1950, 1960, 1970]
  return years.length
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  let arrayOk = [1, 2, 3, 4]
  arrayOk.shift()
  return arrayOk
}
