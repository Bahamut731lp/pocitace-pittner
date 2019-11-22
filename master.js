let contactButton = document.querySelector("[name='contact']")
contactButton.addEventListener("click", function() {
    //location = "https://www.facebook.com/Pocitace.Pittner.Servis.PC.a.Notebooku/"
})

document.querySelectorAll("nav > a").forEach(function(link, index) {
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
