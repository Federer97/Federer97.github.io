var hammertimeA = new Hammer(document.getElementById('AWrapper'));
hammertimeA.on('swipeleft', function(ev) {
	plusSlides(-1, 0);
}); 
hammertimeA.on('swiperight', function(ev) {
	plusSlides(1, 0);
});

var hammertimeB = new Hammer(document.getElementById('BWrapper'));
hammertimeB.on('swipeleft', function(ev) {
	plusSlides(-1, 1);
}); 
hammertimeB.on('swiperight', function(ev) {
	plusSlides(1, 1);
});

var hammertimeC = new Hammer(document.getElementById('CWrapper'));
hammertimeC.on('swipeleft', function(ev) {
	plusSlides(-1, 2);
}); 
hammertimeC.on('swiperight', function(ev) {
	plusSlides(1, 2);
});