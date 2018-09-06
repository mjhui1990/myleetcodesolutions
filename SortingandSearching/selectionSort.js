//simple sorting algo n^2

const findSmallest = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = arr => {
  const newArr = [];

  while (arr.length) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1));
  }
  return newArr;
};
