export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(buffer);
  if (position < length) { typedArray[position] = value; } else { return new Error('Position outside range'); }
  return buffer;
}
