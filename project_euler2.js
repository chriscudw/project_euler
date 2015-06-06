// Summing Fibonacci evens up to 4,000,000
var fiboEvens = function(input) {
var preNum = 1;
var curNum = 2;
var totSum = 2;
var nexNum;

while(curNum < input) {
    nexNum = preNum + curNum;
    if(nexNum%2===0) {
        totSum += nexNum;
    }
    preNum = curNum;
    curNum = nexNum;
}
return totSum;
};
fiboEvens(4000000);