"use strict";
function zipList(list1, list2) {
    const newList = [];
    for (let i = 0; i < list1.length; i++) {
        newList.push(list1[i], list2[i]);
    }
    return newList;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((acc, element, index) => acc.concat(element, list2[index]), []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
