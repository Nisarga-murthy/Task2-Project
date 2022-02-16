
const isPrime=(num)=>{
    let count=0
    for(let i=0; i<=num; i++){
        if (num %i === 0){
            count=count+1
        }
    }
    if (count === 2){
        console.log(`${num} is a Prime number`);
    }else{
        console.log(`${num} is Not a Prime number`);
    }
}   

isPrime(3)
isPrime(5)
isPrime(7)
isPrime(10)