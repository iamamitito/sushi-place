const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", showLinks);

function showLinks() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        }
}