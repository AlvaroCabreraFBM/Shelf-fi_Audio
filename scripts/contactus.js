$(document).ready(function () {

    var contact;

    $("#contactYes").click(function () {
        contact = true;
    });

    $("#contactNo").click(function () {
        contact = false;
    });


    $("#submit").click(function () {

        var mesage = $("#feedback").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var telephone = $("#telephone").val();
        var email = $("#email").val();
        var contactMethod = $("#contactMethod").val();

        var completeName = (firstname + " " + lastname);
        // var subject = "Mensaje de : " + completeName;
        var finalMesage = (completeName + " te ha enviado el siguiente mensaje : '" + mesage + "'");

        if (contact == true) { 
            finalMesage += " Puedes contactar con el usando su " + contactMethod + " : "; 
            contact && contactMethod == "Tel." ? finalMesage += telephone + ".": finalMesage += email + ".";
        } else { 
            finalMesage += " Ha solicitado que no se contacte con el. "; 
        }

        // Nodemailer not works correctly, but you can se the code that allow to send email.
        // Instead to send the mesage, I put a alert mesage to we can se the correctly fucionality of the form.
        alert(finalMesage);

        // var conection = nodemailer.createTransport({
        //     service : "gmail",
        //     auth:{
        //         user: "shelf.fi.audio@gmail.com",
        //         pass: "Shelffiaudio"
        //     }
        // });

        // var email = {
        //     form : completeName,
        //     to : "shelf.fi.audio@gmail.com",
        //     subject : subject, 
        // };

        // conection.sendMail(email);

    });

});