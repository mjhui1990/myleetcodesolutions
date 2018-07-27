var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;
  let firstPt = headA;
  let secondPt = headB;
  let firstCount = 0;
  let secondCount = 0;
  let firstMatch;
  let secondMatch;

  while (firstPt.next) {
    firstPt = firstPt.next;
    firstCount++;
  }
  while (secondPt.next) {
    secondPt = secondPt.next;
    secondCount++;
  }

  let countDifference = Math.abs(firstCount - secondCount);
  if (firstCount > secondCount) {
    firstMatch = headA;
    secondMatch = headB;
  } else {
    firstMatch = headB;
    secondMatch = headA;
  }

  while (countDifference != 0) {
    firstMatch = firstMatch.next;
    countDifference--;
  }

  while (firstMatch && secondMatch) {
    if (firstMatch === secondMatch) return secondMatch;
    firstMatch = firstMatch.next;
    secondMatch = secondMatch.next;
  }
};
