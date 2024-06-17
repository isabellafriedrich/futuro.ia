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
                afirmacao: "afirmação"
            },
            {
                texto: "Vai até o porto conversar com os cidadãos e investigar por conta própria.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Através da sua pesquisa você descobriu que os oceanos, vastos e aparentemente inesgotáveis, têm sido transformados em vastos depósitos de resíduos plásticos. No entanto, esse não é o único desafio que enfrentam. O aquecimento global está corroendo os delicados ecossistemas marinhos, enquanto os efluentes contaminantes, águas residuais e derramamentos de combustíveis contribuem para a sua deterioração contínua. Com base nisso, você deduziu que a máquina que os criminosos usam aquece a temperatura dos mares e acelera o aquecimento global, sem mencionar o descarte incorreto de resíduos usados para o abastecimento da máquina. Então, em busca de sua próxima pista...",
        alternativas: [
            {
                texto: "Você avalia um mapa térmico atual dos oceanos e procura onde há uma maior concentração anormal de águas quentes.",
                afirmacao: "afirmação"
            },
            {
                texto: "Você faz um trato com alguns pescadores para eles te levarem a algum lugar do mar onde teve muitos relatos de animais marinhos mortos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();