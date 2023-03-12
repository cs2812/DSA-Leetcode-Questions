var reverseList = function(head) {
  let c = head;
  let p = null;
  let f = null;
  while(c!==null){
      f = c.next;
      c.next = p;
      p = c;
      c=f
  }
  head = p;
  return head;
};

let head1 = [1,2,3,4,5]
// Output: [5,4,3,2,1]

