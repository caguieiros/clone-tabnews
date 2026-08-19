// 1. DADOS DO SIMULADO
const questoes = [
    { q: "1. O que significa a palavra 'democracia'?", o: ["Governo do povo", "Governo de uma só pessoa", "Governo das leis escritas", "Governo dos prefeitos"], a: 0, dica: "Lembre-se da origem da palavra: 'demo' significa povo e 'cracia' significa poder.", explicacao: "Segundo o livro, Democracia é uma palavra inventada há milhares de anos pelo povo grego e significa 'governo do povo'." },
    { q: "2. A partir de qual idade os jovens podem começar a votar no Brasil?", o: ["14 anos", "16 anos", "18 anos", "21 anos"], a: 1, dica: "É antes de completarem a maioridade (18 anos), mas não podem ser tão novos.", explicacao: "O livro diz que, por meio do voto, jovens a partir dos 16 anos, adultos e idosos praticam a cidadania ativamente." },
    { q: "3. O que significa ser cidadão?", o: ["Apenas pagar impostos em dia", "Morar em uma grande cidade", "Conhecer e exercer seus direitos e deveres", "Viajar para fora do país"], a: 2, dica: "Ser cidadão é participar da sociedade, respeitando regras e tendo garantias.", explicacao: "Ser cidadão é conhecer e exercer seus direitos e deveres para viver bem em sociedade." },
    { q: "4. A cidadania é praticada apenas na hora do voto de quatro em quatro anos?", o: ["Verdadeiro", "Falso"], a: 1, dica: "Pense em atitudes como respeitar o próximo, não jogar lixo na rua e ajudar a comunidade.", explicacao: "Falso. O livro explica que a cidadania não é praticada só por meio do voto, mas em várias atividades do dia a dia em que se realiza deveres e tem direitos respeitados." },
    { q: "5. Qual é o nome do documento que guarda as leis mais importantes do país e garante a igualdade?", o: ["Código de Trânsito", "Constituição Federal", "Regimento Escolar", "Lei Orgânica Municipal"], a: 1, dica: "Ela também é conhecida como a 'Lei Maior' do nosso país.", explicacao: "As leis mais importantes fazem parte da Constituição Federal, um documento que garante a igualdade entre todos os brasileiros." },
    { q: "6. O que significa o ato de 'sancionar' uma lei?", o: ["Cancelar uma lei antiga", "Tornar válido, aprovar", "Dar uma ordem militar", "Escrever um projeto"], a: 1, dica: "É o que o Presidente ou Prefeito faz quando concorda com uma lei criada.", explicacao: "Segundo o glossário do livro, Sancionar é o mesmo que tornar válido, aprovar." },
    { q: "7. O que significa o ato de 'decretar' uma lei?", o: ["Dar uma ordem", "Votar na Câmara", "Arquivar um processo", "Julgar um réu"], a: 0, dica: "Quando um governante emite um decreto, ele está dando um comando.", explicacao: "Segundo o glossário do livro, Decretar é o mesmo que dar uma ordem." },
    { q: "8. Qual é a posição do Brasil no ranking de países mais populosos do mundo?", o: ["1º lugar", "3º lugar", "5º lugar", "7º lugar"], a: 3, dica: "Fica logo depois do sexto lugar.", explicacao: "O livro destaca que o Brasil é o sétimo país mais populoso do mundo." },
    { q: "9. Quais são os três níveis em que o governo do Brasil é dividido?", o: ["Local, Regional e Nacional", "Federal, Estadual e Municipal", "Capital, Interior e Litoral", "Executivo, Legislativo e Judiciário"], a: 1, dica: "Pense no país inteiro, depois na região (estado) e depois na sua cidade.", explicacao: "A política brasileira é dividida em três níveis de governo: o municipal, o estadual e o federal." },
    { q: "10. Em quantas unidades federativas (estados + Distrito Federal) o Brasil é dividido?", o: ["26 unidades", "27 unidades", "30 unidades", "50 unidades"], a: 1, dica: "São 26 estados mais o nosso Distrito Federal onde fica Brasília.", explicacao: "O Brasil é um país dividido em 27 unidades federativas (sendo 26 estados e o Distrito Federal)." },
    { q: "11. Quais são os três poderes que comandam a política brasileira?", o: ["Prefeito, Governador e Presidente", "Federal, Estadual e Municipal", "Executivo, Legislativo e Judiciário", "Polícia, Justiça e Leis"], a: 2, dica: "Um executa, o outro cria leis e o último julga.", explicacao: "Os três níveis de governo são comandados por diferentes representantes dos poderes Legislativo, Executivo e Judiciário." },
    { q: "12. Qual é a função principal do Poder Legislativo?", o: ["Executar as leis e administrar", "Fazer as leis serem cumpridas", "Propor e aprovar projetos de leis", "Julgar os criminosos"], a: 2, dica: "A palavra 'legislar' tem a ver com criar leis para o povo.", explicacao: "O Poder Legislativo é responsável por propor e aprovar projetos de leis, além de fiscalizar o Poder Executivo." },
    { q: "13. Qual é a função principal do Poder Executivo?", o: ["Administrar o país, estado ou município e executar as leis", "Apenas criar novas leis", "Julgar os conflitos da sociedade", "Fiscalizar o trânsito exclusivamente"], a: 0, dica: "Como o nome diz, eles 'executam' as ações, administram o dinheiro e os serviços.", explicacao: "O Poder Executivo é responsável por executar as leis, colocar em prática, além de administrar o funcionamento dos municípios, estados e do país." },
    { q: "14. Qual é a função principal do Poder Judiciário?", o: ["Criar leis federais", "Fazer as leis serem cumpridas e julgar conflitos", "Eleger os prefeitos", "Cuidar da limpeza das ruas"], a: 1, dica: "Pense nos juízes, eles trabalham para garantir a justiça.", explicacao: "O Poder Judiciário é responsável por fazer as leis serem cumpridas, garantindo que os conflitos sejam resolvidos de maneira justa." },
    { q: "15. Quem é o representante máximo do Poder Executivo no nível Federal?", o: ["O Governador", "O Prefeito", "O Presidente da República", "O Ministro do STF"], a: 2, dica: "Ele trabalha em Brasília e governa o Brasil todo.", explicacao: "O Poder Executivo Federal é representado pelo presidente da República." },
    { q: "16. Quem representa o Poder Legislativo no nível Federal?", o: ["Vereadores", "Deputados Federais e Senadores", "Deputados Estaduais", "Juízes de Direito"], a: 1, dica: "São dois cargos e eles trabalham no Congresso Nacional.", explicacao: "Os deputados federais e os senadores são os representantes do Poder Legislativo no nível federal." },
    { q: "17. Quem forma o Poder Judiciário no nível Federal?", o: ["Os vereadores", "Os ministros do Supremo Tribunal Federal (STF)", "Os prefeitos das capitais", "Os governadores"], a: 1, dica: "É a corte mais alta do país, formada por 11 ministros.", explicacao: "O Supremo Tribunal Federal (STF) faz parte do Poder Judiciário Federal e é formado por onze ministros." },
    { q: "18. Existe representação do Poder Judiciário no nível Municipal?", o: ["Sim, o juiz municipal", "Não existem representantes municipais do Poder Judiciário", "Sim, o promotor da cidade", "Sim, o delegado de polícia"], a: 1, dica: "O município só tem o Prefeito (Executivo) e os Vereadores (Legislativo).", explicacao: "O livro diz textualmente: 'Não existem representantes municipais do Poder Judiciário'." },
    { q: "19. Quem é o representante do Poder Executivo no nível Estadual?", o: ["O Prefeito", "O Governador", "O Presidente", "O Deputado Estadual"], a: 1, dica: "É ele quem cuida das polícias militar e civil do estado.", explicacao: "O governador é responsável pelo Poder Executivo estadual." },
    { q: "20. Quem é o representante do Poder Legislativo no nível Estadual?", o: ["Senadores", "Deputados Estaduais", "Vereadores", "Ministros"], a: 1, dica: "O nome do cargo já indica o nível que ele atua: Estado.", explicacao: "O Poder Legislativo nos estados é responsabilidade dos deputados estaduais." },
    { q: "21. Quem realiza as atividades do Poder Judiciário nos estados?", o: ["Juízes de direito e desembargadores", "Prefeitos e secretários", "Governadores", "Deputados"], a: 0, dica: "Eles usam aquelas togas (roupas pretas) nos tribunais.", explicacao: "Nos estados, os juízes de direito (e os desembargadores) realizam as atividades do Poder Judiciário." },
    { q: "22. Quem representa o Poder Executivo no nível Municipal?", o: ["O Vereador", "O Prefeito", "O Juiz", "O Governador"], a: 1, dica: "É ele quem administra a sua cidade (município).", explicacao: "O prefeito é o representante do Poder Executivo no município e trabalha na prefeitura." },
    { q: "23. Quem representa o Poder Legislativo no nível Municipal?", o: ["O Prefeito", "O Deputado", "O Vereador", "O Senador"], a: 2, dica: "Eles trabalham na Câmara Municipal debatendo sobre os bairros da cidade.", explicacao: "Os vereadores são os responsáveis pelo Poder Legislativo nos municípios." },
    { q: "24. Em qual edifício o Presidente da República trabalha em Brasília?", o: ["Congresso Nacional", "Supremo Tribunal Federal", "Palácio do Planalto", "Câmara dos Deputados"], a: 2, dica: "É um prédio desenhado por Oscar Niemeyer, famoso pela sua rampa.", explicacao: "O presidente da República trabalha, principalmente, no Palácio do Planalto, em Brasília." },
    { q: "25. Onde trabalham os Deputados Federais e Senadores?", o: ["Na Câmara Municipal", "No Congresso Nacional", "No Palácio do Governo", "No Fórum"], a: 1, dica: "Aquele prédio em Brasília que tem dois pratos (um virado para cima e outro para baixo).", explicacao: "Eles trabalham na Câmara dos Deputados e no Senado, que ficam no Congresso Nacional." },
    { q: "26. Onde o Governador do estado costuma trabalhar?", o: ["Na Prefeitura", "Na sede do governo do estado", "Na Câmara dos Deputados", "No Supremo Tribunal"], a: 1, dica: "Fica sempre na capital do estado, num local específico para o governo estadual.", explicacao: "O governador trabalha na sede do governo do estado, que costuma ser um prédio histórico localizado na capital estadual." },
    { q: "27. Onde trabalham os Deputados Estaduais?", o: ["Na Assembleia Legislativa", "No Senado Federal", "Na Câmara Municipal", "No Tribunal de Contas"], a: 0, dica: "O nome começa com 'Assembleia'.", explicacao: "Os deputados estaduais trabalham na Assembleia Legislativa do estado." },
    { q: "28. Onde trabalham os juízes de direito estaduais?", o: ["No Congresso", "No Tribunal de Justiça e fóruns", "Na Prefeitura", "Na Assembleia"], a: 1, dica: "Lembre-se da palavra 'Justiça'.", explicacao: "Eles realizam as atividades em vários lugares, como no tribunal de justiça e nos fóruns." },
    { q: "29. Onde trabalham os vereadores da cidade?", o: ["Na Câmara Municipal", "No Palácio do Planalto", "No Senado", "No Supremo Tribunal"], a: 0, dica: "É o local de leis focado só na cidade (município).", explicacao: "Os vereadores trabalham na Câmara Municipal." },
    { q: "30. Qual é a duração do mandato do Presidente, dos Governadores e dos Prefeitos?", o: ["2 anos", "4 anos", "6 anos", "8 anos"], a: 1, dica: "É o mesmo intervalo de tempo entre uma Copa do Mundo e outra.", explicacao: "O mandato desses cargos (presidente, governadores, deputados federais/estaduais, prefeitos e vereadores) tem duração de quatro anos." },
    { q: "31. Qual é a duração do mandato dos Senadores no Brasil?", o: ["4 anos", "6 anos", "8 anos", "Vitalício"], a: 2, dica: "Eles ficam no cargo o dobro do tempo do Presidente.", explicacao: "O material ensina que o mandato dos senadores tem duração de oito anos." },
    { q: "32. Como a população escolhe os prefeitos, governadores e o presidente?", o: ["Por meio de sorteio", "Por meio do voto", "Por indicação do STF", "Por votação dos vereadores"], a: 1, dica: "Usamos a urna eletrônica em uma democracia.", explicacao: "Eles são escolhidos por meio do voto da população." },
    { q: "33. Como os juízes de direito entram para a carreira pública?", o: ["Por meio de eleição popular", "Por meio de concurso público", "Por indicação do prefeito", "Por sorteio entre os cidadãos"], a: 1, dica: "Eles precisam estudar muito e passar em uma prova bem difícil.", explicacao: "Os juízes de direito devem ser aprovados por meio de concurso público." },
    { q: "34. A que cargo os juízes de direito podem ser promovidos se apresentarem um bom trabalho?", o: ["A desembargadores", "A prefeitos", "A senadores", "A ministros sem aprovação"], a: 0, dica: "É o título dado aos juízes que trabalham nos tribunais de segunda instância.", explicacao: "Se os juízes passarem muitos anos nesse cargo e apresentarem bom trabalho, podem ser promovidos a desembargadores." },
    { q: "35. Quantos ministros compõem o Supremo Tribunal Federal (STF)?", o: ["5 ministros", "9 ministros", "11 ministros", "15 ministros"], a: 2, dica: "É a mesma quantidade de jogadores titulares de um time de futebol.", explicacao: "O Supremo Tribunal Federal (STF) é formado por onze ministros." },
    { q: "36. Quem é o responsável por indicar os novos ministros do STF?", o: ["O Presidente da República", "O Congresso Nacional", "O povo em votação direta", "Os próprios juízes"], a: 0, dica: "O cargo mais alto do Executivo Nacional escolhe o nome.", explicacao: "Os ministros do STF são indicados pelo presidente da República." },
    { q: "37. Quem precisa aprovar os nomes dos ministros indicados ao STF antes de tomarem posse?", o: ["Os Deputados Estaduais", "Os Senadores", "Os Prefeitos", "A população em plebiscito"], a: 1, dica: "São os políticos de mandato longo (8 anos) que ficam no Congresso.", explicacao: "Eles devem ser aprovados pelos senadores antes de iniciarem no cargo." },
    { q: "38. Quem é o responsável por administrar o dinheiro público para limpar ruas e cuidar do trânsito municipal?", o: ["O Presidente", "O Governador", "O Prefeito", "O Deputado"], a: 2, dica: "Municipal = Município (Sua cidade).", explicacao: "O prefeito é responsável por administrar o dinheiro público do município para, por exemplo, realizar limpeza, manutenção de praças e organização do trânsito." },
    { q: "39. Quem é o principal responsável por cuidar da saúde e segurança pública no âmbito estadual?", o: ["O Prefeito", "O Governador", "O Vereador", "O Juiz Municipal"], a: 1, dica: "Estadual = Estado (Quem comanda a polícia militar, por exemplo).", explicacao: "O governador deve usar recursos públicos para cuidar de áreas como a educação, a saúde e a segurança do estado." },
    { q: "40. Os vereadores têm como função propor e alterar leis para qual âmbito?", o: ["Para o país inteiro", "Apenas para o município", "Apenas para o estado", "Para os tribunais de justiça"], a: 1, dica: "Vereadores são representantes locais, que cuidam do seu bairro e da sua cidade.", explicacao: "Os vereadores devem alterar ou sugerir leis para o município, pois compõem o Poder Legislativo no nível municipal." }
];

// 2. INJEÇÃO DE CSS
function injetarCSS() {
    // Evita duplicar a tag style se o script rodar mais de uma vez
    if (document.getElementById('quiz-styles')) return;

    const style = document.createElement('style');
    style.id = 'quiz-styles';
    style.innerHTML = `
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 6px solid #E31837; }
        h1 { text-align: center; color: #E31837; margin-bottom: 5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
        .subtitle { text-align: center; color: #2C3E50; margin-bottom: 35px; font-weight: 600; font-size: 1.1em; }
        
        .question { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; }
        .question p { font-weight: bold; font-size: 1.15em; color: #2C3E50; }
        
        .options label { display: block; margin: 8px 0; cursor: pointer; padding: 10px; border-radius: 6px; transition: all 0.2s; border: 1px solid transparent; }
        .options label:hover { background: #fdf2f2; border: 1px solid #fadbdc; }
        
        .btn-group { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
        
        .hint-btn { background-color: #f39c12; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .hint-btn:hover { background-color: #d68910; }
        
        .exp-btn { background-color: #2C3E50; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .exp-btn:hover { background-color: #1a252f; }

        .hint-text { display: none; margin-top: 12px; padding: 12px; background-color: #fff9e6; border-left: 5px solid #f39c12; color: #5d4037; font-size: 0.95em; font-style: italic; border-radius: 0 4px 4px 0; }
        .explanation-text { display: none; margin-top: 12px; padding: 12px; background-color: #fdf2f2; border-left: 5px solid #E31837; color: #c0392b; font-size: 0.95em; border-radius: 0 4px 4px 0; }
        
        .btn-main { display: block; width: 100%; color: white; border: none; padding: 16px; font-size: 1.2em; border-radius: 6px; cursor: pointer; margin-top: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: opacity 0.2s; }
        .btn-corrigir { background: #27ae60; box-shadow: 0 4px 6px rgba(39,174,96,0.2); }
        .btn-corrigir:hover { background: #219653; }
        .btn-limpar { background: #E31837; margin-top: 12px; box-shadow: 0 4px 6px rgba(227,24,55,0.2); }
        .btn-limpar:hover { background: #c0392b; }
        
        #result { margin-top: 30px; font-size: 1.4em; text-align: center; font-weight: bold; padding: 20px; border-radius: 8px; }
    `;
    document.head.appendChild(style);
}

// 3. CONSTRUÇÃO DO DOM
function renderizarApp() {
    // Configura o body caso o arquivo seja rodado em uma tela em branco
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#f5f5f5";

    let html = `
        <div class="container">
            <h1>Simulado de Geografia</h1>
            <div class="subtitle">Treinamento Especial para o Henrique - 4º Ano</div>
            <form id="quizForm">
    `;

    questoes.forEach((item, index) => {
        html += `<div class="question"><p>${item.q}</p><div class="options">`;
        
        item.o.forEach((opt, optIndex) => {
            html += `<label><input type="radio" name="q${index}" value="${optIndex}"> ${opt}</label>`;
        });
        
        html += `</div>
            <div class="btn-group">
                <button type="button" class="hint-btn" onclick="window.toggleDica(${index})">💡 Ver Dica</button>
                <button type="button" class="exp-btn" onclick="window.toggleExplicacao(${index})">📚 Ver Explicação do Livro</button>
            </div>
            
            <div id="dica${index}" class="hint-text">${item.dica}</div>
            <div id="explicacao${index}" class="explanation-text"><strong>📚 Pelo Livro:</strong> ${item.explicacao}</div>
        </div>`;
    });

    html += `
            </form>
            <button type="button" class="btn-main btn-corrigir" onclick="window.corrigirProva()">Verificar Respostas e Nota</button>
            <button type="button" class="btn-main btn-limpar" onclick="window.limparProva()">Limpar Respostas e Refazer</button>
            <div id="result"></div>
        </div>
    `;

    // Injeta todo o conteúdo montado diretamente no body
    document.body.innerHTML = html;
}

// 4. LÓGICA DE INTERAÇÃO (Adicionadas ao objeto window para uso global)
window.toggleDica = function(index) {
    const dicaDiv = document.getElementById(`dica${index}`);
    dicaDiv.style.display = (dicaDiv.style.display === "none" || dicaDiv.style.display === "") ? "block" : "none";
};

window.toggleExplicacao = function(index) {
    const expDiv = document.getElementById(`explicacao${index}`);
    expDiv.style.display = (expDiv.style.display === "none" || expDiv.style.display === "") ? "block" : "none";
};

window.corrigirProva = function() {
    let acertos = 0;
    
    questoes.forEach((item, index) => {
        const radios = document.getElementsByName(`q${index}`);
        let respondido = -1;
        
        for (let r of radios) {
            if (r.checked) respondido = parseInt(r.value);
            r.parentElement.style.background = "transparent";
            r.parentElement.style.borderColor = "transparent";
        }

        if (respondido === item.a) {
            acertos++;
            if(radios[respondido]) {
                radios[respondido].parentElement.style.background = "#d4edda";
                radios[respondido].parentElement.style.borderColor = "#c3e6cb";
            }
        } else {
            if(respondido !== -1 && radios[radios.length > 0 ? respondido : 0]) {
                radios[respondido].parentElement.style.background = "#f8d7da";
                radios[respondido].parentElement.style.borderColor = "#f5c6cb";
            }
            if(radios[item.a]) {
                radios[item.a].parentElement.style.background = "#d4edda";
                radios[item.a].parentElement.style.borderColor = "#c3e6cb";
            }
        }
        
        // Exibe a explicação assim que for corrigido
        document.getElementById(`explicacao${index}`).style.display = "block";
    });

    const nota = (acertos / questoes.length) * 10;
    const resDiv = document.getElementById('result');
    
    if (nota >= 7) {
        resDiv.style.backgroundColor = "#e8f8f5";
        resDiv.style.color = "#27ae60";
    } else {
        resDiv.style.backgroundColor = "#fdf2f2";
        resDiv.style.color = "#E31837";
    }
    
    resDiv.innerHTML = `Henrique, você acertou ${acertos} de ${questoes.length} questões!<br>Sua nota foi: <span>${nota.toFixed(1)}</span>`;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

window.limparProva = function() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
        input.parentElement.style.background = "transparent";
        input.parentElement.style.borderColor = "transparent";
    });
    
    document.querySelectorAll('.hint-text').forEach(dica => dica.style.display = "none");
    document.querySelectorAll('.explanation-text').forEach(exp => exp.style.display = "none");
    
    const resDiv = document.getElementById('result');
    resDiv.innerHTML = "";
    resDiv.style.backgroundColor = "transparent";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 5. INICIALIZAÇÃO
// Espera o documento carregar ou injeta direto se já estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        injetarCSS();
        renderizarApp();
    });
} else {
    injetarCSS();
    renderizarApp();
}