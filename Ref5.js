// Q1
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
function flatten_list(lst) {
    return accumulate(append, null, lst);
    /*return is_null(tail(lst)) 
          ? accumulate(pair, null, head(lst))
          : append(head(lst), flatten_list(tail(lst)));*/
}
flatten_list(LoL);

//Q2
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
function tree_sum(tr) {
    return is_null(tr)
           ? 0
           : ( is_number(head(tr))
              ? head(tr)
              : tree_sum(head(tr)) )
             + tree_sum(tail(tr));
}
tree_sum(my_tree);

//Q3
function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, y) =>
        is_list(x)
        ? op(accumulate_tree(f, op, initial, x), y)
        : op(f(x), y)
    , initial, tree);
}
function _tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}
function _count_data_items(tree) {
    return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}
_tree_sum(my_tree);
_count_data_items(my_tree);