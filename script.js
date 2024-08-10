document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

function showNav(){
    console.log("i am inside the function");
    let nav = document.querySelector("#navshow");
    nav.classList.toggle("active");
}


const projects = document.querySelectorAll(".project");
projects.forEach(project =>{
  project.addEventListener('mousedown',function(){
    let images = project.querySelectorAll(".project-img");
    let i = 0; 
    let size = images.length;
    for(i=0;i<size ;i++){
        if(images[i].classList.contains("active"))
            break;
    }
    let leftButton = project.querySelector(".left");
    leftButton.addEventListener("click",function(){
        images[i].classList.remove("active");
        i = (i+size-1)%size;    
        images[i].classList.add("active");
    });

    let rightButton = project.querySelector(".right");
    rightButton.addEventListener("click",function(){
        images[i].classList.remove("active");
        i = (i+size+1)%size;    
        images[i].classList.add("active");
    });
});
  
});


document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
