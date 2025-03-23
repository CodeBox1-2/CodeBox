setTimeout(function opn(){
  window.open('../html/all_courses.html','_self','')
  clearTimeout(opn())
  },2000)