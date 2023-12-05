export default function setFromArray(array) {
  return (Array.isArray(array)) ? new Set(array) : new Set();
}
