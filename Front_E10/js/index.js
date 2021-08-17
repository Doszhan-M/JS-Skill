$(window).ready(function () {
  // шаг вниз перед загрузкой и показать прелоадер
  // $('html, body').animate({ scrollTop: $("#projects").offset().top }, 1);
  // $('html, body').animate({ scrollTop: $("#preview").offset().top }, 1);
  // jQuery('#loading').fadeOut(1000);

});


// нажатие на бургер открывает меню
$('.header__burger').click(function (event) {
  $('header, .header__burger, .header__titles').toggleClass('active');
})
// нажатие на ссылку в меню бургера закрывает меню
$('.header__moblil_close').click(function (event) {
  $('header, .header__burger, .header__titles').removeClass('active');
})


// Анимация при достижении блока в зону видимости
var windowHeight = $(window).height();
function animation() {
  $('.anim_item').each(function () {
    var self = $(this),
      height = self.offset().top + self.height();
    if ($(document).scrollTop() + windowHeight >= height) {
      self.addClass('_animation')
    }
    else {
      self.removeClass('_animation')
    }
  });
}
$(document).on('scroll', function () {
  animation();
});


// Фиксация navbar после скрола
jQuery(window).scroll(function navBar() {
  var the_top = jQuery(document).scrollTop();
  if (the_top > 500) {
    jQuery('.header').addClass('fixed');
  }
  else {
    jQuery('.header').removeClass('fixed');
  }
});


// Плавный скрол до секции
sections = ['preview', 'about', 'projects'] // список id ссылок, где нужен e.preventDefault();
sections.forEach(element => {
  $(`a[href*="#${element}"]`).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});
