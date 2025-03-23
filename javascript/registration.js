var log = document.getElementById('shebs')
function shebs1(){
log.classList.add('shebs2')
log.classList.remove('shebs1')
// ------------------------------
log.classList.add('an1')
log.classList.remove('an2')
}
function shebs2(){
log.classList.add('shebs1')
log.classList.remove('shebs2')
// ----------------------------
log.classList.add('an2')
log.classList.remove('an1')
}





// ---------------------------------------
var la1 = document.getElementById('la1')
function lab1(){
    la1.classList.add('lab2')
    la1.classList.remove('lab1')
}
function input0(){
  var input0 = document.getElementsByClassName('inp')[0].value
  if (input0.length == 0){
    la1.classList.add('lab1')
    la1.classList.remove('lab2')
  }
  
}
// -----------------------------------------
var la2 = document.getElementById('la2')
function lab2(){
la2.classList.add('lab2')
la2.classList.remove('lab1')
}
function input1(){
  var input1 = document.getElementsByClassName('inp')[1].value
  if (input1.length == 0){
    la2.classList.add('lab1')
    la2.classList.remove('lab2')
  }
  
}
// -----------------------------
var la3 = document.getElementById('la3')
function lab3(){
la3.classList.add('lab2')
la3.classList.remove('lab1')
}
function input2(){
  var input2 = document.getElementsByClassName('inp')[2].value
  if (input2.length == 0){
    la3.classList.add('lab1')
    la3.classList.remove('lab2')
  }
  
}
// -----------------------------
var la4 = document.getElementById('la4')
function lab4(){
la4.classList.add('lab2')
la4.classList.remove('lab1')
}
function input3(){
  var input3 = document.getElementsByClassName('inp')[3].value
  if (input3.length == 0){
    la4.classList.add('lab1')
    la4.classList.remove('lab2')
  }
  
}
// -----------------------------
var la5 = document.getElementById('la5')
function lab5(){
la5.classList.add('lab2')
la5.classList.remove('lab1')
}
function input4(){
  var input4 = document.getElementsByClassName('inp')[4].value
  if (input4.length == 0){
    la5.classList.add('lab1')
    la5.classList.remove('lab2')
  }
  
}
// -----------------------------
var la6 = document.getElementById('la6')
function lab6(){
la6.classList.add('lab2')
la6.classList.remove('lab1')
}
function input5(){
  var input5 = document.getElementsByClassName('inp')[5].value
  if (input5.length == 0){
    la6.classList.add('lab1')
    la6.classList.remove('lab2')
  }
  
}
// -----------------------------
var la7 = document.getElementById('la7')
function lab7(){
la7.classList.add('lab2')
la7.classList.remove('lab1')
}
function input6(){
  var input6 = document.getElementsByClassName('inp')[6].value
  if (input6.length == 0){
    la7.classList.add('lab1')
    la7.classList.remove('lab2')
  }
  
}
// -----------------------------
var la8 = document.getElementById('la8')
function lab8(){
la8.classList.add('lab2')
la8.classList.remove('lab1')
}
function input7(){
  var input7 = document.getElementsByClassName('inp')[7].value
  if (input7.length == 0){
    la8.classList.add('lab1')
    la8.classList.remove('lab2')
  }
  
}
// -----------------------------




function againPs() {
  let pas1 = document.getElementById('pass').value;
  let pas2 = document.getElementById('pass1').value;
  let fom = document.getElementById('fom');
  let ap = document.getElementById('agnPas');
  fom.onsubmit = function (su) {
      if (pas1 == pas2 && pas1.length > 0) {
        ap.classList.add('dl')
      }
      else {
          su.preventDefault();
          ap.classList.remove('dl')
      }
  }
}