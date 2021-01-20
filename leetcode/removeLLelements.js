/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let answer = new ListNode(curr.val)
    let curr = head
    while(curr){
        if(curr.val != val){
           if(!answer){
               answer = 
               let answerCurr = answer
           }
            else {
                answer.next = curr.val
            }
        let next = curr.next
        curr = next
        }
    } return answer
};