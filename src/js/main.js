var el = document.getElementById('myCarousel');


Hammer(el).on('swiperight', function() {
  $(el).carousel('prev');
}).on('swipeleft', function() {
  $(el).carousel('next');
})