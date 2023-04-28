GitHubCalendar(".react-activity-calendar", "alka1520", { responsive: true });

let resumes =  document.getElementsByClassName('resume');
for(let i = 0; i < resumes.length; i++) {
    resumes[i].addEventListener('click', function() {
      var driveLink = 'https://drive.google.com/file/d/1vzgQjswgq6bFKiQ0qHtN8ANaTOGsVmjK/view?usp=share_link';
      var pdfLink = 'Alka-Singh-Resume.pdf';
      
      window.open(driveLink, '_blank');
    
      var element = document.createElement('a');
      element.setAttribute('href', pdfLink);
      element.setAttribute('download', 'Alka-Singh-Resume.pdf');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
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
        let revealpoint = 160;
        
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


// mediaquery nav-menu first size javacript ///

const ham = document.querySelector(".ham");
const title = document.querySelector(".title");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  title.classList.toggle("active");
} )

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  ham.classList.remove("active");
  title.classList.remove("active");
}));







