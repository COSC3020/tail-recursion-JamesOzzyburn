function fib(n) {return fibTailRec(n,1,0)}

function fibTailRec(n, newVal, oldVal) {
    if(n == 0) return oldVal;
    return fibTailRec(n-1, newVal + oldVal, newVal);
}