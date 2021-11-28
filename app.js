const links = document.querySelector(".nav-btns")
const navToggle = document.querySelector(".nav-small-screen")



navToggle.addEventListener("click", function() {
     if(links.style.display === "none"){
        links.style.display = "block"
     }
     else{
        links.style.display = "none"
     }
})

