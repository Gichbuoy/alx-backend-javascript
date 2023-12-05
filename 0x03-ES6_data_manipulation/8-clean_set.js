export default function cleanSet(set, startString) {
  const finalArray = [];
  if (set instanceof Set && typeof startString === 'string' && startString.length > 0) {
    for (const item of set) {
      if (typeof item === 'string' && item.startsWith(startString)) {
        finalArray.push(item.slice(startString.length));
      }
    }
  }
  return finalArray.join('-');
}
