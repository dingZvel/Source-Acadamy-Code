//Q2
function bubblesort_list(L) {
    let li = L;
    for(let i = length(L) - 1; i >= 1; i = i - 1) {
        for(let j = 0; j < i ; j = j + 1) {
            const xi = head(li);
            const xj = head(tail(li));
            if(xi > xj) {
                set_head(li, xj);
                set_head(tail(li), xi);
            }
            li = tail(li);
        }
        li = L;
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]



//Q3
const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if(n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    }
    if(read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const a = mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        write(n, k, a);
        return a;
    }
}

mcc(365, 5);  // Expected result: 1730

//Order of growth O(n*k) both time and space;