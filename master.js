//Vytvoření paralaxu na landing page
new Rellax('.landing-bg', {
    speed: 2,
    vertical: true,
});

//A to samý na stránce s otevírací dobou
new Rellax('.opening-background', {
    speed: 2,
    center: false,
    vertical: true
});

//Když uživatel klikne, přesune ho to postupně dolů místo náhlého skoku
document.querySelectorAll("nav > a, #contact-btn").forEach(function(link, index) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var selector = this.getAttribute("href");
        var position = document.querySelector(selector).getBoundingClientRect();

        window.scrollTo({
          top: position.top,
          behavior: 'smooth'
        });
    })
});
