//Q2
function zip_list_of_stream(ls) {
    return pair(head(head(ls)), () =>
            zip_list_of_stream(append(tail(ls), list(stream_tail(head(ls))))));
}
//test
const st_1 = pair(1, () => st_1);
const st_2 = pair(2, () => st_2);
const st_3 = pair(3, () => st_3);
eval_stream(zip_list_of_stream(list(st_1, st_2,st_3)), 1);

//Q3
function add_stream(s1, s2) {
    if(is_null(s1)) {
        return s2;
    } else if(is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2), () => add_stream(stream_tail(s1), stream_tail(s2)));
    }
}
//test
const integers = integers_from(1);
function partial_sums(s) {
    return pair(head(s), () => add_stream(partial_sums(s), stream_tail(s)));
}
eval_stream(partial_sums(integers), 5);