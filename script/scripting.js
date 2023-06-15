// Init global variables
var e = ["", ""]
var nowIdx = 0;
var isDot = false;
var op = "";
var ans = 0;
// Function to reset the state of the calculator
function reset() {
    document.getElementById("screendigit").innerHTML = "0";
    e[0] = "";
    e[1] = "";
    nowIdx = 0;
    isDot = false;
    op = "";
    ans = "";
}
// Function to handle button clicks
function p_b_num(n) {
    // if (nowIdx == 0) {
    //     e[0] += "0";
    // }
    document.getElementById("screendigit").innerHTML = n;
}
function p_b_dot() {
    document.getElementById("screendigit").innerHTML = ".";
}
function p_b_eq() {
    document.getElementById("screendigit").innerHTML = "=";
}
function p_b_add() {
    document.getElementById("screendigit").innerHTML = "+";
}
function p_b_sub() {
    document.getElementById("screendigit").innerHTML = "-";
}
function p_b_div() {
    document.getElementById("screendigit").innerHTML = "/";
}
function p_b_mul() {
    document.getElementById("screendigit").innerHTML = "*";
}
