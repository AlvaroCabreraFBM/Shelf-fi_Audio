// Variables

// Main activity
$(document).ready(function () {
    readJSON("Spanish");
});

// Functions
function readJSON() {
    $.getJSON("./data/index.json", function (data) {
        console.log("readJSON say: Funciona!");
        setContent(data, languaje);
    });
}

function setContent(data, language) {
    $.each(data, function (i, item) {
        if (item.languaje == language) {
            $("#nav-item-home").append(item.home);
            $("#nav-item-products").append(item.products);
            $("#nav-item-aboutus").append(item.aboutus);
            $("#nav-item-contactus").append(item.contactus);
        }
    });
};
