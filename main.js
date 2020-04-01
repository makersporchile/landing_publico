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

document.querySelectorAll('.counter').forEach(e => counter(parseInt(e.getAttribute('data-count')) + 1, i => e.innerHTML = i, 0.001));

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
    var burger = document.querySelector('#burger');
    var donar = document.querySelector('#donar');
    window.addEventListener('scroll', function (event) {
        let pos = e.offsetTop - e.scrollTop + e.clientTop;
        if (100 < window.pageYOffset) {
            e.classList.add('fix');
            logo.src = "./assets/logos/new/logo.png";
            burger.classList.add('white-color');
            burger.classList.remove('black-color');
            donar.classList.remove('btn-secondary-1');
            donar.classList.add('btn-secondary-2');
        } else {
            e.classList.remove('fix');
            logo.src = "./assets/logos/new/logo_black_text.png";
            burger.classList.add('black-color');
            burger.classList.remove('white-color');
            donar.classList.remove('btn-secondary-2');
            donar.classList.add('btn-secondary-1');
        }
    })
})();