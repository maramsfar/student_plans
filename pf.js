function login() {
    
    window.location.replace("file:///C:/Users/LENOVO/Desktop/code/login.html#")
  }
  function signin() {
    
    window.location.replace("file:///C:/Users/LENOVO/Desktop/code/signin.html")
  }
  
  function timetable()
  {
    window.location.replace("file:///C:/Users/LENOVO/Desktop/code/timetable.html")
  }
  function remind()
  {
    window.location.replace("file:///C:/Users/LENOVO/Desktop/code/reminder.html")
  }
  function notif()
  {
    window.location.replace("file:///C:/Users/LENOVO/Desktop/code/notifications.html")
  }

 
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

/*
const faders = document.querySelectorAll("fadein");

const appearOptions={ threshold : 1,
  rootMargin: "0px 0px -100px 0px"
};



const appearOnScroll = new IntersectionObserver
(function(entry,appearOnScrroll){

entries.forEach(entry => {
  if (!entry.isIntersecting){
    return ; 
  }
  else 
  {
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  }

})



},appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);




})*/
/*
const faders = document.querySelectorAll(".fadein");
const sliders = document.querySelectorAll(".slidein");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});*/
  
  
  
  
  

  
  