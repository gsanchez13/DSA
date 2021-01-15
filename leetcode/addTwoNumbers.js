/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const getNodeVals = (node, arr) => {
        let currNode = node
        while (currNode) {
            arr.push(currNode.val)
            currNode = currNode.next
        }
        return arr
    };
// creates a helper function that can create an array out of a linked list head node
    let l1Arr = getNodeVals(l1, []);
    let l2Arr = getNodeVals(l2, []);
// creates the associated arrays from the linked list nodes in arguments
    const getBackwardsNum = (arr) => {
        let num = ''
        for (let i = arr.length - 1; i >= 0; i--) {
            num += arr[i]
        }
        return BigInt(num)
    };
// creates the value of the concatinated number of the array backwards by concatinating it to a string, then converting it into a BigInt aka number
// Due to JavaScript limitations, in order to avoid exponentials, BigInt() can be used to display all integers
// However, BigInt() cannot be used with Number() as it can cause inaccuracy in numerical value

    let l1Num = getBackwardsNum(l1Arr);
    let l2Num = getBackwardsNum(l2Arr);
    let sumOfLL = l1Num + l2Num;
// gets the sum of the linked lists backwards
    const createBackwardsLL = (num) => {
        let numArr = num.toString().split("");
        let headNode = new ListNode(Number(numArr[numArr.length - 1]))
        let i = numArr.length - 1
        let currNode = headNode
        while (i > 0) {
            let nextNode = new ListNode(Number(numArr[i - 1]))
            currNode.next = nextNode
            currNode = nextNode
            i--
        }
        return headNode
    };
// creates a helper function that takes in that number, creates a string array of each element, and creates a linkedlist ofo it going backwards again (since we reversed the order in the beginning, this sets it to the correct order but once added backwards)
    return createBackwardsLL(sumOfLL)
// returns head linked list node
};