/* https://kulturbanause.de/blog/elemente-mit-jquery-auf-und-zufahren-lassen-slide-toggle-und-parallel-das-icon-austauschen/ */

(function ($) {
  const accordionHeaders = document.querySelectorAll('.accordion-button');
  Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling;
    target.hidden = true;
    accordionHeader.onclick = () => {

      var pos = $(accordionHeader).offset().top;// get current position of div being opened

      let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
      for (i = 0; i < accordionHeaders.length; i++) {
        accordionHeaders[i].setAttribute('aria-expanded', false);
        accordionHeaders[i].parentElement.nextElementSibling.hidden = true;
      }
      accordionHeader.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
      if (!expanded) {
        var scrollOffset = 20;
        // retain position of clicked element relative to the browser window:
        // https://stackoverflow.com/a/18338553
        var newPos = $(accordionHeader).offset().top;
        delta = newPos - pos;
        if (delta < -100) {
          scrollOffset = $( "#header" ).height() + 20;
          $('html, body').animate({
            scrollTop: $(accordionHeader).offset().top - scrollOffset
          },0);
        };
      }
    }
  })

})(jQuery);
