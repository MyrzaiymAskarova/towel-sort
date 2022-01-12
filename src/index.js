
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return [];
  let sortAr = []; 
  let i = 0;
  for (let el of matrix) {
     i%2 === 0 ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a);
     i++;
  }
  for (let el of matrix)
    sortAr = [...sortAr, ...el]
  return sortAr;
}
