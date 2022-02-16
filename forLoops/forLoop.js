
console.log('----- for loop --------');

const actors=['Yash','Hrithik','Alluarjun','sudeep']
const numbers=[10,20,30,40,50]

for (let i=0; i<actors.length; i++){
    console.log(actors[i]);
}

let updatedNumbers=[]
for (let i=0; i<numbers.length; i++){
    const newNumber=numbers[i]+100
    updatedNumbers.push(newNumber)
}
console.log('updated numbers array :', updatedNumbers);

//======================================================================
console.log('------ for Each ----------');

players.forEach((element)=>{
    console.log(element);
})

let updatedNumbers1=[]
numbers.forEach((element)=>{
    updatedNumbers1.push(element+100)
})
console.log('updatedNumbers1 :',updatedNumbers1);

//======================================================================
console.log('------ for of ----------');

for (let i of players){
    console.log(i);
}

const updatedNumbers2=[]
for (let i of numbers){
    updatedNumbers2.push(i+100)
}

console.log('updatedNumbers2 :',updatedNumbers2);
//======================================================================
console.log('------ for in ----------');

const pets=[{
    name:'jhony',
    color:'black',
    price:10,000,
    breed:'pomorian'
},
{
    name:'neenu',
    color:'white',
    price:25000,
    breed:'golden retriver'
},
{
    name:'jimmy',
    color:'brown',
    price:12000,
    breed:'german '
}
]

for (var i=0; i<pets.length;i++) {
    console.log("index number:",i);
    console.log("index value :",pets[i]);
    for (var k in pets[i]){
        console.log(`${k} : ${pets[i][k]}`);
    }
}

console.log("------------ for in ----------");
for (var object of pets){
    for (var key in object){
        console.log(`${key} : ${object[key]}`);
    }
    console.log('----');
}