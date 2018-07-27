var detectCycle = function(head) {
  if (!head || !head.next) return null;

  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    //if a cycle is found
    if (slow === fast) {
        //start a new pointer this pointer will meet the pointer that was intersected
        //due to floyd cycle detection
      let meetTrack = head;
      while (meetTrack !== slow) {
        meetTrack = meetTrack.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
