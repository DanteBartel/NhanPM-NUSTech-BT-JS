// Init global variables
var ans = "";
var justCal = true;
var isStart = true;
var isDot = false;
var isZero = false;
// Function
function p_b_num(n) {
    if (justCal) {
        ans = n;
        justCal = false;
    } else {
        if (isZero) return;
        ans += n;
    }
    isStart = false;
    document.getElementById("screendigit").innerHTML = ans;
}
function p_b_dot() {
    if (isDot) return;
    else {
        if (justCal) {
            ans = "0";
            justCal = false;
        } 
        ans += ".";
        isDot = true;
    }    
    document.getElementById("screendigit").innerHTML = ans;
}
function p_b_eq() {
    try {ans = eval(ans);}
    catch (e) {ans = "0";}
    if (ans == undefined) ans = "0";
    justCal = true;
    isDot = false;
    document.getElementById("screendigit").innerHTML = ans;
}
function p_b_op(op) {
    if (isStart) return;
    else {
        if (justCal) justCal = false;
        ans += op;
    }    
    isDot = false;
    document.getElementById("screendigit").innerHTML = ans;
}
