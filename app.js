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
window.addEventListener('load',function () {
   document.querySelector('.preloader').style.display = 'none'
})
const toUp = document.querySelector('.top')
const hero = document.querySelector('.hero')
const nav = document.querySelector("header")
window.addEventListener('scroll', function () {
   const heightNav = nav.getBoundingClientRect().height
   const scrollHeight = window.pageYOffset
   const heroHeight = hero.getBoundingClientRect().height
   console.log(heroHeight)
   // if(scrollHeight > heightNav){
   //    nav.classList.add('scroll-nav')
   // }
   // else{
   //    nav.classList.remove('scroll-nav')
   // }
   if(scrollHeight > 100){
      toUp.classList.add('show')
   }
   else{
      toUp.classList.remove('show')
   }
})

const navlinks = document.querySelectorAll(".nav-btns ul li a")

navlinks.forEach(function(navlink) {
   navlink.addEventListener("click", function (e) {
      if(window.w)
      //prevent default
      e.preventDefault()
      //navigate to specific
      const id = e.currentTarget.getAttribute('href').slice(1)
      const element = document.getElementById(id)
      let position = element.offsetTop;
      window.scrollTo(
         {
            left: 0,
            top: position

         }
      )
   })
})