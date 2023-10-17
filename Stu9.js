function change(x, new_value) {
    x = new_value;
}
let x = 0;
change(x, 1);

//Q2:
function d_filter(pred, xs) {
    if (is_null(xs)) {
        return xs;
    }
    if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    } else {
        xs = d_filter(pred, tail(xs));
        return xs;
    }
}
let L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
L = d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; // What is L now?

//Q3:
let a = 10;
function foo(x) {
    let b = 0;
    function goo(x) {
        let a = 30;
        if (x <= 2) {
            a = a + x;
            b = b + x;
            // Breakpoint #4
        } else {
            // Breakpoint #3
            goo(x - 1);
        }
    }
    a = a + x;
    b = b + x;
    // Breakpoint #2
    goo(3);
}
// Breakpoint #1
foo(1);
// Breakpoint #5*/