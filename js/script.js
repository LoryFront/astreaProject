/*section for scripts*/
let isAccordionOpen = false;
function activeElement(idAttivo){
    var sezioni = document.getElementsByClassName('section');
    const attiva = document.getElementById(idAttivo);
    for(var i = 0; i < sezioni.length; i++){
        sezioni.classList.remove("active");
    }
    attiva.classList.add("active");
}
function runOnScroll() {
    let head = document.getElementsByTagName("header")[0];
    if (window.scrollY >= 100) {
        head.style.backgroundColor = "#0E0C1C";
    } else {
        head.style.backgroundColor = "transparent";
    }
}
window.addEventListener("scroll", runOnScroll);

function closeMenu() {
    let menuEl = document.getElementsByClassName("show")[0];
    menuEl.classList.remove("show");
}
function accordionOpen() {
    let accordionEl = document.getElementById("footer-description");
    let icon = document.getElementsByClassName("icon-chev")[0];
    if(window.screen.width <= 992) {
        isAccordionOpen = !isAccordionOpen;
        if(isAccordionOpen){
            accordionEl.style.display = "block";
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-up");
        } else {
            accordionEl.style.display = "none";
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");
        }
    } else {
        accordionEl.style.display = "block";
    }

}
$("#form-newsletter").submit(function(e){
    if(e.target.checkValidity()){
        $('#modalNewsletter').modal('show');
        e.preventDefault();
    }
    return false;
});

$("#form-prenotazione").submit(function(e){
    if(e.target.checkValidity()){
        $('#modalSuccess').modal('show');
        e.preventDefault();
    }
    return false;
});

const test = document.getElementById('test')
window.addEventListener('resize', function() {
    console.log(test.currentSrc)
})