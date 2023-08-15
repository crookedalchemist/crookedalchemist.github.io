console.log("hello world");

document.getElementById("downloadButton").addEventListener("click", function(){
    let fileUrl = "downloads/Lentherick,-Giovani-Losper.pdf";

    let anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "LGLosper_CV.pdf";
    anchor.click();
    anchor.remove();
})

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    toggleButton.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
});