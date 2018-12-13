var images = ["a1-first", "second", "third"];
var titles = ["A-1 Amplificador", "P-1 Selector / Preamplificador", "B-1 Fuente alimentación a bateria"];
var links = ["products.html#a1", "products.html#p1", "products.html#b1"];


$(document).ready(function () {

    var cards = document.getElementById("products-index-cards");

    for (var i = 0; i < images.length; i++) {

        cards.innerHTML += `
        <!-- Card -->
        <div class="d-none d-xl-block col-4 pb-3">
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
            </div>
        </div>`

    }

    var list = document.getElementById("products-index-list");

    for (var i = 0; i < images.length; i++) {

        list.innerHTML += `
            <li class="list-group-item background-171717 no-rounded-borders">
                <a href="${links[i]}" class="text-decoration-none">
                    <h5 class="card-title color-E5E5E5">${titles[i]}</h5>
                </a>
            </li>
        `

    }

    $("#buy1").click(function () {
        Swal({
            title: '¿Quieres pasar a la pagina de compra?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si! <i class="fa fa-thumbs-up"></i>',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        }).then((result) => {
            if (result.value) {
                // Place holder of buy page, currently is out of service
                location.href ="http://www.paypal.com";
            }
        })
    });

    $("#buy2").click(function () {
        Swal({
            title: '¿Quieres pasar a la pagina de compra?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si! <i class="fa fa-thumbs-up"></i>',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        }).then((result) => {
            if (result.value) {
                // Place holder of buy page, currently is out of service
                location.href ="http://www.paypal.com";
            }
        })
    });

    $("#buy3").click(function () {
        Swal({
            title: '¿Quieres pasar a la pagina de compra?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si! <i class="fa fa-thumbs-up"></i>',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        }).then((result) => {
            if (result.value) {
                // Place holder of buy page, currently is out of service
                location.href ="http://www.paypal.com";
            }
        })
    });

});