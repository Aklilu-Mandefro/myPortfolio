export const anchorSscroll = () => {
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        event.preventDefault();

        var target = document.querySelector(link.getAttribute('href'));
        var offset = 90;
  
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
      });
    });
};

export const accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion-menu");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};