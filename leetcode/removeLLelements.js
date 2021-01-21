/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let l1 = new ListNode(1)
let l2 = new ListNode(2)
let l3 = new ListNode(6)
let l4 = new ListNode(3)
let l5 = new ListNode(4)
let l6 = new ListNode(5)
let l7 = new ListNode(6)

l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
l5.next = l6
l6.next = l7

let num = 6

var removeElements = function(head, val) {
    let answer = new ListNode(curr.val)
    let curr = head
    while(curr){
        if(curr.val != val){
           if(!answer){
               answer = new ListNode(curr.val)
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

console.log(l1, num)