var search = function (nums, target) {
  cutList = nums.sort();
  var indexTarget;
  var midI = cutList.length / 2;

  while (!indexTarget) {
    if (cutList[midI] == target) {
      indexTarget = midI;
      console.log(indexTarget);
      console.log("if")
    } else if (cutList[midI] < target) {
      cutList = cutList.slice(0, midI--);
      midI = cutList.length / 2;
      console.log("elif1")
      console.log(cutList);
    } else if (cutList[midI] > target) {
      cutList = cutList.slice(midI, cutList.length - 1);
      midI = cutList.length / 2;
      console.log(cutList);
      console.log("elif2")
    }
  }
  console.log("fora")
  console.log(indexTarget);
  return indexTarget;
};

search([-1, 0, 3, 5, 9, 12], 9);
