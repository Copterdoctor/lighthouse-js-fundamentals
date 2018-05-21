function lastIndexOf(array, num){
  if (array.length < 1){
    return -1;
  }
  var counter = array.length - 1;
  while(counter !== -1){
    var element = array[counter]
    if (element === num) {
      return counter;
    } else if (counter === 0){
      return -1;
    } else {
      counter--;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);