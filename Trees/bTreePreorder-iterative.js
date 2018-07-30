var preorderTraversal = function(root) {
  if (!root) return [];
  const stack = [];
  const valuesArr = [];

  stack.push(root);

  while (stack.length) {
    let currentNode = stack.pop();
    valuesArr.push(currentNode.val);
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
  return valuesArr;
};
