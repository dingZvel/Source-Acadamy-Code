function stream_pairs(s) {
    return is_null(s)
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}
const ints = enum_stream(1, 5);
eval_stream(stream_pairs(ints), 10);
const integers = integers_from(1);
// const s2 = stream_pairs(integers); //error: infinite
// eval_stream(s2, 10);
function stream_append_pickle(xs, ys) {
    return is_null(xs)
        ? ys()
        : pair(head(xs),
            () => stream_append_pickle(stream_tail(xs),
                                        ys));
}
function stream_pairs2(s) {
    return is_null(s)
        ? null
        : stream_append_pickle(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            () => stream_pairs2(stream_tail(s)));
}
const s2 = stream_pairs2(integers);
eval_stream(s2, 10);

function interleave_stream_append(s1, s2) {
    return is_null(s1)
           ? s2
           : pair(head(s1), () => interleave_stream_append(s2, stream_tail(s1)));
}
