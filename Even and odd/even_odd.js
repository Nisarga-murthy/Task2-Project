const numbers=[1,2,3,4,5,6,7,8,9,10]

const evenOddSeperate=(array)=>{
    const even=[]
    const odd =[]
    array.forEach(num => {
        if (num % 2 === 0){
            even.push(num)
        }else{
            odd.push(num)
        }
    });
    console.log("even :",even);
    console.log("odd :",odd);
}

evenOddSeperate(numbers)