let navOne = document.getElementById('navOne')
let navList = document.getElementById('navList')
navOne.onclick=function list(){
    navList.classList.toggle('lestsho')
}
// -----------------------------
let btn = document.getElementById('btn')
window.onscroll = function (){
  if(window.scrollY >= 250){
    btn.style.display='block'
  }
  else{
    btn.style.display='none'
  }
  btn.onclick=function (){
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
}