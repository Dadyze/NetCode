const logo = document.getElementById("logo");
const navLinks = document.getElementById("navlinks");

logo.addEventListener('click',()=>{
  navLinks.classList.toggle("open"); 
});
