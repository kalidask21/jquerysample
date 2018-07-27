class SortingAlg {
  constructor(input) {
    this.inp = input;
  }

  // Selection Sort
  selectionSort() {
    let start = new Date().getTime();
    let arraySize = this.inp.length;
    for (let i = 0; i < arraySize - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arraySize; j++) {
        if (this.inp[j] < this.inp[minIndex]) {
          minIndex = j;
        }
      }
      let tempVal = this.inp[minIndex];
      this.inp[minIndex] = this.inp[i];
      this.inp[i] = tempVal;
    }
    let end = new Date().getTime();
    console.log("Time Taken Selection Sort  : ", end - start);
    return this.inp;
  }

  // Bubble Sort
  bubbleSort() {
    let start = new Date().getTime();
    let arraySize = this.inp.length;
    for (let i = 0; i < arraySize - 1; i++) {
      for (let j = i + 1; j < arraySize; j++) {
        if (this.inp[j] < this.inp[i]) {
          let temp = this.inp[j];
          this.inp[j] = this.inp[i];
          this.inp[i] = temp;
        }
      }
    }
    let end = new Date().getTime();
    console.log("Time Taken Selection Sort  : ", end - start);
    return this.inp;
  }


  // Insertion Sort

  insertionSort() {
    let arraySize = this.inp.length;
    for (let i = 0; i < arraySize - 1; i++) {

    }
    return this.inp;
  }


}



/*
let start = new Date().getTime();
console.log("Selection Sort  : ", selectionSort(inp))
let end = new Date().getTime();
console.log("Time Taken Selection Sort  : ", end - start);


let start1 = new Date().getTime();
console.log("Bubble Sort  : ", bubbleSort(inp))
let end1 = new Date().getTime();
console.log("Time Taken bubbleSort   : ", end1 - start1);
*/


class AlgorithCaller extends SortingAlg {
  constructor(inp) {
    super(inp);
  }

  selectionSortOutput() {
    return this.selectionSort();
  }

  bubbleSortOutput() {
    return this.bubbleSort();
  }


}

// generate a uniformly distributed int random numbers
const randomArray = (length, max) =>
  Array(length).fill().map(() => Math.round(Math.random() * max));
let input = randomArray(10000, 12);

const alg = new AlgorithCaller(input);

alg.selectionSortOutput();
alg.bubbleSortOutput();
