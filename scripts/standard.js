// Variables

// Main activity
$(document).ready(function () {
    readJSON("Spanish");
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
            $("#nav-aboutus").text(item.aboutus);
            $("#nav-contactus").text(item.contactus);
            $("#nav-faq").text(item.faq);
            $("#nav-gallery").text(item.gallery);
        }
    });
};
