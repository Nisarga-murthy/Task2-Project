
const number=121121

const isPaalindrome=(number)=>{
    let num=number
    let sum=0
    while (num>0){
        let lastDigit=num%10
        sum=(sum*10)+lastDigit
        num=Math.floor(num/10)
    }
    if (sum===number){
        console.log(`${sum} === ${number}`);
        console.log('palindrome');
    }else{
        console.log('not palindrome');
    }
}

isPaalindrome(number)
