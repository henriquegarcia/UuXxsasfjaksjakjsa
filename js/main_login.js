var unidade;



$(document).ready(function(){
	$('body').load("login.html", function(){
		$('.slider').slider({
			full_width: true,
			interval: 999999
		});
		$('select').material_select();
		$('.modal-trigger').leanModal();
	});
});

function preLoader(){
	var codigoHtml = "\
		<div id='modalCarregando' class='modal' style='background: transparent; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0); height: 30%;'>\
			<div class='modal-content'>\
				<div class='preloader-wrapper big active preLoaderCirculo'>\
			      <div class='spinner-layer spinner-blue'>\
			        <div class='circle-clipper left'>\
			          <div class='circle'></div>\
			        </div><div class='gap-patch'>\
			          <div class='circle'></div>\
			        </div><div class='circle-clipper right'>\
			          <div class='circle'></div>\
			        </div>\
			      </div>\
			      <div class='spinner-layer spinner-red'>\
			        <div class='circle-clipper left'>\
			          <div class='circle'></div>\
			        </div><div class='gap-patch'>\
			          <div class='circle'></div>\
			        </div><div class='circle-clipper right'>\
			          <div class='circle'></div>\
			        </div>\
			      </div>\
			      <div class='spinner-layer spinner-yellow'>\
			        <div class='circle-clipper left'>\
			          <div class='circle'></div>\
			        </div><div class='gap-patch'>\
			          <div class='circle'></div>\
			        </div><div class='circle-clipper right'>\
			          <div class='circle'></div>\
			        </div>\
			      </div>\
			      <div class='spinner-layer spinner-green'>\
			        <div class='circle-clipper left'>\
			          <div class='circle'></div>\
			        </div><div class='gap-patch'>\
			          <div class='circle'></div>\
			        </div><div class='circle-clipper right'>\
			          <div class='circle'></div>\
			        </div>\
			      </div>\
			    </div>\
		    </div>\
		</div>\
	";
	$("main").append(codigoHtml);
	$('#modalCarregando').openModal({
		dismissible: false,
		opacity: .5,
	});
}


$(document).on("submit", "#formLogin", function(){
	var usuario = $(this).find('input[name=aluno]').val();
	var senha = $(this).find('input[name=senha]').val();

	// if(usuario == ""){
	// 	alert("Digite sua Matricula");
	// 	return false;
	// }
	// if(senha == ""){
	// 	alert("Digite sua Senha");
	// 	return false;
	// }
	// if(unidade === undefined){
	// 	alert("Selecione a Unidade");
	// 	return false;
	// }

	//preLoader();
	//$('#modalCarregando').closeModal();
	$('body').load("mobile/menu.html", function(){
		INICIO();
		$('#modalTutorial01').openModal({
			dismissible: false
		});
	});
	return false;

});


$(document).on("click", "#carangola", function(){
	$("input.select-dropdown").val("Carangola");
	unidade = "carangola";
});
$(document).on("click", "#ctga", function(){
	$("input.select-dropdown").val("Caratinga");
	unidade = "caratinga";
});
$(document).on("click", "#cataguases", function(){
	$("input.select-dropdown").val("Cataguases");
	unidade = "cataguases";
});
$(document).on("click", "#gpi", function(){
	$("input.select-dropdown").val("Guarapari");
	unidade = "guarapari";
});
$(document).on("click", "#iuna", function(){
	$("input.select-dropdown").val("Iúna");
	unidade = "iuna";
});
$(document).on("click", "#ipatinga", function(){
	$("input.select-dropdown").val("Ipatinga");
	unidade = "ipatinga";
});
$(document).on("click", "#jf", function(){
	$("input.select-dropdown").val("Juiz de Fora");
	unidade = "juizDeFora";
});
$(document).on("click", "#leo", function(){
	$("input.select-dropdown").val("Leopoldina");
	unidade = "leopoldina";
});
$(document).on("click", "#mhu", function(){
	$("input.select-dropdown").val("Manhuaçu");
	unidade = "manhuacu";
});
$(document).on("click", "#serra", function(){
	$("input.select-dropdown").val("Serra");
	unidade = "serra";
});
$(document).on("click", "#to", function(){
	$("input.select-dropdown").val("Teófilo Otoni");
	unidade = "teofiloOtoni";
});
$(document).on("click", "#vila", function(){
	$("input.select-dropdown").val("Vila Velha");
	unidade = "vilaVelha";
});
$(document).on("click", "#vitoria", function(){
	$("input.select-dropdown").val("Vitória");
	unidade = "vitoria";
});
$(document).on("click", "#jm", function(){
	$("input.select-dropdown").val("João Monlevade");
	unidade = "joaoMonlevade";
});