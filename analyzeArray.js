export default function analyzeArray(arr) {
  let info = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  //If length of array is 0 we return with all values 0
  if (arr.length === 0) return info;

  // We want to keep only values that are numbers
  let arrToUse = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i])) {
      arrToUse.push(arr[i]);
      total += arr[i];
    }
  }

  // if there are no numbers in the array we return
  if (arrToUse.length === 0) return info;

  // Else we do the calculations
  info.length = arrToUse.length;
  info.average = total / info.length;
  info.min = Math.min(...arrToUse);
  info.max = Math.max(...arrToUse);

  return info;
}
