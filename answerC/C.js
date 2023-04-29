class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  const dfsRecursivePreOrder = (node, arr = []) => {
    if (node) {
      arr.push(node.val);
      if (node.left) dfsRecursivePreOrder(node.left, arr);
      if (node.right) dfsRecursivePreOrder(node.right, arr);
    }
    return arr;
  };
  
  const dfsRecursiveInOrder = (node, arr = []) => {
    if (node) {
      if (node.left) dfsRecursiveInOrder(node.left, arr);
      arr.push(node.val);
      if (node.right) dfsRecursiveInOrder(node.right, arr);
    }
    return arr;
  };
  
  const dfsRecursivePostOrder = (node, arr = []) => {
    if (node) {
      if (node.left) dfsRecursivePostOrder(node.left, arr);
      if (node.right) dfsRecursivePostOrder(node.right, arr);
      arr.push(node.val);
    }
    return arr;
  };
  const bst = new Node(1);
  bst.left = new Node(2);
  bst.left.left = new Node(4);
  bst.left.right = new Node(5);
  bst.left.right.left = new Node(6);
  bst.left.right.right = new Node(7);
  bst.left.right.right.left = new Node(8);
  bst.right = new Node(3);
  
  console.log(dfsRecursivePreOrder(bst));
  
  console.log(dfsRecursivePostOrder(bst));
  
  console.log(dfsRecursiveInOrder(bst));
  