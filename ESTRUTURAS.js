ESTRUTURAS DE DADOS



/*
PROBLEMAS:
- verificar se a estrutura apresentada do JSON esta correta com a quantidade de informacoes que serao apresentadas
- definir como ficaria a apresentacao sobre a frequencia do aluno que hoje esta demonstrada pelo titulo de "faltas"
- definir qual sera a melhor interface para demonstrar as notas do aluno dentro de uma disciplina (no app esta demonstrando as duas possibilidades)
- definir melhor o JSON das notas e frequencia tbm já pensando na alimentacao dos graficos
- definir como sera a estrutura dos AVISOS para que seja possivel o agrupamento de atores, exemplo: se o professor Henrique enviar dois email e um aluno receber os dois, ao inves de mostrar na tela principal os dois avisos, terei que agrupar por quem enviou. Estilo oq acontece no whatsApp
- estudar os possiveis parametros das funcoes que irao conter as abstracoes da criacao das interfaces 

*/




LOGIN:

{
	nome: "Nome do Aluno Completo",
	inscricao: 120300012,
	anoLetivo: 0034,
	unidade: "Caratinga",
	data: "2015-09-23" // a data do dia vindo do servidor
	// outras coisas...
}



DISCIPLINA:
001{ //codigo da disciplina
	nome: "COMP1N - Metodologia Cientifica", // nome da turma + nome da disciplina
	professor: "Vagner Bravos", // primeiro e ultimo nome
	planoDeEnsino{ // dados do plano de ensino da disciplina
		ementa: "texto da ementa...",
		objetivos: "topicos dos objetivos...",
		temasDeEstudo: "topicos...",
		articulacaoPesquisa: "texto do professor",
		avalicao: "Sao os instrumentos de avaliacao",
		bibliograficaBasica: "textos...",
		bibliograficaComplementar: "textos...",
		arquivo: "slides.pdf" // caso a aula exista um arquivo em anexo
	}
	planejamento{ // todas as aulas (planejamento)
		000011{ // codigo dos planejamentos
			tipo: "Aula - 01", // o tipo pode ser aula, prova, aps, etc. Seguido, caso se aplique, do numero da aula.
			data: "2015-08-20",
			unidades: "topicos", // unidades trabalhadas
			objetivo: "a descricao dos objetivos da aula",
			descricao: "essa aula....", // desenvolvimento da aula
			estrategia: "descrever aqui as estrategias de ensino", //estrategias de ensino
			arquivo: "slidesI.pdf" // caso a aula exista um arquivo em anexo
		}
		000015{ // codigo dos planejamentos
			tipo: "Aula - 02", // o tipo pode ser aula, prova, aps, etc. Seguido, caso se aplique, do numero da aula.
			data: "2015-08-21",
			unidades: "topicos", // unidades trabalhadas
			objetivo: "a descricao dos objetivos da aula",
			descricao: "essa aula....", // desenvolvimento da aula
			estrategia: "descrever aqui as estrategias de ensino", //estrategias de ensino
			arquivo: "slidesII.pdf" // caso a aula exista um arquivo em anexo
		}
	} // fim do planejamento
	agendamento{ // todos os agendamentos dessa disciplina
		000023{// codigo dos agendamentos
			tipo: "APS", // o tipo pode ser aula, prova, aps, etc. Seguido, caso se aplique, do numero da aula.
			data: "2015-08-20",
			valor: "10", // esse valor podera ser NULL caso nao exista nota no agendamento
			horas: "3", // esse valor podera ser NULL caso nao exista horas no agendamento
			entregaOnline: true, // assumindo valores true ou false, em caso de false, horaDaEntrega sera NULL
			horaDaEntrega: "23:59", // esse valor podera ser NULL caso nao exita hora marcada para a entrega do agendamento
			descricao: "essa aps....", // descricao do agendamento
			arquivo: "texto_base.pdf" // caso o agendamento exista um arquivo em anexo
		}
		000025{// codigo de agendamentos ou planejamentos
			tipo: "Avaliação", // o tipo pode ser aula, prova, aps, etc. Seguido, caso se aplique, do numero da aula.
			data: "2015-08-22",
			valor: "10", // esse valor podera ser NULL caso nao exista nota no agendamento
			horas: NULL, // esse valor podera ser NULL caso nao exista horas no agendamento
			entregaOnline: false, // assumindo valores true ou false, em caso de false, horaDaEntrega sera NULL
			horaDaEntrega: NULL, // esse valor podera ser NULL caso nao exita hora marcada para a entrega do agendamento
			descricao: "Avaliação sobre metodos", 
			arquivo: "Sem arquivo em anexo." // caso o agendamento exista um arquivo em anexo
		}
	} // fim do agendamento
} // fim da disciplina



NOTAS:
001{ // referencia do codigo da disciplina
	000023{ // referencia do codigo do agendamento
		notaAluno: "5", // nota do aluno naquele agendamento
		notaTurma: "7,5", // media geral dos alunos da turma
	}
}


FREQUENCIA:
// copiar a estrutura do professor...

AVISOS:
001{// codigo da disciplina
	0235{ // codigo do usuario que envia o aviso
		00001{ // codigo da mensagem
			nome: "Henrique Garcia",
			assunto: "Aviso Importante!", // assunto do aviso
			mensagem: "Texto", // texto do aviso
			target: "COMP1N", // para quem o ator enviou a mensagem, pode ser que essa mensagem tenha destino há uma turma, aluno especifico ou um curso inteiro...
			dataInicio: "2015-09-25",
			dataFim: "2015-10-01",
			status: "NOVO" // podenter ter dois valores NOVO ou LIDO
		}
	}
}



// ------------------------------------------------------------------------------------------------------------ //

//FUNCAO para construir interfaces dinamicas
// essa funcao ira construir a interface dos planejamentos, agendamentos e disciplinas em toda a interface.
// sendo possivel construir a funcao HOJE (tela inicial), NOTAS (para listar o nome das disciplinas), DISCIPLINAS (onde é possivel listar todas as disciplinas que o aluno tem para extrair todsa as informacoes de um disciplina somente)
// e dentro dessa disciplina, terei novamente a mesma funcao do HOJE porém agora filtrado por apenas uma disciplina.
// tenho 4 tipos de informacoes:
//		- class: nomeTipoPlanejamento (aula, prova, aps, etc)
//		- class: nomeDisciplina
//		- class: nomeProfessor
//		- class: iconeDoPlanejamento (o desenho que vai representar se o card é aula, prova ou trabalho)
function constroiInterfaceDisciplinas(){}



//FUNCAO para apresentar informacoes de texto mais longos
// sera utilizado nas telas: EMENTA e quando o usuario clica em algum planejamento ou agendamento (aula ou prova).
// sera utilizado tbm mostrando as informacoes dos avisos que o aluno possui
// talvez incluir a apresentacao da interface da grade horaria tbm.
function escreveConteudo(){}



//FUNCAO para criar a interface grafica das notas
// vai chamar a funcao constroiInterfaceDisciplinas() para receber somente o nome das disciplinas
// vai chamar a funcao escreveConteudo() para receber os detalhes dos agendamentos
// existem duas apresentacoes das notas do aluno
function mostraNotas(){}



//FUNCAO para criar a interface grafica da frequencia dos alunos
// ATENCAO - definir melhor de que forma sera apresentado essa informacao para nao gerar duplicidade de interpretacao para os usuarios
// essa proposta definida anteriormente tem por objetivo demonstrar as faltas que o aluno possui em cada disciplina (tomando cuidado para nao influenciar o aluno a faltar mais na disciplina), e de certa forma quantos por cento falta para o aluno ser reprovado por faltas
// há tbm uma proposta de demonstrar as presencas dos alunos, ou seja, comecando com 100% e ir diminuindo com a quantidade de faltas que o aluno podera ter.
// utilizar dados da frequencia do professor mais dados sobre lancamentos das APS.
function mostraFrequencia(){}



//FUNCAO para criar a interface dos graficos
// essa funcao tem por objetivo a criacao de vários graficos para que o aluno consiga visualiar o seu andamento de notas e relacionar ele com a sua turma. há tbm graficos especificos para faltas/frequencia por exemplo.
// há uma proposta de utilizar dados de todas as notas do aluno em seus periodos letivos, ou seja, para que seja possivel mostrar para o aluno como esta a evolucao de rendimento academico ao passar dos semestres
function mostraGraficos(){}



//FUNCAO para criar Eventos
// Essa funcao vai receber informacoes dos planejamento e agendamentos para alimentar o vetor de eventos (olhar main.js linha 205)
// chamar a funcao escreveConteudo() para pegar as seguintes informacoes:
// allDay: true, // fixo
	// id: // identificador unico de um agendamento ou planejamento
	// title: // titulo 
	// start: // data 
	// rendering: 'background' // fixo
function constroiEventos(){}



//FUNCAO para criar a interface organizada dos avisos recebidos
// o objetivo aqui é criar uma interface agrupada por atores que enviaram avisos para o aluno.
// destacar se existe algum aviso novo, e quais sao os avisos já visualizados
// chamar a funcao escreveConteudo() para receber os dados do aviso
// tenho 5 tipos de informacoes:
//		- Nome do usuarios que enviou o aviso (professor X, Secretaria, Financeiro)
//		- Assunto do ultimo aviso
//		- concatenar o texto da ultimo aviso em ate 30 caracteres
//		- icone da usuario (definir o desenho que vai representar cada usuario que vai enviar o aviso)
// 		- se o aviso for novo inserir um icone vermelho informando que há algo novo para o usuario
function mostraAviso(){}


















