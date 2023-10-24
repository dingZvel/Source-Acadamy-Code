function _swap(A, i, j) {
    const n = array_length(A) - 1;
    const tmp = A[i][j];
    A[i][j] = A[n - j][i]; 
    A[n - j][i] = A[n - i][n - j];
    A[n - i][n - j] = A[j][n - i];
    A[j][n - i] = tmp;
}
function rotate_matrix(M) {
    const n = array_length(M);
    for(let i = 0; i <= math_floor((n - 1) / 2); i = i + 1) {
        for(let j = i; j < n - i - 1; j = j + 1) {
            _swap(M, i, j);
        }
    }
}
const t = [[ 1, 2,  3,  4],
           [ 5, 6,  7,  8],
           [ 9, 10, 11, 12],
           [13, 14, 15, 16]];
rotate_matrix(t);
t;