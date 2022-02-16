
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const primeArray=(array)=>{
    let prime=[]
    array.forEach((num)=>{
        let count=0
        for(let i=0; i<=num; i++){
            if (num %i === 0){
                count=count+1
            }
        }
        if (count === 2){
            prime.push(num)
        }
    })
    console.log('prime numbers : ',prime);
}

primeArray(numbers)