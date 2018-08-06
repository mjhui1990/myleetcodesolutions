
var inorderTraversal = function(root) {
  if (!root) return [];
  let currentNode = root;
  const stack = [];
  const valuesArr = [];

  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      valuesArr.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }

  return valuesArr;
};