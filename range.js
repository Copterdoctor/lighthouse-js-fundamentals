function range (start, end, step){
  var rangeArray = [];
  if (start !== undefined && end !== undefined && step !== undefined){
    if (step > 0){
      if (start < end) {
        for (var i = start; i <= end; i += step){
          rangeArray.push(i);
        }
      }
    }
  }
  return rangeArray;
}

console.log(range(0, 8 , 2));