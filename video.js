 // disable rightclick
 document.addEventListener("contextmenu", (e)=>e.preventDefault());

// Disable other keyboard shortcuts
 document.addEventListener("keydown",(e)=>{
    if(e.key == "F12")e.preventDefault();
    if(e.ctrlKey && e.shiftKey && e.key == "I")e.preventDefault();
    if(e.ctrlKey && e.key == "u")e.preventDefault();
 })

// Get the video element inside the iframe
const videoElement = document.querySelector('.video-container iframe')?.contentDocument?.querySelector('video');

if (videoElement) {
  videoElement.addEventListener('dblclick', (e) => {
    e.preventDefault();
  });
}