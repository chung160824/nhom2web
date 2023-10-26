$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  });
});

const menubar = document.querySelector('header .header-top .menu .tour')
menubar.addEventListener("click",function() {
document.querySelector('header .header-between').classList.toggle('active')
})

const menubar_2 = document.querySelector('header .header-top .menu .service')
menubar_2.addEventListener("click",function() {
document.querySelector('header .header-between_2').classList.toggle('active')
})