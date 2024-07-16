// Task
// Let's define a hole of size n as a matrix which is built as follows.

// Its elements are in range [1..n^2].
// The matrix is filled by rings, from the outwards the innermost.
// Each ring is filled with numbers in the following way:
// the first number is written in the top left corner;
// the second number is written in the top right corner;
// the third number is written in the bottom right corner;
// the fourth number is written in the bottom left corner;
// each next number is written next to the number written 4 steps before it, until the ring is filled.
// The matrix is constructed when all numbers are written. Given the size of the hole, return the number written at (a, b).

// Example
// For n = 4, a = 1, b = 1, the output should be 13.

// The hole looks like this:

// [
// [ 1,  5,  9,  2],
// [12, 13, 14,  6],
// [ 8, 16, 15, 10],
// [ 4, 11,  7,  3],
// ]
// The element at (1, 1) is 13.
// For n = 5, a = 3, b = 2, the output should be 23.

// The hole looks like this:

// [
// [ 1,  5,  9, 13,  2],
// [16, 17, 21, 18,  6],
// [12, 24, 25, 22, 10],
// [ 8, 20, 23, 19, 14],
// [ 4, 15, 11,  7,  3],
// ]
// The element at (3, 2) is 23.
// Input/Output
// [input] integer n
// Matrix size, 1 ≤ n ≤ 100.

// [input] integer a
// Row number, 0 ≤ a ≤ n - 1.

// [input] integer b
// Column number, 0 ≤ b ≤ n - 1.

// [output] an integer
// The hole[a][b]

function blackHole(n, a, b) {
    function constructHoleMatrix(n) {

        let matrix = Array.from({ length: n }, () => Array(n).fill(0));
        let currentValue = 1;

        for (let layer = 0; layer < Math.ceil(n / 2); layer++) {

            let topLeft = [layer, layer];
            let topRight = [layer, n - layer - 1];
            let bottomRight = [n - layer - 1, n - layer - 1];
            let bottomLeft = [n - layer - 1, layer];

            // Fill the corners
            let corners = [topLeft, topRight, bottomRight, bottomLeft];
            for (let [x, y] of corners) {
                if (matrix[x][y] === 0) {
                    matrix[x][y] = currentValue++;
                }
            }

            for (let i = 1; i < n - 2 * layer; i++) {
                if (matrix[layer][layer + i] === 0) {
                    matrix[layer][layer + i] = currentValue++;
                }
                if (matrix[layer + i][n - layer - 1] === 0) {
                    matrix[layer + i][n - layer - 1] = currentValue++;
                }
                if (matrix[n - layer - 1][n - layer - 1 - i] === 0) {
                    matrix[n - layer - 1][n - layer - 1 - i] = currentValue++;
                }
                if (matrix[n - layer - 1 - i][layer] === 0) {
                    matrix[n - layer - 1 - i][layer] = currentValue++;
                }
            }
        }

        return matrix;
    }

    let matrix = constructHoleMatrix(n);
    return matrix[a][b];
}
