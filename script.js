const marquee=document.getElementById("marquee");
marquee.addEventListener("mouseenter",()=>{
    marquee.stop()
})
marquee.addEventListener("mouseleave",()=>{
    marquee.start();
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }