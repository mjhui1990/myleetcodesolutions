var reverseList = function(head) {
  if (!head) return head;
  if (!head.next) return head;
  let currNode = head;

  let slider = currNode.next.next;
  let neighbor = currNode.next;
  currNode.next = null;
  neighbor.next = currNode;

  let currentNode = slider;

  while (slider) {
    currentNode = neighbor;
    neighbor = slider;
    slider = slider.next;
    neighbor.next = currentNode;
  }

  return neighbor;
};
