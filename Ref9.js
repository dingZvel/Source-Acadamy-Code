//Q1
function make_optimized_search(A){
   const B = copy(A);
   merge_sort(B);
   return x => binary_search(B, x);
}

function copy(A){
    const B = [];
    for(let i = 0; i < array_length(A); i = i + 1) {
        B[i] = A[i];
    }
    return B;
}
function merge_sort(A){
    merge_sort_helper(A, 0, array_length(A) - 1);
}
function merge_sort_helper(A, low, high){
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}
function merge(A, low, mid, high) {
    const B = [];
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    while(left <= mid && right <= high){
        if (A[left] < A[right]){
           B[Bidx] = A[left];
           left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    while(left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }
    while(right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    for (let i = 0; i < high - low + 1; i = i + 1) {
        A[low + i] = B[i];
    }
}
function binary_search(A, v){
    let low = 0;
    let high = array_length(A) - 1;
    while(low <= high) {
        const mid = math_floor((low + high) / 2);
        if (v === A[mid]){
            break;
        } else if (v < A[mid]){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}
//test
const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
const my_search = make_optimized_search(my_array);
my_search(14); // returns true
my_search(30); // returns false

//Q2(a)
const f = [0, 1];
function fib(n){
    for(let i = 2; i <= n; i = i + 1) {
        f[i] = f[i - 1] + f[i - 2];
    }
}
fib(10);
f;
//Q2(b)
let a = 0;
let b = 1;
function _fib(n){
    for(let i = 2; i <= n; i = i + 1){
        b = a + b;
        a = b - a;
    }
    return b;
}
_fib(10);

//Q3
theta(n + k);
theta(n * k);