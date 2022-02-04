/* Data  */
let addcafe = 400
let addef = 100
let addpe = 100
let addcol = 10

function animate(id1, id2, start, end, duration) {
  if (start === end) return;
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj1 = document.getElementById(id1);
  const obj2 = document.getElementById(id2);
  const timer = setInterval(function () {
    current += increment;
    obj1.innerHTML = current;
    obj2.style.strokeDashoffset = `${440 - (440 * current) / 1000}`
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
  
}


animate("percent1", "circle1", 0, addef, 1000)
animate("percent2", "circle2", 0, addpe, 1000)
animate("percent3", "circle3", 0, addcol, 1000)
animate("percent4", "circle4", 0, addcafe, 1000)

function EF() {
  return addef += 1, att('ef')
   
}

function PE() {
  return addpe += 1, att('pe')
   
}

function COLAB() {
  return addcol += 1, att('col')
   
}
function cafe() {
  return addcafe += 1, att('cafe')
   
}

function att(b) {
  function animate(id1, id2, start, end, duration) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj1 = document.getElementById(id1);
    const obj2 = document.getElementById(id2);
    const timer = setInterval(function () {
      current += increment;
      obj1.innerHTML = current;
      obj2.style.strokeDashoffset = `${440 - (440 * current) / 1000}`
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
    
  }
  
   if (b == 'ef'){
    animate("percent1", "circle1", 0, addef, 1000)
   } else if (b=='pe'){
    animate("percent2", "circle2", 0, addpe, 1000)}
    else if (b=='col'){
      animate("percent3", "circle3", 0, addcol, 1000)
    } else if (b=='cafe') {
      animate("percent4", "circle4", 0, addcafe, 1000)
    } else {
      animate("percent1", "circle1", 0, addef, 1000)
      animate("percent2", "circle2", 0, addpe, 1000)
      animate("percent3", "circle3", 0, addcol, 1000)
      animate("percent4", "circle4", 0, addcafe, 1000)
    }

 

}

/* Conheça nossos projetos */

var allbtn =document.querySelector('#all-btn')
var devbtn =document.querySelector('#dev-btn')
var dsgbtn =document.querySelector('#dsg-btn')
var seobtn =document.querySelector('#seo-btn')
var imgdev =document.querySelector('.dev')
var imgdsg =document.querySelector('.dsg')
var imgseo =document.querySelector('.seo')
var imgdev1 =document.querySelector('.dev1')
var imgdsg1 =document.querySelector('.dsg1')
var imgseo1 =document.querySelector('.seo1')

allbtn.addEventListener('click', function(){

      allbtn.classList.add('active')
      devbtn.classList.remove('active')
      dsgbtn.classList.remove('active')
      seobtn.classList.remove('active')
     
     if(allbtn.classList.contains("active")){
      imgdev.style.display = 'block',
      imgdsg.style.display = 'block',
      imgseo.style.display = 'block',
      imgdev1.style.display = 'block',
      imgdsg1.style.display = 'block',
      imgseo1.style.display = 'block'
      }});

devbtn.addEventListener('click',function(){

  allbtn.classList.remove('active')
  devbtn.classList.add('active')
  dsgbtn.classList.remove('active')
  seobtn.classList.remove('active')
      
      if(devbtn.classList.contains("active") ) {
          imgdsg.style.display = 'none'
          imgdsg1.style.display = 'none'
          imgseo.style.display = 'none'
          imgseo1.style.display = 'none'
          imgdev.style.display = 'block'
          imgdev1.style.display = 'block'
      }});

dsgbtn.addEventListener('click',function(){

  allbtn.classList.remove('active')
  devbtn.classList.remove('active')
  dsgbtn.classList.add('active')
  seobtn.classList.remove('active')
      
  if(dsgbtn.classList.contains("active") ) {
      imgdsg.style.display = 'block'
      imgdsg1.style.display = 'block'
      imgseo.style.display = 'none'
      imgseo1.style.display = 'none'
      imgdev.style.display = 'none'
      imgdev1.style.display = 'none'
      }});

seobtn.addEventListener('click',function(){

  allbtn.classList.remove('active')
  devbtn.classList.remove('active')
  dsgbtn.classList.remove('active')
  seobtn.classList.add('active')
      
  if(seobtn.classList.contains("active") ) {
      imgdsg.style.display = 'none'
      imgdsg1.style.display = 'none'
      imgseo.style.display = 'block'
      imgseo1.style.display = 'block'
      imgdev.style.display = 'none'
      imgdev1.style.display = 'none'
      }});

