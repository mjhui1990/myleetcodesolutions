var mergeTwoLists = function(l1, l2) {
  let mergedNode = new ListNode();
  let curMerged = mergedNode;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      curMerged.next = l2;
      l2 = l2.next;
      curMerged = curMerged.next;
    } else if (l1 < l2.val) {
      curMerged.next = l1;
      l1 = l1.next;
      curMerged = curMerged.next;
    } else {
      curMerged.next = l1;
      l1 = l1.next;
      curMerged = curMerged.next;
    }
  }

  if (l1 !== null) {
    curMerged.next = l1;
    curMerged = curMerged.next;
  }
  if (l2 !== null) {
    curMerged.next = l2;
    curMerged = curMerged.next;
  }

  return mergedNode.next;
};
