export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const index of array) {
    newArray.push(appendString + index);
  }

  return newArray;
}
