var postorderTraversal = function(root) {
    if(!root) return [];
    let currentNode = root
    const stack = [];
    const valuesArr = []

    while(currentNode) {
        if(currentNode.right) stack.push(currentNode.right);
        stack.push(currentNode)
        currentNode = currentNode.left;
    }
    
    currentNode = stack.pop();
    if (currentNode.right && stack[stack.length-1] === currentNode.right) {
        stack.pop()
        stack.push(currentNode)
        currentNode = currentNode.right;
    }else {
        valuesArr.push(currentNode.val)
        currentNode = null;
    }


    return valuesArr;
}

