// header toggle 

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e)=>{
  document.querySelector('body').classList.toggle('mobile-nav-active');
  menuBtn.classList.toggle('fa-xmark');
//   console.log('click');
})

// typing effect 
 let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'UI Designer!','Programmer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 200,
    loop: true,
 })

 let sections = document.querySelectorAll('section');
 let navLinks= document.querySelectorAll('nav ul li a');

 window.addEventListener('scroll',()=>{
  const scrollPos = window.scrollY + 20
  sections.forEach(section => {
    if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
          link.classList.add('active');
        }
      });
    }
  });
 });