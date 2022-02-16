const numbers=[10,5,4,23,30,45]

const bubbleSort=(array)=>{
    for (let i=0; i<=array.length; i++){
        for (let j=0; j<array.length -i -1; j++){
            if(array[j] > array[j+1]){
                const temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }
    }
    console.log('sorted array : ',array);
    console.log(`the numbers are ${array}`);
}

bubbleSort(numbers)
