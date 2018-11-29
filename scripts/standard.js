// Variables

// Main activity
$(document).ready(function () {

    // Language selector
    readJSON("Spanish");

    // Navbar top
    $("#navbar-top").css("height", $("#navbar").css("height"));
    $("#navbar-top").css("padding", $("#navbar").css("padding"));

});

// Functions
function readJSON(language) {
    $.getJSON("https://raw.githubusercontent.com/AlvaroCabreraFBM/Shelf-fi_Audio/master/data/standard.json", function (data) {
        console.log("readJSON say: Funciona!");
        setContent(data, language);

    });
}

function setContent(data, language) {
    $.each(data, function (i, item) {
        if (item.language == language) {
            $("#nav-home").text(item.home);
            $("#nav-products").text(item.products);
            $("#nav-products-A1").text(item.A1);
            $("#nav-products-P1").text(item.P1);
            $("#nav-products-B1").text(item.B1);
            $("#nav-aboutus").text(item.aboutus);
            $("#nav-contactus").text(item.contactus);
            $("#nav-faq").text(item.faq);
            $("#nav-gallery").text(item.gallery);
        }
    });
};
