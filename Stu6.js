//Q1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}
my_map(x => x + 1, list(1, 2, 3));

//Q2
function remove_duplicates(lst) {
    return is_null(lst)
           ? null
           : pair(head(lst),
             remove_duplicates(filter(x => x !== head(lst), tail(lst))));
}
//remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));

//Q3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = ...
        
        // Combinations that do not use the head coin
        // for the remaining amount.
        const combi_B = ...
        
        // Combinations that use the head coin.
        const combi_C = ...
        
        return append(combi_A, combi_C);
    }
}
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));