let inp = [12, 4, 5, 6, 8, 18, 19, 345, 789, 22, 4567, 1222, 45456, 111111];

// Selection Sort
var selectionSort = (inp) => {
  let arraySize = inp.length;
  for (let i = 0; i < arraySize - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (inp[j] < inp[minIndex]) {
        minIndex = j;
      }
    }
    let tempVal = inp[minIndex];
    inp[minIndex] = inp[i];
    inp[i] = tempVal;
  }
  return inp;
}

// Bubble Sortt
var bubbleSort = (inp) => {
  let arraySize = inp.length;
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      if (inp[j] < inp[i]) {
        let temp = inp[j];
        inp[j] = inp[i];
        inp[i] = temp;
      }
    }
  }
  return inp;
}


let start = new Date().getTime();
console.log("Selection Sort  : ", selectionSort(inp))
let end = new Date().getTime();
console.log("Time Taken Selection Sort  : ", end - start);


let start1 = new Date().getTime();
console.log("Bubble Sort  : ", bubbleSort(inp))
let end1 = new Date().getTime();
console.log("Time Taken bubbleSort   : ", end1 - start1);
