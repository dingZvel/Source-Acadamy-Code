/*// Q1
let tt = 3;
function make_withdraw(balance, psd) {
    function withdraw(amount, ps) {
        if (tt <= 0) {
            return "Account disabled";
        }
        else {
            if (ps === psd) {
                tt = 3;
                if (balance >= amount) {
                    balance = balance - amount;
                    return balance;
                } else {
                    return "Insufficient funds";
                }
            } else {
                tt = tt - 1;
                return "Wrong password; no withdraw";
            }
        }
    }
    return withdraw;
}
const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns 70
acc(10, "sesame"); // returns "Wrong password; no withdraw"
acc(15, "canola"); // returns "Wrong password; no withdraw"
acc(25, "olive"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns "Account disabled"
acc(30, "his_passcode"); // returns "Account disabled"
*/

/*//Q2
let commission = 25; // my commission in dollars
// return a calculator for total price
// total price = (commission + cost) * (1 + tax_rate)
function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}
const calc = make_price_calculator(0.07);
commission = 125;
calc(75);
*/

//Q3
function curry(f) {
    return x => y => f(x, y);
}
(curry(math_pow))(3)(4);