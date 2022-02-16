
console.log('OBJECT DESTRUCTURING');

const person ={
    firstName:"Nisarga",
    lastName:"Murthy",
    age:20,
    hobbies:['cooking','singing'],
    address:{
        state:'karnataka',
        pin:571401,
        city:'Mandya'
    }
}

const {firstName,lastName}=person
const {hobbies, address:{state,pin,city}}=person

console.log('firstName :',firstName);
console.log('lastName :',lastName);
console.log('hobbies :',hobbies);
console.log('state :',state);
console.log('pin :',pin);

console.log('----------------------------------------------');



//======================  ARRAY DESTRUCTURING ============================================
console.log('ARRAY DESTRUCTURING');

const fruits=['apple','orange','banana','cherry']
const [fruit1,fruit2]=fruits    
console.log('fruit1 :',fruit1);
console.log('fruit2 :',fruit2);

const [fruits4,fruits5, ,fruits6]=fruits

console.log('fruits1 :',fruits4); 
console.log('fruits2 :',fruits5); 
console.log('fruits3 :',fruits6); 
