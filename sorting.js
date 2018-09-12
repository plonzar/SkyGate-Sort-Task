
let sortingModule = (function(){
  // create object of ValuePair
  function ValuePair(key, count) {
    this.key = Number(key);
    this.count = Number(count);
  }

  // create sorted array
  function createSortedArray(valuesCount) {
    let newArray = [];

    for (let pair of valuesCount) {
      for (let i = 0; i < pair.count; i++)
        newArray.push(pair.key);
    }

    return newArray;
  }

  // sort array
  function countSort(sortedArray) {

    let valuesCount = [];
    // creating valuesCount Array
    for (let number of sortedArray) {
      let index = -1;

      // no specyfic key in valuesCount
      let keyIndex = valuesCount.map(x => x.key).indexOf(Number(number));
      if (keyIndex === -1) {

        // new pair
        let tempPair = new ValuePair(number, 1);
        // insert into valuesCount:

        // empty valuesCount
        if (valuesCount.length === 0)
          valuesCount.push(tempPair);
        else {

          // not empty valuesCount
          let keysArray = valuesCount.map(x => x.key);

          // search for index to insert new value
          for (let i = 0; i < keysArray.length; i++) {
            index = i;
            if (number < keysArray[i]) {
              valuesCount.splice(index, 0, tempPair);
              index = -1;
              break;
            }
          }

          // if index not found add to array end
          if (index === keysArray.length - 1)
            valuesCount.push(tempPair);
        }
      }
      else {
        //specyfic key is in valuesCount
        index = valuesCount.map(x => x.key).indexOf(number);
        valuesCount[index].count += 1;
      }
    }
    // creating new sortedArray
    return createSortedArray(valuesCount);
  }

  return {
    sort: countSort
  }
})();