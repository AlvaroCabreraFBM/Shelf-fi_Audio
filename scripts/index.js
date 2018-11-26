// Variables

// Main activity
$(document).ready(function () {
    readJSON("Spanish");
    setCarouselSize();
    $(window).resize(function () {
        setCarouselSize();
    })
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
    $("#carousel").css("height", "500px");
    $(".carousel-item").css("width", $(window).width());
    $(".carousel-item").css("height", "500px");
    $(".carousel-image").css("width", $(window).width());
    $(".carousel-image").css("height", "500px");
}
