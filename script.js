const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um agente especial da FIN (Força de Investigação Nacional) e atualmente está perseguindo criminosos muito perigosos que planejam acabar com o mundo provocando desastres naturais. Eles já destruíram dez cidades ao redor do mundo provocando inundações e terremotos, e agora é sua missão prender eles antes que seja tarde demais para a Terra. Sua última pista é que eles têm uma máquina para piorar a saúde dos oceanos, com a intenção de matar toda a vida marinha. Sabendo disso, você...",
        alternativas: [
            {
                texto: "Procura um biólogo marinho especialista que possa te ensinar mais sobre essa situação para que você possa chegar a raíz do problema.",
                afirmacao: "Agente 008 da FIN, segundo nossas informações, nessa missão você foi sábio e procurou um biólogo marinho especialista para entender melhor com o que estava lidando."
            },
            {
                texto: "Vai até o porto conversar com os cidadãos e investigar por conta própria.",
                afirmacao: "Agente 008 da FIN, segundo nossas informações, nessa missão, sendo você um pesquisador nato, preferiu investigar por conta própria e fazer sua pesquisa na área, o que atrasou um pouco você."
            }
        ]
    },
    {
        enunciado: "Através da sua pesquisa você descobriu que os oceanos, vastos e aparentemente inesgotáveis, têm sido transformados em vastos depósitos de resíduos plásticos. No entanto, esse não é o único desafio que enfrentam. O aquecimento global está corroendo os delicados ecossistemas marinhos, enquanto os efluentes contaminantes, águas residuais e derramamentos de combustíveis contribuem para a sua deterioração contínua. Com base nisso, você deduziu que a máquina que os criminosos usam aquece a temperatura dos mares e acelera o aquecimento global, sem mencionar o descarte incorreto de resíduos usados para o abastecimento da máquina. Então, em busca de sua próxima pista...",
        alternativas: [
            {
                texto: "Você avalia um mapa térmico atual dos oceanos e procura onde há uma maior concentração anormal de águas quentes.",
                afirmacao: "E isso guiou você a sua primeira pista, onde você avaliou um mapa térmico atual dos oceanos com muita precisão."
            },
            {
                texto: "Você faz um trato com alguns pescadores para eles te levarem a algum lugar do mar onde teve muitos relatos de animais marinhos mortos.",
                afirmacao: "Em sua primeira investigação você foi com alguns pescadores para o mar e ainda ganhou sushi de graça."
            }
        ]
    },
    {
        enunciado: "Depois de muitas pesquisas, você identifica uma região com uma alta concentração de águas quentes, indicando possível atividade da máquina dos criminosos. Pegando um barco até o local, você avalia os mares identificando as anomalias por perto. Agora, para avançar na sua investigação, você decide...",
        alternativas: [
            {
                texto: "Submergir em uma missão submarina para inspecionar pessoalmente a área suspeita e procurar por evidências físicas da máquina.",
                afirmacao: "Depois disso, você mergulhou no mar sem medo e procurou a máquina sem se importar com os tubarões que estavam ao seu redor. Que corajoso!"
            },
            {
                texto: "Organizar uma patrulha aérea sobre a área suspeita para procurar sinais visuais da máquina ou de atividades criminosas.",
                afirmacao: "Após isso, você organizou uma patrulha aérea pela área, o que te ganhou tempo. Muito inteligente!"
            }
        ]
    },
    {
        enunciado: "Com base nas evidências coletadas até agora, você tem uma suspeita mais forte sobre a localização da máquina que está prejudicando os oceanos. Depois de avisar a FIN, você coloca seu traje de mergulho especializado para se proteger, e mergulha em direção a máquina que está alojada no fundo do oceano Pacífico, perto de uma ilha onde não há sinal nenhum de vida marinha. Ao alcançar a máquina, você conecta um dispositivo para roubar os dados e destruir a máquina de uma vez por todas. Voltando rápidamente a superfície, você sobe em seu barco a tempo de se salvar da explosão que faz ondas fortes chacoalharem ao seu redor. Você explodiu a máquina! E agora?",
        alternativas: [
            {
                texto: "Você toma cuidado, pois tem certeza que a explosão alertou os criminosos da sua presença, então você  se esconde e monta uma operação de vigilância noturna, utilizando tecnologia avançada para monitorar movimentos suspeitos na área identificada.",
                afirmacao: "Ao final da sua missão, você destruiu a máquina garantindo a segurança do planeta. E foi cauteloso, decidindo se esconder e observar ao redor, para ter certeza da localização exata da base dos criminosos."
            },
            {
                texto: "Visando interromper as atividades dos criminosos o mais rápido possível, você avança em direção a ilha, pois é o local mais provável para a base dos criminosos.",
                afirmacao: "Ao final da sua missão, você destruiu a máquina garantindo a segurança do planeta. Seguindo seus instintos, você foi ousado e seguiu em direção a ilha. Você também é muito sortudo, e realmente encontrou a base lá."
            }
        ]
    },
    {
        enunciado: "Chegando ao final da sua missão, vocẽ encontra a base dos criminosos escondida no interior da ilha! Agora, o mundo está em suas mãos, você...",
        alternativas: [
            {
                texto: "Invade a base e cuida dos criminosos com seus próprios punhos e balas, entrando em uma luta arriscada e perigosa. Mas você não pode deixar eles fugirem! Confiando totalmente em suas habilidades, afinal, você é o melhor agente que o mundo já viu.",
                afirmacao: "No fim, depois de uma luta acirrada digna dos filmes do Jakie Chan, você capturou com sucesso os criminosos e salvou o mundo, impedindo os caras maus de causarem mais estragos. Parabéns agente! Você concluiu sua missão com louvor, e é com prazer que posso dizer que você foi promovido. "
            },
            {
                texto: "Sendo mais cuidadoso, você passa a localização para a FIN e pede para eles mandarem reforços imediatamente para preder esses criminosos. Afinal, não vale a pena entrar em uma batalha onde você está em desvantagem.",
                afirmacao: "No fim, você preferiu ser mais cuidadoso e não se colocar em risco e chamou uma equipe para te ajudar. Infelizmente, os reforços não chegaram a tempo e os criminosos fugiram. Sua missão foi parcialmente concluída, e os criminosos ainda estam a solta. Os custos para a busca e perseguição dos bandidos foram descontados do seu salário. Mais sorte na próxima vez agente..."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "RELATÓRIO DE MISSÃO:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();