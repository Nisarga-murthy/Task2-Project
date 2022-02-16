
const fibonacinumber=function(n){
    let a=0
    let b=1
    let fibonaci=" "
    for (var i=0;i<n;i++){
        fibonaci+=String(a)
        fibonaci+=" "
        let c=a+b
        a=b
        b=c
    }
    console.log(fibonaci);
}
fibonacinumber(6)