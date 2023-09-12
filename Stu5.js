const lst = list(7, list(6, 5, 4), 3, list(2, 1));
//const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
//const lst = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
//const lst = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

head(tail(head(tail(tail(tail(lst))))));
//head(tail(tail(tail(lst))));
//head(head(tail(head(tail(head(tail(tail(tail(lst)))))))));
//head(head(head(tail(tail(lst)))));