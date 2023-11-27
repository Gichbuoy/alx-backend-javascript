export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line
    const task2 = false; // eslint-disabled-line 
  }

  return [task, task2];
}
