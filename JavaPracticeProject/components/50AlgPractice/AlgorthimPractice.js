console.log('File Load started');
//https://hackernoon.com/50-data-structure-and-algorithms-interview-questions-for-programmers-b4b1ac61f5b0

//1. How do you find the missing number in a given integer array of 1 to 100


const missingInteger = (inArr,totalNo) =>{
    let totalcount  = (totalNo) * ((totalNo + 1)/2);
    console.log('totalcount :' +totalcount);
    let arrayCount = 0;
    inArr.forEach((val) =>{
    	arrayCount = arrayCount + val;
    })
    return totalcount - arrayCount;
}
//console.log('Missing no is ', missingInteger([1,2,3,4,6,7,8],8));


//2.How do you find the duplicate number on a given integer array? 

const findduplicateInt = (inArr) =>{
    let duplicateCount = new Array(inArr.length);
    let duplicateDigit = 0;
    let maxRepeat = 0;
    inArr.forEach((val,index) =>{
    	if(!duplicateCount[val]) 
           duplicateCount[val] = 1;
    	 else
    	   duplicateCount[val] = duplicateCount[val]  + 1;    		
    });
   
    duplicateCount.forEach((val,index) =>{
    	if(val > maxRepeat){
           maxRepeat = val;
           duplicateDigit = index;
    	}	 
    });
    return ` Duplicate is ${duplicateDigit} and repeated ${maxRepeat} times`;
   
}

//console.log(findduplicateInt([0,0,0,1,1,1,1,2,3,4,5,6]));

//3.How do you find the largest and smallest number in an unsorted integer array

const findSmallAndLargestNo = (inArr) =>{
    let largestNo = inArr[0];
    let smallestNo = inArr[1];
    inArr.forEach((val,index) =>{
    	if(val > largestNo){
    		largestNo = val;
    	}
    	if(val < smallestNo){
    		smallestNo = val;
    	}
    });
    return ` largestNo is ${largestNo} and smallestNo is ${smallestNo}`;   
}

//console.log(findSmallAndLargestNo([-89,3,4,67,8,11,22,3,4]));

// 4. How do you find all pairs of an integer array whose sum is equal to a given number?

const findSumofOnlyPairIsEqual = (inArr,equalInt) =>{
    let pairArr = new Array(2);
    inArr.forEach((val,index) =>{
    	if(equalInt == inArr[index]+inArr[index+1]){
    		pairArr[0]= inArr[index];
    		pairArr[1]= inArr[index+1];
    	}
    });
    return ` Pair Array is ${pairArr} `;   
}

//console.log(findSumofOnlyPairIsEqual([1,2,55,2,3,4,5,6],57));


//5.How do you find duplicate numbers in an array if it contains multiple duplicates?

const findMultiplicatesFromArray = (inArr) =>{
    let duplicateArrayCount = [];
    let duplicateArrayList = [];
    inArr.forEach((val,index) =>{
         duplicateArrayCount[val] = duplicateArrayCount[val] ? duplicateArrayCount[val] + 1 : 1;
    });
   
    duplicateArrayCount.forEach((val,index) =>{
    	if(val > 1){
           duplicateArrayList.push(index);
        }	 
    });
    return ` Duplicate no's in array are ${duplicateArrayList} `;
   
}

//console.log(findMultiplicatesFromArray([1,2,2,3,4,5,6]));

//How are duplicates removed from a given array 

const removeDuplicateFromArray = (inArr) =>{
    let duplicateArrayCount = [];
    let uniqueArrayList = [];
    inArr.forEach((val,index) =>{
         duplicateArrayCount[val] = duplicateArrayCount[val] ? duplicateArrayCount[val] + 1 : 1;
    });
   
    duplicateArrayCount.forEach((val,index) =>{
    	if(val >= 1){
           uniqueArrayList.push(index);
        }	 
    });

    for(let i =0;i<duplicateArrayCount.length;i++)
    	console.log(duplicateArrayCount[i]);

    return ` Unique array is ${uniqueArrayList} `;
   
}

//console.log(removeDuplicateFromArray([1,2,2,3,10]));


// How is an integer array sorted in place using the quicksort algorithm? (solution)

const sortByQuickSorting = (inArr) =>{
   let temp = 0;
   console.log(inArr.length);
   let middle = Math.round((inArr.length)/2);
   console.log('middle is ',middle);
   let pivot 
   for(let i=0; i<middle; i++){
        if(inArr[i] > inArr[middle]){
            temp = inArr[i];
            inArr[i] =  inArr[middle]; 
            inArr[middle] = temp;
         }
   }
   console.log(inArr);
}


//console.log(sortByQuickSorting([5,2,8,7,1,3,4]))

//How do you print duplicate characters from a string?

const findDuplicateInString = (str) =>{
  // console.log(str.split(''));
   const stringArrs = str.split('')
   const uniquArr = [];
   const duplicateChar = [];
   const uniqueChar = [];
   let firstUniq = null;
   let count = 0;
   stringArrs.forEach((val,index)=>{
      uniquArr[val] = uniquArr[val] ? uniquArr[val] + 1 : 1; 
      if(uniquArr[val]>1){
        duplicateChar.push(val);
      }

      if(uniquArr[val] <=1){
        uniqueChar[count] = val;
        if(count === 0){
            firstUniq = val;
        }
        count++;
      }
   })

   console.log(' uniquArr char are  ',uniquArr);
    console.log(' uniquArr char are first :  ',firstUniq);
   console.log('duplicate Char are',duplicateChar);
  
}

//findDuplicateInString("aabbccdeeffghhik");

// Find is 2 strings are anagram or not


const isAnagramCaseSensitive = (str1,str2) =>{
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    if(str1Arr.length !== str2Arr.length){
        return false;
    }
    str1Arr.forEach(val=>{
         if(str2Arr.indexOf(val) != -1){
            str2Arr.splice(str2Arr.indexOf(val) ,1);
         }  
    });
    console.log(str2Arr);
    return str2Arr.length === 0;
}

//console.log('Is anaagram',isAnagramCaseSensitive('Rooney123','Roo1n2ey3'))
//one way
const checkContainsDigits = (input) => {
    let regex = /[0-9]/g;
    const inVal = input;
    return input.match(regex);
}

//one way
const checkContainsChar = (input) => {
    let regex = /[a-zA-Z]/g;
    const inVal = input;
    return input.match(regex);
}

//console.log(checkContainsChar('ASBCNDcshjshj'));

const checkPalindrome =(input) => {
    let palindromedVal = input.split('').reverse().join('');
    return input === palindromedVal;        
}

//console.log(checkPalindrome('kalidas'))
//console.log(checkPalindrome('civic'));
//console.log(checkPalindrome('racecar'));



const findMissingNoBetween = (input, limit) =>{
    let missingNo = [];
    for(let i = 1 ;i < limit;i++){
        if(input.indexOf(i) == -1){
            missingNo.push(i);
        }
    }
    return missingNo;
}


//console.log(findMissingNoBetween([1,2,3],10))




const findMaxLoot = (inp) =>{
  let maxLoot = 0;
  let inner = 2;
  let outer = inner + 2;
 for(let i = inner; i < inp.length ; i++){
    for(let j = i+2; j < inp.length ; j++){
         if(inp[i] > inp[j]){
            maxLoot = maxLoot + inp[i];
            inner+2;
            break;
         }   
         else {
           maxLoot = maxLoot + inp[j];
           outer+2;
           break;
         } 
    }
  }
   return maxLoot;
}





















console.log('File Load Ended');