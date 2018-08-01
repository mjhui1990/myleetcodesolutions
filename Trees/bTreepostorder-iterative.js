var postorderTraversal = function(root) {
  if (!root) return [];
  let stackOne = [root];
  let numArr = [];
  let currentNode;

  while (stackOne.length) {
    currentNode = stackOne.pop();
    numArr.unshift(currentNode.val);
    if (currentNode.left) stackOne.push(currentNode.left);
    if (currentNode.right) stackOne.push(currentNode.right);
  }
  return numArr;
};
