let slickInitialized = false; // Initialize a flag to track whether the Slick slider is initialized

// Function to initialize the Slick slider
function initializeSlickSlider() {
    if (!slickInitialized) {
        $(".grid").slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        slickInitialized = true; // Set the flag to true
    }
}

// Function to destroy the Slick slider
function destroySlickSlider() {
    if (slickInitialized) {
        $(".grid").slick("unslick");
        slickInitialized = false; // Set the flag to false
    }
}

// Function to check window width and initialize/destroy Slick slider accordingly
function checkWindowWidth() {
    if ($(window).width() < 600) {
        initializeSlickSlider();
    } else {
        destroySlickSlider();
    }
}

// Initial check when the page loads
$(document).ready(function () {
    checkWindowWidth();
});

// Listen for the window resize event
$(window).resize(function () {
    checkWindowWidth();
});