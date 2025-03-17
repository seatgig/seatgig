document.addEventListener("DOMContentLoaded", function () {
    // Wait until tiny-slider.js is loaded
    if (typeof tns !== "function") {
        console.error("Tiny Slider not loaded!");
        return;
    }

    // Ensure the slider container exists
    const sliderContainer = document.querySelector('.my-slider');
    if (!sliderContainer) {
        console.error("Slider container '.my-slider' not found!");
        return;
    }

    // Initialize tiny-slider
    var slider = tns({
        container: ".my-slider",
        items: 4,
        slideBy: 1,
        autoplay: false,
        controls: false,
        nav: false,
        loop: true,
        responsive: {
            1200: { items: 4 },
            992: { items: 3 },
            768: { items: 2 },
            576: { items: 1 }
        }
    });

    // Custom Buttons
    document.getElementById("prev").addEventListener("click", function () {
        slider.goTo("prev");
    });

    document.getElementById("next").addEventListener("click", function () {
        slider.goTo("next");
    });
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