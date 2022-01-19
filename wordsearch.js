const transpose = function(matrix) {
    // Put your solution here
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          array[j] = [];
        }
        array[j][i] = matrix[i][j];
      }
    }
    return array;
  };




const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const len = word.length;
    let count = 0;
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    //console.log(verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};
module.exports = wordSearch