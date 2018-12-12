var images = ["a1-first", "p1-first", "b1-first", "a1-second", "p1-second", "b1-second", "a1-third", "p1-third", "first"];
var titles = ["A-1 Amplificador", "P-1 Selector / Preamplificador", "B-1 Fuente alimentación a bateria", "A-1 Amplificador", "P-1 Selector / Preamplificador", "B-1 Fuente alimentación a bateria", "A-1 Amplificador", "P-1 Selector / Preamplificador", "B-1 Fuente alimentación a bateria"];
var links = ["products.html#a1", "products.html#p1", "products.html#b1", "products.html#a1", "products.html#p1", "products.html#b1", "products.html#a1", "products.html#p1", "products.html#b1"];


$(document).ready(function () {

    var cards = document.getElementById("gallery");

    for (var i = 0; i < images.length; i++) {

        cards.innerHTML += `
        <!-- Card -->
        <div class="card background-171717 no-rounded-borders">
            <a href="#" data-toggle="modal" data-target="#modal${images[i]}">
                <img src="sources/images/gallery/${images[i]}.jpg" class="card-img-top no-rounded-borders">
            </a>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-center">
                    <a class="card-link" href="${links[i]}">
                        <h5 class="card-title color-E5E5E5">${titles[i]}</h5>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="modal${images[i]}" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <img src="sources/images/gallery/${images[i]}.jpg" class="img-fluid rounded">
            </div>
        </div>`

    }
});