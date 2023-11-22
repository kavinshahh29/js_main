let num=document.querySelector('#number');
let count=0;
setInterval(()=>{
    if(count==80)
    {
        clearInterval();
    }
    else
    {
        count+=1;
        num.innerHTML=count+"%";
    }
},18);