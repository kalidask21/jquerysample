let input = [1, 3, 4, 5, 5, 6, 6, 6, 8, 9]


//console.log(input.slice(0, 5));
//console.log(input.slice(-7));
//console.log(input.slice(-1));



var findMaxDuplicate = (input) => {
  let result = 0,
    max = 0,
    inc = 0;
  let resultarry = [];
  input.forEach((element, index) => {
    let val = element;
    inc = (resultarry[element] || 0) + 1;
    resultarry[val] = inc;

    if (inc > max) {
      max = inc;
      result = val;
    }

  })

  console.log(result);
  return result;
}

var findVal = (input, opt) => {
  let result = input[0];
  input.forEach((element) => {
    if (opt === 'max') {
      if (element > result) {
        result = element;
      }
    } else {
      if (element < result) {
        result = element;
      }
    }

  })
  return result;
}


console.log(findVal(input, 'max'));
console.log(findVal(input, 'min'));


function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return {
    bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());


let maptest = new Map();
maptest.set("1", 'Kalidas');
maptest.set("2", 'Kalidas');

let setTest = new Set(input);


console.log(maptest, setTest);



var fiboni = (val) => {
  var outArr = [];
  for (let i = 0; i < val; i++) {
    if (i <= 1)
      outArr[i] = i;
    else
      outArr[i] = outArr[i - 1] + outArr[i - 2];

  }
  console.log(outArr);
}


let fibNo = 14;
fiboni(fibNo);
