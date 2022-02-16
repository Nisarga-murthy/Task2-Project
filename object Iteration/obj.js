
const student={
    name:'john',
    rollNo:26,
    marks:'500'
}

console.log('---without for loop------');

console.log('Name :',student.name);
console.log('Roll No. :',student.rollNo);
console.log('Marks :',student.marks);

console.log('-------  for in  --------');

for (let i in student){
    console.log(`${i} : ${student[i]}`);
}

//----------------------------------------------------------
const students1=[
    {
        name:'rahul',
        jerseyNo:18,
        score:963
    },
    {
        name:'Ajay',
        rollNo:17,
        marks:981
    },
    {
        name:'Sheela',
        rollNo:17,
        marks:675
    }
]

console.log('-------  for of > in  --------');

for (let i of students1){
    for (let key in i){
        console.log(`${key} : ${i[key]}`);
    }
    console.log(' ');
}

console.log('-------  for in > in  --------');

for (let i in students1){
    for (let key in students1[i]){
        console.log(`${key} : ${students1[i][key]}`);
    }
    console.log(' ');
}
