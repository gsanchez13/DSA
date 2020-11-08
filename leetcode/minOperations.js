// The Leetcode file system keeps a log each time some user performs a change folder operation.

// The operations are described below:

// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// The file system starts in the main folder, then the operations in logs are performed.

// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

const minOperations = (logs) => {
    let timesBack = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i].startsWith("..")) {
            if (!(timesBack === 0)) {
                timesBack -= 1
            }
            else {
                timesBack = 0

            }
        }
        else if (!logs[i].startsWith(".")) {
            timesBack += 1
        }
    }

    return timesBack
};
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]))
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]))
console.log(minOperations(["d1/", "../", "../", "../"]))
console.log(minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]))