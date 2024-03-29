const logos=document.querySelectorAll(".logo")

logos.forEach(logo=>{
logo.addEventListener("click",()=>{
    const liked=logo.querySelector(".liked")
    const unliked=logo.querySelector(".unliked")
    liked.classList.toggle("toggle");
    unliked.classList.toggle("toggle");
})
});