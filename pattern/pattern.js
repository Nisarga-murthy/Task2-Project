
const pattern=(row)=>{
    let string=''
    for (let i=0; i<row; i++){
        for (let j=0; j<=i;j++){
            string +='*'
        }
        string += "\n"
    }
    console.log(string);
    document.getElementById('root').innerText=string
}

pattern(7)