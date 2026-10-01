'use strict';

function getRomanString(num, map){
  if(map.has(num)){
    return map.get(num);
  }
  else{
    let currentString = "";
    while(num > 0){
      let largestKey = 0;
      // console.log(`num = ${num}`);
      for(const[key] of map){
        if(key <= num && key > largestKey){
          largestKey = key;
        }
      }
      // console.log(`largest key for ${num} = ${largestKey}`);
      currentString += map.get(largestKey);
      num -= largestKey;
    }
    return currentString;
  }
}

function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['CM',900],
      2:['D', 500], 
      3:['CD',400],
      4:['C', 100], 
      5:['XC',90],
      6:['L', 50], 
      7:['XL',40],
      8:['X', 10], 
      9:['IX', 9],
      10:['V', 5], 
      11:['IV',4],
      12:['I', 1]
    };

    //seperating the digits
    let digitCount = 0;
    let temp = num;
    let numsArr = [];
    while(temp > 0){
      digitCount++;
      let lastDig = temp%10;
      numsArr.push(lastDig);
      temp = Math.floor(temp/10);
    }
    // console.log(digitCount);
    
    //preserving the num order
    let left = 0;
    let right = numsArr.length-1;
    while(left < right){
      let temp = numsArr[left];
      numsArr[left] = numsArr[right];
      numsArr[right] = temp;
      left++;
      right--;
    }
    // console.log(`numbers = ${numsArr}`);
    
    //unpacking the obj
    // const values = Object.values(obj); 
    // console.log(values);

    //generating the map
    const map = new Map(Object.values(obj).map(([roman, number]) => [number, roman]));
    // console.log(map);
    
    // generating the roman string
    digitCount -= 1;
    let romanString = "";
    for(let i=0; i<numsArr.length; i++){
      let currentNum = numsArr[i]*(10**digitCount);
      // console.log(currentNum);
      romanString += getRomanString(currentNum, map);
      digitCount--;
    }
    console.log(romanString);
    
    

}

// convertToRoman(14);


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
