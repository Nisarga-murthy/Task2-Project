
const getid=()=>{
    const tag=document.getElementById('root')
    const c1=Math.floor(Math.random()*1000)
    if (c1<100){
        c1=c1+100
    }
    tag.innerText=c1
}

