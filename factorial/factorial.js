
const factorial=(number)=>{
    let fact=1
    for(let i=1; i<=number; i++){
        fact=fact*i
    }
    console.log('factorial :',fact);
}

factorial(2)
factorial(5)