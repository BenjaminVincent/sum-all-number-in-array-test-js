function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {
    if (!Array.isArray(item)) {
      sum += item;
    } else {
      sum += sumItems(item);
    }
  });
  return sum;
}

//  console.log(sumItems([1, 2, [3, 5], 4])); //10

module.exports = sumItems;