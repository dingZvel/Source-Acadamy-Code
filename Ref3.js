function sum(term, a, next, b) {
    return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b);
}

//Q1:3 + 1 = 4

//Q2:
function my_sum(n){
    return n <= 0 ? 0 : (n + 1) * n + my_sum(n - 1);
}
my_sum(3);

//Q3:recursive process, time&space:theta(n)

//Q4:
function my_sum_4(n){
    return sum(x => x * (x + 1), 1, x => x + 1, n);
}
my_sum_4(3);

//Q5:
function sum_iter(term, a, next, b, s){
    return a > b
    ? s
    : sum_iter(term, next(a), next, b, s + term(a));
}
function my_sum_5(n){
    return sum_iter(x => x * (x + 1), 1, x => x + 1, n, 0);
}
my_sum_5(3);

/*Q6:
(c): 4 + 2 * 4 = 12
(d): x + 2 = 5 + 2 = 7
*/