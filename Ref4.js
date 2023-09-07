//2.(a)
list(1, 2, 3);

//(b)
pair(1, pair(2, 3));

//(c)
list(list(1, 2), list(3, 4), list(5, 6));


//3.(a)
//const lst = list(7, 6, 5, 4, 3, 2, 1);
//head(tail(tail(tail(lst))));

//(b)
//const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
//head(tail(tail(head(tail(lst)))));

//(c)
const lst = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
head(head(head(tail(tail(head(head(head(tail(lst)))))))));