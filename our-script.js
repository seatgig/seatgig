var slider = tns({
    container: '.my-slider',
    items: 4,  // Show 4 slides at a time
    slideBy: 1, // Move 1 slide at a time
    autoplay: false,
    controls: false, // Hide default buttons
    nav: false,
    loop: true, // Enable infinite scrolling
    responsive: {
        1200: { items: 4 },
        992: { items: 3 },
        768: { items: 2 },
        576: { items: 1 }
    }
});

// Custom Buttons
document.getElementById('prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.getElementById('next').addEventListener('click', function () {
    slider.goTo('next');
});

// ================ auto slider 1
function initSlider(sliderClass, prevBtn, nextBtn) {
    var slider = tns({
        container: sliderClass,
        items: 4,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 2000,
        controls: false,
        nav: false,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            1024: { items: 6 }
        }
    });

    document.querySelector(prevBtn).addEventListener("click", function () {
        slider.goTo("prev");
    });

    document.querySelector(nextBtn).addEventListener("click", function () {
        slider.goTo("next");
    });
}

initSlider(".slider-1", ".prev-1", ".next-1");
initSlider(".slider-2", ".prev-2", ".next-2");
initSlider(".slider-3", ".prev-3", ".next-3");
initSlider(".slider-4", ".prev-4", ".next-4");