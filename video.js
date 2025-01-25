 // disable rightclick
 document.addEventListener("contextmenu", (e)=>e.preventDefault());

 document.addEventListener("keydown",(e)=>{
    if(e.key == "F12")e.preventDefault();
    if(e.ctrlKey && e.shiftKey && e.key == "I")e.preventDefault();
    if(e.ctrlKey && e.key == "u")e.preventDefault();
 })