const numbers=[2,4,8,20]

const largestNumber =(array)=>{
    array.sort((a,b)=>b+a)
    console.log('largest number :',array[array.length-1]);
    console.log('2nd largest number :',array[array.length-2]);
} 

largestNumber(numbers)