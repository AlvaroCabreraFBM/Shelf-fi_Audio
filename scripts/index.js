// Variables

// Main activity
$(document).ready(function () {

    // Focus point call
    $('.focuspoint').focusPoint();

    // Set page language
    readJSON("Spanish");

    // Set carousel size
    setCarouselSize();

    // Set carousel images size
    $(".carousel-image").css("width", "1920px");
    $(".carousel-image").css("height", "1200px");

    // Change carousel size when user resize the window
    $(window).resize(function () {
        setCarouselSize();
    });

});

// Functions
function readJSON(language) {
    $.getJSON("https://raw.githubusercontent.com/AlvaroCabreraFBM/Shelf-fi_Audio/master/data/index.json", function (data) {
        console.log("readJSON say: Funciona!");
        setContent(data, language);

    });
}

function setContent(data, language) {
    $.each(data, function (i, item) {
        if (item.language == language) {
            $("#nav-home").text(item.home);
            $("#nav-products").text(item.products);
            $("#nav-aboutus").text(item.aboutus);
            $("#nav-contactus").text(item.contactus);
            $("#nav-faq").text(item.faq);
        }
    });
};

function setCarouselSize() {
    $("#carousel").css("width", $(window).width());
    $("#carousel").css("height", "600px");
    $(".carousel-item").css("width", $(window).width());
    $(".carousel-item").css("height", "600px");
}
