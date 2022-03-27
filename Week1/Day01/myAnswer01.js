'use strict';
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const totalLength = arr.length;

  const negativeValues = [];
  const zerosValues = [];
  const positiveValues = [];


  const filterValues = () => {
    arr.map((value)=>{
      if (value < 0 ) {
        negativeValues.push(value);
      } else if (value > 0) {
        positiveValues.push(value);
      } else {
        zerosValues.push(value);
      }
    })
    return calculateProportions(negativeValues.length, positiveValues.length, zerosValues.length)
  }

  const calculateProportions = (negativeLength, positiveLength, zeroLength) => {
    const proportionOfNegative = (negativeLength / totalLength).toFixed(6);
    const proportionOfPositive = (positiveLength / totalLength).toFixed(6);
    const proportionOfZero = (zeroLength / totalLength).toFixed(6);
    return printOutput(proportionOfNegative, proportionOfPositive, proportionOfZero);
  }

  const printOutput = (proportionOfNegative, proportionOfPositive, proportionOfZero) => {
    console.log(proportionOfPositive);
    console.log(proportionOfNegative);
    console.log(proportionOfZero);
  }
  filterValues();
}

