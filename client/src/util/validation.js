export function isValidAge(age) {
  return !isNotEmpty(age) || !Number.isInteger(+age) || +age < 10 || +age > 90;
}

export function isValidNumOfPeople(value) {
  return (
    !isNotEmpty(value) || !Number.isInteger(+value) || +value < 0 || +value > 12
  );
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}
export function invalidCombination(age, people) {
  return +age < 16 && +people === 0;
}
