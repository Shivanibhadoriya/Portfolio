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

document.querySelector(".navbar-toggler").addEventListener("click",function(){
    console.log("I am clicked");
    document.querySelector(".collapse").style.display="block !important";
});