
$(function() {
// Preloader
$(window).on("load", function (event) {
  $(".preLoader").delay(300).fadeOut(300);
});

//===== Scroll Sticky Menu =====//
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

var cururl = window.location.pathname;
var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
var hash = window.location.hash.substr(1);
if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
    {
    //$("nav .navbar-nav > li:first-child").addClass("active");
    } else {
        $(".header__menu-list li").each(function()
    {
        $(this).removeClass("active");
    });
    if(hash != "")
        $(".header__menu-list li a[href*='"+hash+"']").parents("li").addClass("active");
    else
    $(".header__menu-list li a[href*='"+curpage+"']").parents("li").addClass("active");
}

//===== Click Toggle Menu =====//
let body = document.querySelector("body")
let menuList = document.querySelector(".header__menu-list")
let logo = document.querySelector(".header__menu-logo")
let overlay = document.querySelector(".overlay-header")
let button = document.querySelector(".header__menu-button")
let closeButton = document.querySelector(".close-overlay")
let iconSearch = document.querySelector(".icon__search")
let header = document.querySelector(".header")
button.addEventListener("click", () => {
  body.classList.add('overflow-hidden')
  menuList.classList.add('show')
  overlay.classList.add('active')
  header.classList.add('absolute')
})
closeButton.addEventListener("click", () => {
  body.classList.remove('overflow-hidden')
  menuList.classList.remove('show')
  overlay.classList.remove('active')
  header.classList.remove('absolute')
})
overlay.addEventListener("click", () => {
  body.classList.remove('overflow-hidden')
  menuList.classList.remove('show')
  overlay.classList.remove('active')
  header.classList.remove('absolute')
})

//===== WOW JS =====//
new WOW().init();

//===== Back to Top =====//
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
// Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400
  );
});

$(document).ready(function(){
  $("#check_address").click(function(){
    $("#text").slideToggle("");
    $("#select_form").style.display = 'none'
  });
});


});



