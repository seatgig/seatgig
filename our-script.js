document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded - Initializing Tiny Slider");

    // Check if tns is loaded
    if (typeof tns !== "undefined") {
        console.log("Tiny Slider is available");

        // Main Slider
        var slider = tns({
            container: ".my-slider",
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
        var prevButton = document.getElementById("prev");
        var nextButton = document.getElementById("next");

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", function () {
                slider.goTo("prev");
            });

            nextButton.addEventListener("click", function () {
                slider.goTo("next");
            });
        } else {
            console.warn("Prev/Next buttons not found");
        }

        // Function to Initialize Multiple Sliders
        function initSlider(sliderClass, prevBtn, nextBtn) {
            var sliderInstance = tns({
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

            var prev = document.querySelector(prevBtn);
            var next = document.querySelector(nextBtn);

            if (prev && next) {
                prev.addEventListener("click", function () {
                    sliderInstance.goTo("prev");
                });

                next.addEventListener("click", function () {
                    sliderInstance.goTo("next");
                });
            } else {
                console.warn(`Prev/Next buttons not found for ${sliderClass}`);
            }
        }

        // Initialize Multiple Sliders
        initSlider(".slider-1", ".prev-1", ".next-1");
        initSlider(".slider-2", ".prev-2", ".next-2");
        initSlider(".slider-3", ".prev-3", ".next-3");
        initSlider(".slider-4", ".prev-4", ".next-4");

    } else {
        console.error("Tiny Slider is NOT loaded. Check if the library is included.");
    }
});
