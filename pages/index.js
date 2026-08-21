import React, { useState, useEffect } from 'react';

// 1. DADOS DO SIMULADO DE CIÊNCIAS (40 Questões baseadas na matéria "Misunderstood Microbes")
const questoes = [
    { q: "1. O que são microorganismos e onde eles podem viver?", o: ["Apenas seres grandes que vivem na água salgada", "Tiny living things (seres vivos minúsculos) que sobrevivem em ambientes extremos e em todos os lugares", "Apenas vírus que causam doenças graves", "Insetos microscópicos que voam"], a: 1, dica: "Lembre-se de que eles dominam pela capacidade de viver em condições extremas.", explicacao: "Microrganismos são seres vivos minúsculos que conseguem sobreviver em ambientes extremos como nuvens, vulcões submarinos, fontes termais, calotas polares e intestinos de animais." },
    { q: "2. Qual é a utilidade do 'Yeast' (levedura) na alimentação e indústria?", o: ["Serve apenas para estragar alimentos rapidamente", "Ajuda na fermentação de açúcares para criar biocombustíveis e fabricar pães", "É um antibiótico poderoso contra bactérias", "Causa infecções estomacais graves"], a: 1, dica: "Pense no processo de fermentação de ingredientes como milho e cana-de-açúcar.", explicacao: "A levedura (yeast) é um fungo benéfico usado na alimentação (como em pães) e para fermentar açúcares de culturas como milho e cana-de-açúcar, transformando-as em biocombustível." },
    { q: "3. Qual é a principal função da bactéria Penicillium?", o: ["Fazer iogurtes naturais", "Produzir um antibiótico poderoso", "Causar gripes fortes", "Limpar águas poluídas"], a: 1, dica: "Foi a descoberta que revolucionou a medicina contra infecções bacterianas.", explicacao: "A bactéria/fungo Penicillium deu origem a antibióticos poderosos que salvam vidas ao curar infecções bacterianas graves." },
    { q: "4. Para que serve o Lactobacillus no nosso dia a dia?", o: ["Para produzir iogurtes", "Para fabricar biocombustível", "Para matar vírus da gripe", "Para criar vacinas de spray"], a: 0, dica: "É um ingrediente muito comum em produtos lácteos fermentados.", explicacao: "O Lactobacillus é uma bactéria benéfica muito utilizada comercialmente para a fabricação de iogurtes." },
    { q: "5. Onde as bactérias podem ser encontradas?", o: ["Apenas em hospitais esterilizados", "Somente no ar que respiramos", "No corpo, no solo e na água (praticamente em todo lugar)", "Apenas em desertos quentes"], a: 2, dica: "Elas são onipresentes, ou seja, estão espalhadas por quase tudo.", explicacao: "As bactérias são extremamente versáteis e podem ser encontradas no corpo humano, no solo, na água e em praticamente todos os cantos do planeta." },
    { q: "6. Por que os remédios antibióticos NÃO funcionam contra o vírus da gripe?", o: ["Porque os antibióticos são fracos demais", "Porque os antibióticos combatem apenas bactérias, e vírus são diferentes", "Porque a gripe dura apenas três dias", "Porque o vírus se esconde no estômago"], a: 1, dica: "Lembre-se de que vírus e bactérias não são a mesma categoria de micróbio.", explicacao: "Os antibióticos são medicamentos desenvolvidos para combater bactérias ruins. Como os vírus têm uma estrutura biológica totalmente diferente, os antibióticos não conseguem matá-los." },
    { q: "7. O que é o Yeast (levedura) em termos biológicos?", o: ["Um tipo de protozoário aquático", "Um fungo microscópico", "Uma bactéria causadora de infecções", "Um vírus mutante"], a: 1, dica: "Ele não é bactéria nem vírus; pertence ao reino dos cogumelos e bolores.", explicacao: "O Yeast (levedura) é um fungo que ajuda a fazer alimentos e fermentar produtos." },
    { q: "8. Onde os protozoários (como as amebas) costumam viver principalmente?", o: ["Em ambientes aquáticos e úmidos", "No topo de montanhas de gelo seco", "Dentro de rochas vulcânicas sólidas", "Na atmosfera das nuvens densas"], a: 0, dica: "Pense no habitat natural de organismos como a ameba.", explicacao: "Os protozoários, a exemplo das amebas, vivem prioritariamente em ambientes aquáticos e úmidos." },
    { q: "9. Como as vacinas agem no nosso corpo?", o: ["Elas funcionam como um 'escudo de super-herói' treinando o sistema imunológico", "Elas substituem o sangue contaminado por um novo", "Elas matam todas as células do corpo para limpar os germes", "Elas servem apenas para dar energia física"], a: 0, dica: "Pense na analogia carinhosa que o Henrique usou sobre escudos protetores.", explicacao: "As vacinas funcionam como 'escudos de super-herói', ajudando a treinar o sistema de defesa do corpo para combater doenças antes que fiquemos doentes." },
    { q: "10. Qual foi a grande importância da descoberta da Penicilina?", o: ["Permitiu criar iogurtes mais duráveis", "Criou remédios que salvam vidas ao curar infecções bacterianas sérias", "Eliminou totalmente o vírus da gripe no mundo", "Permitiu a fabricação de biocombustível de milho"], a: 1, dica: "Foi um marco na história da medicina moderna.", explicacao: "A Penicilina revolucionou a ciência ao liderar a criação de medicamentos capazes de curar infecções bacterianas graves que antes eram fatais." },
    { q: "11. Todos os microrganismos são prejudiciais (ruins) para os seres humanos?", o: ["Sim, todos causam doenças mortais", "Não, existem microrganismos úteis e prejudiciais", "Não existem microrganismos úteis, apenas neutros", "Sim, exceto os vírus de computador"], a: 1, dica: "Lembre-se de que a maioria nos ajuda na digestão, indústria e ecossistema.", explicacao: "É incorreto afirmar que todos os microrganismos são ruins; eles podem ser tanto benéficos/úteis quanto nocivos." },
    { q: "12. Se um colega espirra e toca na maçaneta da porta, qual é o risco?", o: ["Nenhum, germes morrem instantaneamente ao ar livre", "Outros alunos podem tocar na maçaneta e se contaminar acidentalmente", "A porta vai quebrar por causa dos micróbios", "A maçaneta vai mudar de cor"], a: 1, dica: "Pense em como as superfícies transmitem germes de uma pessoa para outra.", explicacao: "Ocorre a contaminação cruzada: os germes passam para o objeto e outras pessoas podem se contaminar ao tocá-lo." },
    { q: "13. Quais são os dois hábitos de higiene fundamentais para evitar infecções por germes?", o: ["Dormir de óculos e correr na chuva", "Lavar as mãos frequentemente e tomar banho", "Comer doces e escovar os dentes com refrigerante", "Assistir TV de pé e abrir janelas"], a: 1, dica: "São hábitos básicos de limpeza pessoal ensinados em qualquer escola.", explicacao: "Práticas simples como lavar bem as mãos e tomar banho removem microrganismos patogênicos acumulados." },
    { q: "14. Quais são os três principais tipos de microrganismos encontrados em amostras de água não tratada?", o: ["Bactérias, protozoários e vírus", "Insetos, plantas e peixes grandes", "Pedras, minerais e plásticos", "Cinzas, poeira e fumaça"], a: 0, dica: "São os três grandes grupos invisíveis a olho nu estudados na unidade.", explicacao: "Amostras de água não tratada frequentemente abrigam bactérias, protozoários e vírus perigosos." },
    { q: "15. Qual é um sintoma comum associado a infecções por parasitas internos?", o: ["Crescimento de cabelo azul", "Dor de estômago (stomach ache) e mal-estar", "Visão raio-X", "Aumento da força física"], a: 1, dica: "Problemas digestivos e abdominais costumam aparecer quando há parasites.", explicacao: "Infecções parasitárias internas costumam gerar fortes dores de estômago e desconfortos abdominais." },
    { q: "16. Qual é a diferença principal entre os cogumelos do supermercado e os da natureza (floresta)?", o: ["Os do supermercado são cultivados de forma segura para alimentação; os selvagens podem ser venenosos", "Os da floresta são feitos de plástico", "Não há nenhuma diferença, ambos são iguais", "Os do supermercado nascem no gelo"], a: 0, dica: "Um passa por controle de cultivo humano para consumo seguro.", explicacao: "Cogumelos de supermercado são cultivados especificamente para o consumo alimentar seguro, enquanto os da floresta na natureza podem ser tóxicos." },
    { q: "17. O que é uma infecção bacteriana?", o: ["Uma doença causada pela invasão de bactérias nocivas no corpo", "Uma alergia a picadas de abelha", "A falta de vitaminas na fruta", "Um vírus que mudou de nome"], a: 0, dica: "O próprio nome já diz qual microrganismo causador está agindo.", explicacao: "Ocorre quando bactérias prejudiciais entram no organismo e se multiplicam, causando sintomas de infecção." },
    { q: "18. Onde a levedura (yeast) consegue açúcares para realizar a fermentação dos biocombustíveis?", o: ["Em pedras de granito", "Em culturas agrícolas como milho e cana-de-açúcar", "Em cabos de eletricidade", "Em plásticos reciclados"], a: 1, dica: "Pense em grandes plantações brasileiras usadas para produzir etanol e açúcar.", explicacao: "A levedura fermenta os açúcares presentes em vegetais cultivados, como o milho e a cana-de-açúcar." },
    { q: "19. Por que as mãos devem ser lavadas antes das refeições?", o: ["Para esquentar os dedos", "Para eliminar microrganismos invisíveis acumulados ao tocar em objetos", "Para o garfo não escorregar", "Para colorir a pele"], a: 1, dica: "Evita que germes pegem carona da sua mão direto para a sua boca.", explicacao: "Lavar as mãos elimina bactérias e vírus coletados em superfícies ao longo do dia, impedindo que entrem no corpo." },
    { q: "20. O que significa dizer que um microrganismo é 'patogênico'?", o: ["Que ele é extremamente amigável", "Que ele é capaz de causar doenças", "Que ele produz luz no escuro", "Que ele vive apenas no espaço sideral"], a: 1, dica: "Pathos significa doença em grego.", explicacao: "Microrganismos patogênicos são aqueles que invadem o corpo e provocam enfermidades." },
    { q: "21. Qual dos seguintes reinos biológicos NÃO faz parte dos microrganismos clássicos estudados?", o: ["Bactérias", "Fungos microscópicos", "Mamíferos de grande porte", "Vírus e protozoários"], a: 2, dica: "Procure o grupo de animais gigantes da lista.", explicacao: "Mamíferos de grande porte são animais visíveis a olho nu, totalmente fora do grupo dos micróbios microscópicos." },
    { q: "22. O que o sistema imunológico faz ao receber uma vacina?", o: ["Fica desativado permanentemente", "Reconhece o invasor enfraquecido e cria anticorpos de defesa", "Transforma-se em uma bactéria", "Esfria a temperatura do corpo a zero grau"], a: 1, dica: "É como um treinamento militar para as células de defesa.", explicacao: "A vacina simula a presença do germe de forma segura, fazendo o sistema imune aprender a combatê-lo rapidamente." },
    { q: "23. O que são os fungos na cadeia alimentar da natureza?", o: ["Apenas parasitas sem utilidade ecológica", "Decompositores essenciais que reciclam matéria orgânica", "Criadores de raios solares", "Fontes de energia elétrica"], a: 1, dica: "Eles ajudam a limpar a floresta transformando restos em nutrientes para o solo.", explicacao: "Fungos atuam como decompositores vitais, quebrando matéria morta e devolvendo nutrientes essenciais ao solo." },
    { q: "24. Como os vírus se multiplicam?", o: ["Eles se dividem sozinhos na água limpa", "Eles precisam invadir células vivas de outros organismos para se replicar", "Eles crescem com luz solar direta como plantas", "Eles comem açúcar de cana"], a: 1, dica: "Eles precisam de um hospedeiro vivo para dar ordens e se clonar.", explicacao: "Os vírus não conseguem se reproduzir sozinhos; obrigatoriamente precisam sequestrar uma célula viva para se multiplicar." },
    { q: "25. Qual é o papel das bactérias chamadas 'decompositoras'?", o: ["Poluir o ar das grandes cidades", "Transformar restos de plantas e animais mortos em nutrientes para a terra", "Produzir plástico industrial", "Atacar computadores"], a: 1, dica: "Eles fecham o ciclo da vida na natureza.", explicacao: "Bactérias decompositoras quebram matéria orgânica morta, enriquecendo o solo para novas plantas crescerem." },
    { q: "26. O que acontece se bebermos água de um rio cheio de micróbios sem tratamento?", o: ["Ficamos mais fortes instantaneamente", "Corremos sério risco de contrair infecções intestinais e doenças", "Ganhamos superpoderes", "A água vira suco de laranja"], a: 1, dica: "A água não tratada contém agentes patogênicos perigosos.", explicacao: "Água sem saneamento ou fervura contém bactérias e protozoários nocivos que provocam infecções graves." },
    { q: "27. Por que o pão cresce quando adicionamos fermento (yeast)?", o: ["Porque o fungo produz gases durante a fermentação que estufam a massa", "Porque o calor derrete a farinha", "Porque o sal evapora", "Porque a água vira pedra"], a: 0, dica: "O gás liberado pelo micro-organismo cria bolhas de ar no pão.", explicacao: "O yeast consome açúcares da massa e libera dióxido de carbono, formando bolhas de ar que fazem o pão crescer." },
    { q: "28. Qual microrganismo é usado diretamente na fabricação de queijos e iogurtes?", o: ["Vírus da gripe", "Bactérias lácticas (como o Lactobacillus)", "Amoebas gigantes", "Fungos venenosos da floresta"], a: 1, dica: "O próprio nome 'lático' lembra leite.", explicacao: "Bactérias benéficas fermentam o leite, transformando-o em iogurtes e queijos saborosos." },
    { q: "29. O que caracteriza um ambiente extremo onde micróbios sobrevivem?", o: ["Temperaturas ferventes, congelantes ou alta pressão submarina", "Salas de aula com ar condicionado desligado", "Supermercados limpos", "Lojas de shopping"], a: 0, dica: "Locais onde seres humanos morrem instantaneamente.", explicacao: "Ambientes extremos possuem condições inóspitas, como calor de fontes termais ou gelo profundo, onde apenas micróbios resistem." },
    { q: "30. Qual é a principal arma do corpo humano contra infecções virais combatidas por vacinas?", o: ["Antibióticos sintéticos", "Anticorpos produzidos pelo próprio sistema imunológico", "Vitaminas de plástico", "Gripes diárias"], a: 1, dica: "O corpo cria suas próprias defesas com ajuda do imunizante.", explicacao: "O sistema imunológico produz anticorpos específicos para neutralizar e destruir os vírus invasores." },
    { q: "31. Os vírus são considerados seres vivos completos por todos os cientistas?", o: ["Sim, eles comem, respiram e se reproduzem sozinhos", "Há debates, pois fora de uma célula hospedeira eles não têm metabolismo próprio", "Não, são pedaços de vidro", "Sim, pois constroem casas"], a: 1, dica: "Eles ficam 'inativos' se não estiverem infectando alguém.", explicacao: "Fora de uma célula viva, os vírus ficam inertes e cristalizados, levantando debates científicos sobre sua vida fora de um hospedeiro." },
    { q: "32. O que o uso excessivo e errado de antibióticos pode causar?", o: ["Superbactérias resistentes aos remédios", "Cabelos loiros", "Aumento da altura", "Imunidade eterna a tudo"], a: 0, dica: "As bactérias aprendem a se defender do medicamento se ele for mal utilizado.", explicacao: "Usar antibióticos sem necessidade cria bactérias resistentes, tornando infecções futuras muito mais difíceis de curar." },
    { q: "33. Como o iogurte se forma a partir do leite?", o: ["Por meio da ação de bactérias benéficas que fermentam o leite", "Por congelamento rápido no Polo Norte", "Pela adição de açúcar refinado puro", "Por evaporação em panelas de ferro"], a: 0, dica: "Processo de fermentação láctica.", explicacao: "Bactérias especiais consomem a lactose do leite e o transformam em iogurte azedinho e nutritivo." },
    { q: "34. Qual é a importância ecológica geral dos microrganismos no planeta?", o: ["Eles destroem todo o oxigênio da Terra", "Eles sustentam ciclos de nutrientes, decomposição e cadeias alimentares", "Eles servem apenas para causar pandemias", "Eles controlam o trânsito das cidades"], a: 1, dica: "Sem eles, o planeta ficaria soterrado em lixo orgânico.", explicacao: "Microrganismos sustentam a vida na Terra ao reciclar nutrientes e basear teias alimentares fundamentais." },
    { q: "35. O que é um parasita interno no corpo humano?", o: ["Um organismo que vive dentro de outro e retira nutrientes causando danos", "Um órgão de reserva de gordura", "Uma célula muscular forte", "Uma vitamina líquida"], a: 0, dica: "Ele mora de aluguel e ainda prejudica o hospedeiro.", explicacao: "Parasitas internos habitam o corpo de outros seres vivos para se alimentar, gerando doenças e mal-estar." },
    { q: "36. Qual é a melhor forma de impedir que micróbios de uma carne crua contaminem outros alimentos na cozinha?", o: ["Usar tábuas e utensílios separados e lavar bem as mãos", "Deixar a carne exposta ao sol por 5 minutos", "Assoprar a carne", "Guardar tudo na gaveta de roupas"], a: 0, dica: "Evita a contaminação cruzada de alimentos.", explicacao: "Separar utensílios e higienizar superfícies impede que bactérias da carne crua passem para alimentos prontos." },
    { q: "37. O what os cientistas usam para enxergar bactérias e vírus com clareza?", o: ["Lupas comuns de leitura", "Microscópios potentes", "Óculos escuros", "Telescópios espaciais"], a: 1, dica: "Eles são microscópicos, logo precisam de um instrumento específico.", explicacao: "Como são invisíveis a olho nu, o uso de microscópios avançados é obrigatório para estudá-los." },
    { q: "38. Por que a pele humana saudável possui bactérias benéficas?", o: ["Para atrair insetos", "Para formar uma barreira protetora contra germes invasores patogênicos", "Para dar cor à pele", "Para produzir suor doce"], a: 1, dica: "A flora da pele nos defende de invasores piores.", explicacao: "A microbiota da pele atua como um escudo protetor natural, ocupando espaço e combatendo micróbios patogênicos." },
    { q: "39. Qual microrganismo é fundamental na produção de etanol combustível através da cana?", o: ["Levedura (Yeast)", "Vírus da gripe aviária", "Amoeba gigante", "Bactéria do tétano"], a: 0, dica: "O mesmo fungo que faz o pão crescer faz o biocombustível.", explicacao: "A levedura fermenta o caldo da cana transformando o açúcar em álcool (etanol)." },
    { q: "40. O que devemos fazer sempre antes de cozinhar ou comer?", o: ["Lavar bem as mãos com água e sabão", "Correr em volta da mesa", "Desligar todas as luzes da casa", "Molhar os sapatos"], a: 0, dica: "Higiene básica para garantir saúde e evitar micróbios indesejados.", explicacao: "Lavar as mãos com água e sabão é a medida número um de prevenção contra infecções alimentares e germes." }
];

export default function Home() {
    const [respostas, setRespostas] = useState({});
    const [dicasVisiveis, setDicasVisiveis] = useState({});
    const [explicacoesVisiveis, setExplicacoesVisiveis] = useState({});
    const [resultado, setResultado] = useState(null);
    const [notaEstilo, setNotaEstilo] = useState({});

    useEffect(() => {
        // Injeta o CSS institucional da Escola Canadense de Brasília no head de forma segura
        if (!document.getElementById('quiz-styles')) {
            const style = document.createElement('style');
            style.id = 'quiz-styles';
            style.innerHTML = `
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 850px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 6px solid #E31837; }
                h1 { text-align: center; color: #E31837; margin-bottom: 5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
                .subtitle { text-align: center; color: #2C3E50; margin-bottom: 25px; font-weight: 600; font-size: 1.1em; }
                
                .review-box { background-color: #f8f9fa; border: 2px solid #2C3E50; border-radius: 8px; padding: 20px; margin-bottom: 35px; }
                .review-box h2 { color: #E31837; margin-top: 0; font-size: 1.3em; border-bottom: 2px solid #eaeaea; padding-bottom: 8px; }
                .review-box p, .review-box li { color: #2C3E50; font-size: 0.95em; line-height: 1.5; }
                .review-box ul { padding-left: 20px; margin-bottom: 0; }
                .review-box li { margin-bottom: 10px; }

                .question { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; }
                .question p { font-weight: bold; font-size: 1.15em; color: #2C3E50; }
                
                .options label { display: block; margin: 8px 0; cursor: pointer; padding: 10px; border-radius: 6px; transition: all 0.2s; border: 1px solid transparent; }
                .options label:hover { background: #fdf2f2; border: 1px solid #fadbdc; }
                
                .btn-group { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
                
                .hint-btn { background-color: #f39c12; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .hint-btn:hover { background-color: #d68910; }
                
                .exp-btn { background-color: #2C3E50; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .exp-btn:hover { background-color: #1a252f; }

                .hint-text { margin-top: 12px; padding: 12px; background-color: #fff9e6; border-left: 5px solid #f39c12; color: #5d4037; font-size: 0.95em; font-style: italic; border-radius: 0 4px 4px 0; }
                .explanation-text { margin-top: 12px; padding: 12px; background-color: #fdf2f2; border-left: 5px solid #E31837; color: #c0392b; font-size: 0.95em; border-radius: 0 4px 4px 0; }
                
                .btn-main { display: block; width: 100%; color: white; border: none; padding: 16px; font-size: 1.2em; border-radius: 6px; cursor: pointer; margin-top: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: opacity 0.2s; }
                .btn-corrigir { background: #27ae60; box-shadow: 0 4px 6px rgba(39,174,96,0.2); }
                .btn-corrigir:hover { background: #219653; }
                .btn-limpar { background: #E31837; margin-top: 12px; box-shadow: 0 4px 6px rgba(227,24,55,0.2); }
                .btn-limpar:hover { background: #c0392b; }
                
                #result { margin-top: 30px; font-size: 1.4em; text-align: center; font-weight: bold; padding: 20px; border-radius: 8px; }
            `;
            document.head.appendChild(style);
        }
    }, []);

    const selecionarResposta = (qIndex, optIndex) => {
        setRespostas(prev => ({ ...prev, [qIndex]: optIndex }));
        setExplicacoesVisiveis(prev => ({ ...prev, [qIndex]: true }));
    };

    const toggleDica = (qIndex) => {
        setDicasVisiveis(prev => ({ ...prev, [qIndex]: !prev[qIndex] }));
    };

    const toggleExplicacao = (qIndex) => {
        setExplicacoesVisiveis(prev => ({ ...prev, [qIndex]: !prev[qIndex] }));
    };

    const corrigirProva = () => {
        let acertos = 0;
        questoes.forEach((item, index) => {
            if (respostas[index] === item.a) {
                acertos++;
            }
            // Abre todas as explicações ao corrigir
            setExplicacoesVisiveis(prev => ({ ...prev, [index]: true }));
        });

        const nota = (acertos / questoes.length) * 10;
        setResultado(`Henrique, você acertou ${acertos} de ${questoes.length} questões! Sua nota foi: ${nota.toFixed(1)}`);
        
        if (nota >= 7) {
            setNotaEstilo({ backgroundColor: "#e8f8f5", color: "#27ae60" });
        } else {
            setNotaEstilo({ backgroundColor: "#fdf2f2", color: "#E31837" });
        }

        if (typeof window !== 'undefined') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    const limparProva = () => {
        setRespostas({});
        setDicasVisiveis({});
        setExplicacoesVisiveis({});
        setResultado(null);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <h1>Simulado de Ciências</h1>
            <div className="subtitle">Treinamento Especial para o Henrique - Grade 4 (&quot;Misunderstood Microbes&quot;)</div>
            
            <div className="review-box">
                <h2>📖 Revisão Detalhada &amp; Feedback de Desempenho (Ciências)</h2>
                <p>Aqui está o apanhado mastigado dos principais conceitos que o Henrique estudou em <strong>&quot;Misunderstood Microbes&quot;</strong>:</p>
                <ul>
                    <li><strong>O que são Microrganismos:</strong> Seres vivos minúsculos que sobrevivem em ambientes extremos (nuvens, vulcões submarinos, fontes termais, calotas polares e intestinos).</li>
                    <li><strong>Exemplos Benéficos Úteis:</strong> A levedura (Yeast) usada na alimentação/pães e em biocombustíveis; o Lactobacillus usado para fazer iogurtes; e o fungo Penicillium que produz antibióticos salvadores.</li>
                    <li><strong>Bactérias vs. Vírus (Atenção na Q4):</strong> Antibióticos combatem bactérias ruins, mas <strong>NÃO funcionam contra vírus</strong> (como a gripe), pois os vírus possuem estruturas totalmente diferentes e precisam de células hospedeiras.</li>
                    <li><strong>Higiene e Vacinas:</strong> Vacinas funcionam como &quot;escudos de super-herói&quot;, treinando o sistema imunológico contra germes. Práticas como lavar as mãos evitam a contaminação cruzada por superfícies tocadas (como maçanetas).</li>
                    <li><strong>Tipos e Riscos:</strong> Amostras de água não tratada contêm bactérias, protozoários e vírus; parasitas internos causam dores abdominais; e cogumelos de supermercado são seguros para consumo, ao contrário dos selvagens na floresta.</li>
                </ul>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                {questoes.map((item, index) => {
                    const respostaDada = respostas[index];
                    return (
                        <div className="question" key={index}>
                            <p>{item.q}</p>
                            <div className="options">
                                {item.o.map((opt, optIndex) => {
                                    let estiloLabel = {};
                                    if (respostaDada !== undefined) {
                                        if (optIndex === item.a) {
                                            estiloLabel = { backgroundColor: "#d4edda", borderColor: "#c3e6cb" }; // Correto fica verde
                                        } else if (respostaDada === optIndex) {
                                            estiloLabel = { backgroundColor: "#f8d7da", borderColor: "#f5c6cb" }; // Errado fica vermelho
                                        }
                                    }
                                    return (
                                        <label key={optIndex} style={estiloLabel}>
                                            <input 
                                                type="radio" 
                                                name={`q${index}`} 
                                                checked={respostaDada === optIndex}
                                                onChange={() => selecionarResposta(index, optIndex)} 
                                            /> {opt}
                                        </label>
                                    );
                                })}
                            </div>

                            <div className="btn-group">
                                <button type="button" className="hint-btn" onClick={() => toggleDica(index)}>💡 Ver Dica</button>
                                <button type="button" className="exp-btn" onClick={() => toggleExplicacao(index)}>📚 Ver Explicação da Matéria</button>
                            </div>

                            {dicasVisiveis[index] && <div className="hint-text">{item.dica}</div>}
                            {explicacoesVisiveis[index] && <div className="explanation-text"><strong>📚 Explicação:</strong> {item.explicacao}</div>}
                        </div>
                    );
                })}
            </form>

            <button type="button" className="btn-main btn-corrigir" onClick={corrigirProva}>Verificar Respostas e Nota</button>
            <button type="button" className="btn-main btn-limpar" onclick="null" onClick={limparProva}>Limpar Respostas e Refazer</button>
            {resultado && <div id="result" style={notaEstilo}>{resultado}</div>}
        </div>
    );
}