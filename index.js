console.log("hello world");

document.getElementById("downloadButton").addEventListener("click", function(){
    let fileUrl = "downloads/Lentherick,-Giovani-Losper.pdf";

    let anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "LGLosper_CV.pdf";
    anchor.click();
    anchor.remove();
})

function toggleMenu() {
    var navbarNav = document.getElementById("navbarNav");
    var navbarToggle = document.querySelector(".navbar-toggle");
    navbarNav.classList.toggle("active");
    navbarToggle.classList.toggle("active");
}