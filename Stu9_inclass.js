let helper = [];
let index = 0;
function add(xs) {
    helper[index] = xs;
    index = index + 1;
}
function check(xs) {
    for (let i = 0; i < index; i = i + 1) {
        if ( xs === helper[i]) {
            return true;
        }
    }
    return false;
}
function count_pairs(x) {
    if (!is_pair(x) || check(x)) {
        return 0;
    } else {
        add(x);
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

//test
count_pairs(pair(1,pair(2, pair(3, 4))));

const p1 = pair(null, null);
const p2 = pair(p1, p1);
const p3 = pair(p2, p2);
count_pairs(p3);