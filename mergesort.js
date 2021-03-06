function split(wholeArray) {

  const firstHalf = [];
  const secondHalf = [];
  let midIndex = Math.floor(wholeArray.length / 2);
  // Up to, but not including midIndex for firstHalf; remainder in secondHalf
  wholeArray.forEach((value, i) => {
    if (i < midIndex) {
      firstHalf.push(value);
    } else {
      secondHalf.push(value);
    }
  });

  return [firstHalf, secondHalf];
}

function merge(array1, array2){
  let combinedArr = [];

  while (array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      combinedArr.push(array1.shift());
    }
    else {
      combinedArr.push(array2.shift());
    }
  }

  if (array1.length > 0){
    combinedArr = combinedArr.concat(array1);
  } else if (array2.length > 0){
    combinedArr = combinedArr.concat(array2);
  }

  return combinedArr;
}

//merge([2,4,9],[1,3,5,7]);

/* Base case: Every array is one element
 * Otherwise, split and call mergeSort on the two halves
 * Merge the halves into a sorted array
 */

let finalArr = [];
function mergeSort(array) {
  let halves = null;
  //let finalArr = [];

  if (array.length === 1) {
    finalArr.push(array[0]);
  } else if (array.length > 1) {
    halves = split(array);
    mergeSort(halves[0]);
    mergeSort(halves[1]);
  }

  return finalArr;
}
