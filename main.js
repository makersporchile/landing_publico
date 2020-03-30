$('.center').slick({
    // centerMode: true,
    dots: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

document.querySelectorAll('.counter').forEach(e => counter(parseInt(e.getAttribute('data-count')) + 1, i => e.innerHTML = i, 1));

function counter(fin, cb, s = 1) {
    var index = 0;
    function it() {
        if (index < fin) {
            setTimeout(function () {
                cb(index);
                index++;
                it();
            }, s);
        }
    }
    it();
}


var self = this;
(function () {
    var e = document.querySelector('nav');
    var logo = document.querySelector('#logo');
    window.addEventListener('scroll', function (event) {
        let pos = e.offsetTop - e.scrollTop + e.clientTop;
        if (100 < window.pageYOffset) {
            e.classList.add('fix');
            logo.src = "./assets/makers_white.png";
        } else {
            e.classList.remove('fix');
            logo.src = "./assets/makersporchile.png";
        }
    })
})();