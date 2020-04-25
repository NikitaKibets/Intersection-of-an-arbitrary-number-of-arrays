function inArray(elem, arr) { // поиск элемента в массиве
  return arr.indexOf(elem) !== -1;
}

function inArrays(elem, arrs) { // поиск элемента во  вложенных массивах
  for (let arr of arrs) {
    if (!inArray(elem, arr)) {
      return false;
    }
  }
  return true;
}

function getInt(...arrs) { // поиск совпадений в неограниченном кол-ве массивов основываясь на ->
  let first = arrs.shift(); // <- первом массиве

  let result = [];

  for (let elem of first) {
    if (inArrays(elem, arrs)) {
      result.push(elem);
    }
  }
  return result;
}

console.log(getInt([1, 2, 3], [1, 2, 4], [1, 2, 3, 4], [2, 3, 4, 5, 6, 7,]));
