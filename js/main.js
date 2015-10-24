	

	var contadorDeEventos = 0; // utilizado na renderizacao de eventos no calendario


	//Atualiza todos os dados do aluno

		setInterval(function(){
			//var novaMensagem = "<i class='material-icons' id='existeMensagem'>&#xE85A;</i>";
		}, 2000);





	/*função INICIO que carrega os objetos de jquery e outros*/
	function INICIO(){
		$(".button-collapse").sideNav();
		$('ul.tabs').tabs();
		$('.modal-trigger').leanModal();


		if($('#Container').mixItUp('isLoaded')){
			$('#Container').mixItUp('destroy', true);
		}
		$('#Container').mixItUp();
		
		if($('#ContainerDisciplinaX').mixItUp('isLoaded')){
			$('#ContainerDisciplinaX').mixItUp('destroy', true);
		}
		$('#ContainerDisciplinaX').mixItUp();
		

		var data = Date(); // esse valor sera obtido pelo servidor.
		var diaDaSemana = data.split(" ")[0];
		var numeroDaSemana = data.split(" ")[2];

		if(diaDaSemana == "Sun"){diaDaSemana = "DOM";}
		else if(diaDaSemana == "Mon"){diaDaSemana = "SEG";}
		else if(diaDaSemana == "Tue"){diaDaSemana = "TER";}
		else if(diaDaSemana == "Wed"){diaDaSemana = "QUA";}
		else if(diaDaSemana == "Thu"){diaDaSemana = "QUI";}
		else if(diaDaSemana == "Fri"){diaDaSemana = "SEX";}
		else if(diaDaSemana == "Sat"){diaDaSemana = "SAB";}

		$(".diaDaSemana").html(diaDaSemana);
		$(".numero").html(numeroDaSemana);
	}


$(document).on("click", ".hoje", function(){
	$('body').load("mobile/menu.html", function(){
		INICIO();
	});
});


$(document).on("click", ".notas", function(){
	$('body').load("mobile/notas.html", function(){
		INICIO();
	});
});


$(document).on("click", ".disciplinas", function(){
	$('body').load("mobile/disciplinas.html", function(){
		$('#ContainerDisciplinas').mixItUp();
		INICIO();
	});
});


$(document).on("click", ".eventos", function(){
	$('body').load("mobile/eventos.html", function(){
		$('#calendario').fullCalendar('destroy');
		INICIO();

		$('#calendar').fullCalendar({
		    lang:'pt-br',
		    header: {
		        left: 'prev',
		        center: 'title',
		        right: 'next'
		    },

		    fixedWeekCount: false,
		    height: "20px",

		    dayClick: function(date, jsEvent, view) { // http://fullcalendar.io/docs/views/View_Object/
		        //alert('DIA: ' + date.format());

		        $("#conteudoEvento").html("");
		        $('#calendar').fullCalendar('clientEvents', function(event) {


		        	if(date.format() == event.start.format()){
		        		contadorDeEventos = 1;
	                	//alert('Event: ' + event.title);

	                	var stringEvento = "\
	                		<a href='#' class='card0001'>\
					          <div class='card cor01'>\
					            <div class='card-content white-text'>\
									<div class='row rowSemBottom'>\
					            		<div class='col s10'>\
											<span class='card-title nomeDisciplina'>"+event.title+"</span>\
					            		</div>\
					            		<div class='col s2'>\
					            			<i class='material-icons'>assignment_ind</i>\
					            		</div>\
					            	</div>\
					            </div>\
					          </div>\
				          	</a>\
	                	";

	                	$("#conteudoEvento").append(stringEvento);

		        	}

	            });
	        	if(contadorDeEventos == 0){
		    		var stringNenhumEvento = "\
                		<a href='#' class='semEvento'>\
				          <div class='card semCor'>\
				            <div class='card-content'>\
								<div class='row rowSemBottom'>\
				            		<div class='col s10'>\
										<span class='card-title nomeDisciplina'>Sem Agendamentos</span>\
				            		</div>\
				            		<div class='col s2'>\
				            			<i class='material-icons'>assignment_ind</i>\
				            		</div>\
				            	</div>\
				            </div>\
				          </div>\
			          	</a>\
                	";

                	$("#conteudoEvento").append(stringNenhumEvento);
		    	}
		    	contadorDeEventos = 0;
	    	},

	    	eventAfterAllRender: function(event, element, view){

	    		var hoje = new Date();
				var dia = hoje.getDate();
				var mes = (hoje.getMonth()+1);
				var ano = hoje.getFullYear();

				if((dia.toString()).length == 1){dia = "0"+dia;}
				if((mes.toString()).length == 1){mes = "0"+mes;}

				hoje = ano+'-'+mes+'-'+dia;
	    		
	    		//var hoje = "2015-09-15";
	    		$('#calendar').fullCalendar('clientEvents', function(event) {
		        	if(hoje == event.start.format()){
		        		contadorDeEventos = 1;
		        		$(this).css("font-weight", "bold");
	                	var stringEvento = "\
	                		<a href='#' class='card0001'>\
					          <div class='card cor01'>\
					            <div class='card-content white-text'>\
									<div class='row rowSemBottom'>\
					            		<div class='col s10'>\
											<span class='card-title nomeDisciplina'>"+event.title+"</span>\
					            		</div>\
					            		<div class='col s2'>\
					            			<i class='material-icons'>assignment_ind</i>\
					            		</div>\
					            	</div>\
					            </div>\
					          </div>\
				          	</a>\
	                	";
	                	$("#conteudoEvento").append(stringEvento);
		        	}
	            });
	            if(contadorDeEventos == 0){
		    		var stringNenhumEvento = "\
                		<a href='#' class='semEvento'>\
				          <div class='card semCor'>\
				            <div class='card-content'>\
								<div class='row rowSemBottom'>\
				            		<div class='col s10'>\
										<span class='card-title nomeDisciplina'>Sem Agendamentos</span>\
				            		</div>\
				            		<div class='col s2'>\
				            			<i class='material-icons'>assignment_ind</i>\
				            		</div>\
				            	</div>\
				            </div>\
				          </div>\
			          	</a>\
                	";

                	$("#conteudoEvento").append(stringNenhumEvento);
		    	}
		    	contadorDeEventos = 0;
	    	},

	    
	    	events: [
		        {
		        	allDay: true,
		        	id: "001",
		            title: 'Disciplina 01<br>Aula #1',
		            start: '2015-09-24',
		            rendering: 'background'
		        },
		        {
		            allDay: true,
		            id: "002",
		            title: 'Evento02',
		            start: '2015-09-15',
		            rendering: 'background'
		        },
		        {
		            allDay: true,
		            id: "003",
		            title: 'Prova01',
		            start: '2015-09-16',
		            rendering: 'background'
		        },
		        {
		            allDay: true,
		            id: "004",
		            title: 'Prova02',
		            start: '2015-09-18',
		            rendering: 'background'
		        },
		        {
		            allDay: true,
		            id: "005",
		            title: 'Prova03',
		            start: '2015-09-24',
		            rendering: 'background'
		        },
		        {
		            allDay: true,
		            id: "006",
		            title: 'Prova0333',
		            start: '2015-09-24',
		            rendering: 'background'
		        }
		    ]
		    //eventColor: '#378006'

		});

	});
});

/*Botao do sub-menu de eventos para mostrar a data de hoje*/
$(document).on("click", "#irParaHoje", function(){
    $('#calendar').fullCalendar('today');
    $(".fc-today").addClass('animated bounceIn');//animacao no dia de hoje
    setTimeout(function() {
	    $(".fc-today").removeClass('animated bounceIn');
	}, 1000);

    //carrega os eventos do dia
	$("#conteudoEvento").html("");
    var hoje = new Date();
	var dia = hoje.getDate();
	var mes = (hoje.getMonth()+1);
	var ano = hoje.getFullYear();

	if((dia.toString()).length == 1){dia = "0"+dia;}
	if((mes.toString()).length == 1){mes = "0"+mes;}

	hoje = ano+'-'+mes+'-'+dia;
	$('#calendar').fullCalendar('clientEvents', function(event) {
		if(hoje == event.start.format()){
			contadorDeEventos = 1;
			var stringEvento = "\
        		<a href='#' class='card0001'>\
		          <div class='card cor01'>\
		            <div class='card-content white-text'>\
						<div class='row rowSemBottom'>\
		            		<div class='col s10'>\
								<span class='card-title nomeDisciplina'>"+event.title+"</span>\
		            		</div>\
		            		<div class='col s2'>\
		            			<i class='material-icons'>assignment_ind</i>\
		            		</div>\
		            	</div>\
		            </div>\
		          </div>\
	          	</a>\
        	";
        	$("#conteudoEvento").append(stringEvento);
		}
	});
	if(contadorDeEventos == 0){
		var stringNenhumEvento = "\
    		<a href='#' class='semEvento'>\
	          <div class='card semCor'>\
	            <div class='card-content'>\
					<div class='row rowSemBottom'>\
	            		<div class='col s10'>\
							<span class='card-title nomeDisciplina'>Sem Agendamentos</span>\
	            		</div>\
	            		<div class='col s2'>\
	            			<i class='material-icons'>assignment_ind</i>\
	            		</div>\
	            	</div>\
	            </div>\
	          </div>\
          	</a>\
    	";

    	$("#conteudoEvento").append(stringNenhumEvento);
	}
	contadorDeEventos = 0;
});

/*Limpa a lista de eventos Caso o usuario mude de mes*/
$(document).on("click", ".fc-right, .fc-left", function(){
	$("#conteudoEvento").html("");
});

$(document).on("click", ".sair", function(){
	$('.button-collapse').sideNav('hide');
});

$(document).on("click", ".confirmaSim", function(){
	
	$('body').load("login.html", function(){
		$('.slider').slider({
			full_width: true,
			interval: 999999
		});
		$('select').material_select();
	});

});


// modals do tutorial
$(document).on("click", ".passo02", function(){

	$('#modalTutorial02').openModal({
		dismissible: false,
		in_duration: 10,
		ready: function() { 
			$("#modalTutorial02").css("top", "50%");
		}
	});

});
$(document).on("click", ".passo03", function(){

	$('#modalTutorial03').openModal({
		dismissible: false,
		in_duration: 10,
		ready: function() { 
			$("#modalTutorial03").css("margin", "0px");
		}
	});

});




$(document).on("click", ".avisos", function(){
	$('body').load("mobile/avisos.html", function(){
		INICIO();
	});
	$('.button-collapse').sideNav('hide');
});


$(document).on("click", ".card0001", function(){
	$('body').load("mobile/verDetalhesCard.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	});
});

$(document).on("click", ".ementa", function(){
	$('body').load("mobile/ementa.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	});
});

$(document).on("click", ".voltarMenuPrincipal", function(){
	$('body').load("mobile/menu.html", function(){
		INICIO();
	});
});

$(document).on("click", ".voltarMenuDisciplinas", function(){
	$('body').load("mobile/disciplinas.html", function(){
		INICIO();
	});
});

$(document).on("click", ".voltarMenuDetalheDisciplina", function(){
	$('body').load("mobile/verDetalhesDisciplina.html", function(){
		INICIO();
	});
});

$(document).on("click", ".voltarMenuNotas", function(){
	$('body').load("mobile/notas.html", function(){
		INICIO();
	});
});

$(document).on("click", ".verDetalhesDisciplina", function(){
	$('body').load("mobile/verDetalhesDisciplina.html", function(){
		INICIO();
	});
});


$(document).on("click", ".verDetalheAvisos", function(){
	$('body').load("mobile/detalheAvisos.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	});
});


$(document).on("click", ".gradeHoraria", function(){
	$('body').load("mobile/gradeHoraria.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	});
});

$(document).on("click", ".notasDetalhes", function(){
	$('body').load("mobile/notasDetalhes.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
		$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	});
});

$(document).on("click", ".configuracao", function(){
	$('body').load("mobile/configuracao.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	});
});

$(document).on("click", ".frequencia", function(){
	$('body').load("mobile/frequencia.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
		$('.progress .progress-bar').progressbar({display_text: 'fill'});
	});
});




$(document).on("click", ".notasGrafico", function(){
	$('body').load("mobile/notasGrafico.html", function(){
		$(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();

		var options = {
	        responsive:true
	    };

	    var data = {
	        labels: ["Eng.Software", "BancoDados", "Redes", "IA", "PO"],
	        datasets: [
	            {
	                label: "Dados primários",
	                fillColor: "rgba(220,220,220,0.2)",
	                strokeColor: "rgba(220,220,220,1)",
	                pointColor: "rgba(220,220,220,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(220,220,220,1)",
	                data: [85, 45, 70, 25, 10]
	            },
	            {
	                label: "Dados secundários",
	                fillColor: "rgba(151,187,205,0.2)",
	                strokeColor: "rgba(151,187,205,1)",
	                pointColor: "rgba(151,187,205,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(151,187,205,1)",
	                data: [90, 48, 40, 19, 86]
	            }
	        ]
	    };

	    var data3 = {
	        labels: ["1ª", "2ª", "3ª", "4ª", "5ª","6ª", "7ª", "8ª", "9ª", "10ª"],
	        datasets: [
	            {
	                label: "Dados primários",
	                fillColor: "rgba(220,220,220,0.2)",
	                strokeColor: "rgba(220,220,220,1)",
	                pointColor: "rgba(220,220,220,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(220,220,220,1)",
	                data: [85, 45, 70, 25, 10, 70, 25, 10, 75, 55]
	            },
	            {
	                label: "Dados secundários",
	                fillColor: "rgba(151,187,205,0.2)",
	                strokeColor: "rgba(151,187,205,1)",
	                pointColor: "rgba(151,187,205,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(151,187,205,1)",
	                data: [90, 48, 40, 19, 86, 90, 50, 45, 25, 10]
	            }
	        ]
	    };


        var ctx = document.getElementById("GraficoBar").getContext("2d");
        var BarChart = new Chart(ctx).Bar(data, options);


        var ctxs = document.getElementById("GraficoLinha").getContext("2d");
        var LineChart = new Chart(ctxs).Line(data3, options);

        window.myLine = new Chart(ctxs).Line(data3, { // definindo o max e min no eixo Y no grafico de linhas
	        scaleOverride : true,
	        scaleSteps : 10,
	        scaleStepWidth : 10,
	        scaleStartValue : 0 
	    });
	    // window.myBar = new Chart(ctx).Bar(data, {
	    //     scaleOverride : true,
	    //     scaleSteps : 10,
	    //     scaleStepWidth : 10,
	    //     scaleStartValue : 0 
	    // });


        var ctxw = document.getElementById("GraficoRadar").getContext("2d");
        var myRadarChart = new Chart(ctxw).Radar(data, options);

	});

});
	
