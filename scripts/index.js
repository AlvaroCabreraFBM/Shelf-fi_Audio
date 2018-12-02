// Variables
var indexLanguage = "Spanish";

// Main activity
$(document).ready(function () {

    // Language selector
    readIndexJSON("Spanish");
    $("#flag").click(function () { selectIndexLanguage(); });

});

// Functions
function readIndexJSON(language) {
    $.getJSON("https://raw.githubusercontent.com/AlvaroCabreraFBM/Shelf-fi_Audio/master/data/index.json", function (data) {
        setIndexContent(data, language);

    });
}

function setIndexContent(data, language) {
    $.each(data, function (i, item) {
        if (item.language == language) {
            $("#content-welcome").text(item.welcome);
            // $("").text(item.approach);
            $("#content-description").text(item.description);
            $("#content-matter").text(item.matter);
        }
    });
};

// Language Selector
function selectIndexLanguage() {
    if (indexLanguage == "Spanish") {
        indexLanguage = "English";
        $("#flag").css("background", english_flag);
    } else {
        indexLanguage = "Spanish";
        $("#flag").css("background", spanish_flag);
    }
    readIndexJSON(indexLanguage);
}