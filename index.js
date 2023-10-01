let input=document.getElementById('inputBox');
input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter")
    { 
        addtask(input.value)
        input.value=""
    }
})
// let list=document.querySelector('#list');
// let addtask=(text)=>{
//     let l=document.createElement("li");
//     l.innerHTML=text;
//     const removeButton = document.createElement('button');
//     removeButton.style.borderRadius='25px';
//     removeButton.style.background='rgba(48, 93, 134, 0.814)';
//     removeButton.style.border='rgba(48, 93, 134, 0.814)';
//     removeButton.textContent = 'x';
//     removeButton.style.marginLeft='20px';
//     removeButton.addEventListener('click', () => {
//         l.remove();
//     });
//     l.addEventListener("click",()=>{
//          l.classList.toggle('done');
//     })

//     list.appendChild(l);
// }



let list = document.querySelector('#list');

let addmsg = (message) => {
    let toastBox = document.querySelector('.toastBox');
    let tst = document.createElement('div');
    tst.classList.add('tst');
    tst.innerHTML = message;
    toastBox.appendChild(tst);
    setTimeout(() => {
        tst.remove();
    }, 2500);
}
let v;
let addtask = (text) => {
    if(text==='')
    {
        addmsg("Please enter a task");
        return;
    }
    else
    {
        let l = document.createElement("li");
        l.innerHTML = `${text}<i></i>`;
        l.classList.add('unmarked');
        l.addEventListener("click", () => {
            if(l.classList.contains('unmarked'))
            {
                l.classList.remove('unmarked');
                l.classList.toggle('done');
                addmsg("Task completed");
                
            }
            else
            {
                l.classList.add('unmarked');
                l.classList.toggle('done');
                addmsg("Task incompleted");
            }
        });
        v=l.querySelector('i');
        l.querySelector('i').addEventListener("click", (event) => {
            event.stopPropagation(); 
            addmsg("Task Deleted");
            l.remove();
        });

        list.appendChild(l);
        addmsg("Task added");
   }
}



//Theme 

let t=document.querySelector('.theme');
let body=document.body;
let b=document.querySelector('.box');
let h2=document.querySelector('.h');
t.addEventListener("click",()=>{
    t.classList.toggle('change');
    if(t.classList.contains('change'))
    {
        v.style.backgroundColor='grey';
        body.style.backgroundColor='grey';
        b.style.backgroundColor='grey';
        b.style.boxShadow='1px 1px 10px black';
        h2.style.color='black';
    }
    else
    {
        v.style.backgroundColor='';
        body.style.backgroundColor='';
        b.style.backgroundColor='';
        b.style.boxShadow='';
        h2.style.color='';
    }
})




// function saveData() {
//     localStorage.setItem("data", list.innerHTML);
// }

// function showtask()
// {
//     list.innerHTML=localStorage.getItem("data");
// }
// showtask();



// let arr=[];
// function saveData(text) {
//     arr.push(text);
//     localStorage.setItem("data", arr);
// }
// function showtask()
// {
//     let lst=localStorage.getItem("data");
//     alert(lst);
//     if(lst!=null)
//     {


// const itemList = lst.split(',');

// console.log(itemList); // Output: ["item1", "item2", "item3", "item4"]
//         itemList.forEach(data=>{
//             addtask(data);
//         })
       
//     }
// }    

// showtask();


//search