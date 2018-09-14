/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for(var i in preferences){
    var lover1 = i;
    var lover2 = preferences[i]-1;
    var lover3 = preferences[lover2]-1;
    if ((preferences[lover3]-1 == i) && (preferences[i]-1 != i)){
      count++;
    }
  }
  return count/3;
};
