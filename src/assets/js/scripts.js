// JavaScript Document


$(document).ready(function () {
    $("#btnColapsar").click(function () {
        //$("#envolventeDatos").hide();
		//$("#envolventeMapa").removeClass("col-md-10");
		//$("#envolventeMapa").addClass("col-md-12");
		$("#btnExpandir").show();
    $("#envolventeDatos").fadeOut(500);
    });
	$("#btnExpandir").click(function () {
        //$("#envolventeDatos").show();
		//$("#envolventeMapa").removeClass("col-md-12");
		//$("#envolventeMapa").addClass("col-md-10");
		$("#btnExpandir").hide();
    $("#envolventeDatos").fadeIn(500);
    });
	$("#icnUbicarDirec").click(function () {
        $("#contenedorUbicacion").fadeIn(500);
    });
	$(".btnChincheta").click(function () {
        $("#contenedorUbicacion").show();
    });
	$("#icnCerrarPanelIzq").click(function () {
        $("#contenedorUbicacion").fadeOut(400);
    });

	//se oculta panel izquierdo si el puntero se ubica en el mapa
	//$(".map").mouseover(function () {
    //    $("#contenedorUbicacion").hide();
    //});

	//botones de prioridad
	$("#prioridadRojo").click(function () {
		$("#prioridadRojo").html("<img src='../assets/images/icnRojoOn.png' width='45' height='45' alt='Urgente'>");
        $("#prioridadAmarillo").html("<img src='../assets/images/icnAmarilloOff.png' width='45' height='45' alt='R&aacute;pida'>");
		$("#prioridadVerde").html("<img src='../assets/images/icnVerdeOff.png' width='45' height='45' alt='Normal'>");
    });
	$("#prioridadAmarillo").click(function () {
		$("#prioridadRojo").html("<img src='../assets/images/icnRojoOff.png' width='45' height='45' alt='Urgente'>");
        $("#prioridadAmarillo").html("<img src='../assets/images/icnAmarilloOn.png' width='45' height='45' alt='R&aacute;pida'>");
		$("#prioridadVerde").html("<img src='../assets/images/icnVerdeOff.png' width='45' height='45' alt='Normal'>");
    });
	$("#prioridadVerde").click(function () {
		$("#prioridadRojo").html("<img src='../assets/images/icnRojoOff.png' width='45' height='45' alt='Urgente'>");
        $("#prioridadAmarillo").html("<img src='../assets/images/icnAmarilloOff.png' width='45' height='45' alt='R&aacute;pida'>");
		$("#prioridadVerde").html("<img src='../assets/images/icnVerdeOn.png' width='45' height='45' alt='Normal'>");
    });

	//select de motivo
	$('#selectMotivo').on('change',function(){
		var value = $(this).val();
		$(".contCorporacion").show();
		$(".contPrioridad").show();
		$(".infoComplementa").show();
		$('#btnAceptar').removeAttr("disabled")
	});

	//btnAceptar
	$("#btnAceptar").click(function () {
		$(".contCorporacion").hide();
		$(".contPrioridad").hide();
		$(".infoComplementa").hide();
		$('#btnAceptar').attr("disabled", true);
		var select = $('#selectMotivo');
		select.val($('option:first', select).val());
		$('#txtDescripcion').val('');
    });

});
