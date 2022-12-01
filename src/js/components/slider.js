var slider = document.querySelector('.main-carousel');

if (slider) {
    var flkty = new Flickity( slider, {
        // options
        autoplay: 3000,
        // pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        fade: true,
        // pageDots: false
    });
}