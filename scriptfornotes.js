const notesContainer=document.querySelector(".notes-container");
const btn=document.querySelector(".btn");



let notes=document.querySelectorAll(".input-box");
function getstorage()
{
    
    notesContainer.innerHTML=localStorage.getItem("notes");
}
getstorage();
function addtolocalstorage()
{
    
    localStorage.setItem("notes",notesContainer.innerHTML);
}
btn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let im=document.createElement("img");
    
    inputbox.className="input-box";   
    inputbox.setAttribute("contenteditable","true");
    // inputbox.innerHTML="Start Typing";
    im.src="delete.png";
    // inputbox.addEventListener("input",()=>{
    //     console.log("HELLO");
    //    if(inputbox.innerHTML==="Start Typing"){
    //        inputbox.innerHTML=" ";
    //     //    console.log("HEll");
    // //    }
    // })
    
    notesContainer.appendChild(inputbox).appendChild(im);
    addtolocalstorage();
});

notesContainer.addEventListener("click",function(k)
{
    if(k.target.tagName==="IMG")
    {
        k.target.parentElement.remove();
        addtolocalstorage();


    }
    else if(k.target.tagName==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function()
            {
                addtolocalstorage();
            }
            
        });


    }


    

});


document.addEventListener("keydown",event=>{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault() // prevent default feature of defualt key
    }
})