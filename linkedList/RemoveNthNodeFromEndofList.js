var removeNthFromEnd = function(head, n) {
  if (!head.next && n === 1) return null;

  let fastPointer = head;
  let fastCounter = 0;
  let slowPointer = head;
  let counter = 0;
  while (fastPointer) {
    fastPointer = fastPointer.next;
    fastCounter++;
  }
  let difference = fastCounter - n;
  if (difference > 1) {
    counter = difference - 1;
    while (counter) {
      slowPointer = slowPointer.next;
      counter--;
    }
    slowPointer.next = slowPointer.next.next;
  } else if (difference === 0) {
    head = head.next;
  }
  return head;
};
