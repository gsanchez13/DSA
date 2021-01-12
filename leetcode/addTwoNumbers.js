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

    let l1Arr = getNodeVals(l1, []);
    let l2Arr = getNodeVals(l2, []);

    const getBackwardsNum = (arr) => {
        let num = ''
        for (let i = arr.length - 1; i >= 0; i--) {
            num += arr[i]
        }
        return Number(num)
    };

    let l1Num = getBackwardsNum(l1Arr);
    let l2Num = getBackwardsNum(l2Arr);
    let sumOfLL = l1Num + l2Num;

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

    return createBackwardsLL(sumOfLL)
};