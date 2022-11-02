GitHubCalendar(".calendar", "alka1520", { responsive: true });


// function([string1, string2],target id,[color1,color2])    
consoleText(['A Java Back-end Developer'], 'text',['lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


window.addEventListener('scroll',function(){
  reveal('.right');
  reveal('.left')
});

function reveal(x){
    let reveals = document.querySelectorAll(x);

    for (let i = 0; i < reveals.length; i++) {

        let windowwidth = window.innerWidth;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 600;
        
        if(revealtop < windowwidth - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll',reveal2);

function reveal2(){
    let reveals = document.querySelectorAll('.slideup');

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 120;
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('scrollup');
        }else{
            reveals[i].classList.remove('scrollup');
        }
    }
}


window.addEventListener('scroll',()=>{
  let x = document.querySelector('.iconsticky');
  x.classList.toggle('arrow',window.scrollY > 500);
})


// mediaquery navbar first size javacript ///

const ham = document.querySelector(".ham");
const title = document.querySelector(".title");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  title.classList.toggle("active");
} )

document.querySelectorAll(".remove-active").forEach(n => n.addEventListener("click", () => {
  ham.classList.remove("active");
  title.classList.remove("active");
}));







