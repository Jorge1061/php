//variables globales con función de bandera para saber cuando puede escribirse un .
var bPunto = false;
var b2Punto = true;


// Dadas la division que contiene todas las pestañas y la de la pestaña que se
// quiere mostrar, la funcion oculta todas las pestañas a excepcion de esa.
function cambiarPestanna(pestannas, pestanna) {
    // Obtiene las divisiones que tienen el contenido de las pestañas.
    
    listacPestannas = document.getElementById('contenido' + pestannas.id);

    // Recorre la lista ocultando todas las pestañas 
    for (var i = 0; typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined';i++){
        $(listacPestannas.getElementsByTagName('div')[i]).css('display', 'none');
    }

    $(document).ready(function () {
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        $('#c' + pestanna.id).css('display', '');
        if (pestanna.id == "pestana4")
            $('#cont1').css('display', '');
        if (pestanna.id == "pestana6")
            $('#mostrar').css('display', '');

    });

}

$(function () {
    $(".val").click(function (e) {
        e.preventDefault();
        var a = $(this).attr("href").replace("_", "-");
        //Sí no es un número
        if (isNaN(a)) {
            b2Punto = true;
            var str = $(".screen").html() + "";
            //si hay un - en pantalla y presiono +, - o +/-
            if (str == "-" && (a == "+" || a == "-")) {
                $(".values").val("");
                $(".screen").html("");
                //Si el signo es un - o hay almenos un número (+/- también pasaría aquí)
            } else if (a == "-" || str.length > 0) {
                //Si es -/+ y hay almenos un número
                if (str.length > 0 && $(this).attr("href") == "_") {
                    $(".values").val("(" + $(".outcome").val() + ")*-1");
                    $(".outcome").val(eval($(".values").val()));
                    var number = $(".outcome").val() + "";
                    //Números muy largos
                    if (($(".values").val() + "").length > 14) {
                        $(".values").val("OPERATION");
                        if (number.length > 11)
                            number = (number + "").substring(0, 10) + "E";
                    }
                    $(".screen").html($(".values").val() + "<br>= " + number);
                    //Es un "-" u otro caracter si en la pantalla hay almenos un número
                } else {
                    if (a == ".")
                        b2Punto = false;
                    //Es un caracter diferente al punto o un punto con las 2 banderas habilitadas
                    if (b2Punto || (!b2Punto && bPunto)) {
                        $(".values").val($(".outcome").val() + a);
                        $(".screen").html($(".values").val());
                    }
                }
            } 
        //Es un número
        } else {
            bPunto = b2Punto;
            $(".values").val($(".values").val() + a);
            $(".outcome").val($(".values").val());
            $(".screen").html($(".outcome").val());
            
        }
       
        
    });

    $(".equal").click(function () {
        //Para no tomar en cuenta un caracter especial si no hay un número por delante
        $(".values").val($(".outcome").val());
        //Valor del resultado
        $(".outcome").val(eval($(".values").val()))
        //guardo en variable para analizarlo como entero
        var number = eval($(".outcome").val());
        if (!Number.isInteger(number)) {
            number = number.toFixed(2);
            $(".outcome").val(number);
        }
        if ((number + "").length > 11) 
            number = (number + "").substring(0, 10) + "E";
        if (($(".values").val() + "").length > 14)
            $(".values").val("OPERATION");
        $(".screen").html($(".values").val()  + "<br>= " + number);
    });

    $(".clear").click(function () {
        $(".values").val("");
        $(".outcome").val("");
        $(".screen").html("");
        bPunto = false;
        b2Punto = true;
    });

   
    
})

//modal
$(function () {
    $("#myBtn").click(function () {
        $("#myModal").css('display', 'block');
    });
    $(".close").click(function () {
        $("#myModal").css('display', 'none');
    });
    $("#myModal").click(function (event) {
        if (event.target == document.getElementById("myModal"))
            $("#myModal").css('display', 'none');
    });
})

//show text
$(function () {
    $("#btnCalcular").click(function (e) {
        if ($("#txtValor").val != "") {
            $("#texto").text($("#txtValor").val());
        }
    });
})

//background color
$(document).ready(function(){
    $("#cpestana3 input").focus(function(){
      $(this).css("background-color", "blue");
    });
    $("#cpestana3 input").blur(function(){
      $(this).css("background-color", "red");
    });
});


$(function () {
    //Ocultar bloque
    $("#c1").click(function () {
        $("#cont1").hide(1500);
    });


    //Mostrar bloque
    $("#c2").click(function () {
        $("#cont1").show("slow");
    });

    //Ocultar / Mostrar bloque
    $("#c1b").click(function () {
        $("#cont1").toggle(1500);
    }, function () {
        $("#cont1").toggle(1500);
    });

    //Cambiar tamaño
    $("#c3").click(function () {
        $("#cont1").animate({ fontSize: '2.4em', width: 600, padding: 24 }, 2500);
    });

    //Ocultar con FadeOut
    $("#c4").click(function () {
        $("#cont1").fadeToggle(3000);
    });

    //Mostrar con FadeIn
    $("#c5").click(function () {
        $("#cont1").fadeIn(3000);
    });
    //Mover
    $("#c6").click(function () {

        $("#cont1").animate({ opacity: "0.1", left: "+=400", fontSize: '1em', width: "200" }, 1200)
            .animate({ opacity: "0.4", top: "+=160", height: "20", width: "80", fontSize: '0.5em' }, "slow")
            .animate({ opacity: "1", left: "0", width: "260" }, "slow")
            .animate({ top: "0", width: "260", fontSize: '1.2em' }, "fast")
            .slideUp()
            .slideDown(1800)
        return false;

    });
    //Cambiar estilo CSS
    $("#c7").click(function () {
        $("#cont1").css({ 'border': '4px solid #ffffffff', 'color': '#ffffffff', 'font-weight': 'bold', 'background-color': '#00000000' });
    });
})


function realizaProceso(valorCaja1, valorCaja2) {
    jQuery.support.cors = true;
    var parametros = {
        "valorCaja1": valorCaja1,
        "valorCaja2": valorCaja2
    };
    $.ajax({
        data: parametros,
        url: 'ajax.php',
        type: 'GET',
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            $("#resultado").html(response);
        }
    });
}

$(function () {
    $("#calcula").click(function () {
        realizaProceso($('#valor1').val(), $('#valor2').val());
        return false;
    });
})




