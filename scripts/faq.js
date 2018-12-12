var questions = [
    "¿Por qué comprar nuestros productos?",
    "¿Todos los productos Shelf·fi se pueden alimentar con baterias?",
    "¿Qué altavoces se pueden conectar al A1?",
    "¿Cuántas entradas tiene el A1?",
    "¿Qué controles incorpora el P1?",
    "¿Puedo conectar un giradiscos al P1?",
    "¿Cuánto tiempo de reproducción permite el B1?",
    "¿Cuándo tengo que cargar el B1?",
    "¿Qué métodos de pago están aceptados?",
    "¿Qué hago si no tengo cuenta en Paypal?",
    "¿Realizan envíos a todo el mundo?",
    "¿Cuánto cuesta el envio a mi país?"
];

var answers = [
    "En Shelf·fi diseñamos y construimos nuestros productos para competir con la competencia y con los ridículamente altos precios que estos exhiben. La forma de poder ofrecer unos precios tan ajustados es prescindiendo de materiales exóticos que no aportan nada a la calidad musical, y saltándonos la cadena de intermediarios gracias a la venta directa on line.",
    "Si, hemos diseñado una línea de productos que funcionan con corriente continua de 12v, esto nos permite alimentar nuestros componentes a partir de adaptadores de corriente comunes o de baterías, incluso son ideales para su funcionamiento en caravanas, embarcaciones, camiones...",
    "Con 9w sobre 8 ohmios, el amplificador A1 es capaz de mover con facilidad altavoces con sensibilidad media/alta (a partir de 90db) y llenar de música una habitación de tamaño mediano. Con altavoces de alta sensibilidad (>96db) el A1 es capaz de producir un sonido atronador muy por encima de los niveles normales de escucha incluso en habitaciones de gran tamaño.",
    "El A1 tiene una sola entrada, está pensado para conectar una fuente de alto nivel de salida (>2v) como reproductores de cd, reproductores multimedia, sistemas de sonido en red... Bajo petición podemos incluir una entrada adicional con un conmutador en el panel trasero. Para el usuario que necesita mas entradas hemos creado el selector/preamplificador P1 que incorpora un total de 3 entradas y una sección de preamplificación con una ganancia de 5x.",
    "EL P1 es básicamente un selector de entradas, su mando frontal permite seleccionar entre las tres entradas disponibles que luego son dirigidas a una sección de previo para elevar su nivel, el P1 no tiene mando de volumen ya que es un complemento del A1 y es este último el que lo incorpora. Hemos diseñado de esta forma el A1 y el P1 para evitar la duplicidad de potenciómetros que podrían degradar la señal musical.",
    "Actualmente el P1 sólo admite señales de línea (cds, smartphones, tablets, pcs…) estamos trabajando para poder ofrecer un modulo de phono de alta calidad para ser incorporado en un futuro como entrada adicional en el P1.",
    "La capacidad de sus baterías es suficiente para poder alimentar durante unas 6 horas al amplificador A1 y al selector P1 , dependiendo del volumen de escucha este tiempo puede aumentar o disminuir.",
    "EL B1 incorpora un circuito de protección contra sobre-descarga que lo pone en modo de reposo al detectar un voltaje de salida por debajo del necesario para la optima alimentación de los otros componentes. En ese momento se deberá conectar el cargador suministrado y accionar el conmutador de carga. El tiempo de carga puede variar entre 60 y 120 minutos.",
    "Actualmente Paypal es el único método de pago aceptado. Para garantizar su seguridad hemos adoptado este método de pago por lo que no es necesario facilitar sus números de tarjeta de crédito ni otros datos adicionales ya que todo el proceso se realiza en el sitio web de Paypal.",
    "Paypal es uno de los métodos más seguros para realizar transacciones on line y es gratis para el consumidor, nosotros le animamos a abrir una cuenta en Paypal para adquirir nuestros productos, no obstante si no tiene o no quiere abrir una cuenta póngase en contacto con nosotros para buscar una alternativa.",
    "Por el momento sólo realizamos envíos dentro de la Unión Europea. Estamos estudiando realizar envíos fuera de la Unión pero por ahora no es posible.",
    "Para simplificar el proceso de compra hemos estimado un coste de envio fijo para los países de la Unión Europea de 20€ por cada componente, este coste ya esta incluido en el precio marcado para cada producto."
];

var topic = [
    "general",
    "general",
    "a1",
    "a1",
    "p1",
    "p1",
    "b1",
    "b1",
    "buy",
    "buy",
    "buy",
    "buy"
];


$(document).ready(function () {

    for (var i = 0; i < questions.length; i++) {

        var cards = document.getElementById(topic[i]);

        cards.innerHTML += `
            <div class="card background-171717">
                <div class="card-header" id="heading${i}">
                    <h5 class="mb-0">
                        <a href="#" class="text-decoration-none color-BFBFBF hover-color-E5E5E5" data-toggle="collapse" data-target="#collapse${i}" aria-controls="collapse${i}">
                            ${questions[i]} <i class="fa fa-caret-down"></i>
                        </a>
                    </h5>
                </div>

                <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#${topic[i]}">
                    <div class="card-body">
                        <p class="color-BFBFBF">${answers[i]}</p>
                    </div>
                </div>
            </div>
        `

    }

});