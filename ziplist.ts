function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  const newList: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  return list1.reduce<(T | U)[]>((acc, element, index) => acc.concat(element, list2[index]), []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
