import Head from 'next/head';
import { useState } from 'react';

// 1. DADOS DO SIMULADO (Mantidos exatamente iguais)
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

// 2. COMPONENTE REACT PRINCIPAL
export default function SimuladoGeografia() {
    // Gerenciamento de estado (React State)
    const [respostas, setRespostas] = useState({});
    const [dicasAtivas, setDicasAtivas] = useState({});
    const [explicacoesAtivas, setExplicacoesAtivas] = useState({});
    const [resultadoFinal, setResultadoFinal] = useState(null);

    // Funções de interação
    const toggleDica = (index) => {
        setDicasAtivas(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const toggleExplicacao = (index) => {
        setExplicacoesAtivas(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const selecionarResposta = (perguntaIndex, opcaoIndex) => {
        if (resultadoFinal) return; // Trava as opções se já tiver corrigido
        setRespostas(prev => ({ ...prev, [perguntaIndex]: opcaoIndex }));
    };

    const corrigirProva = () => {
        let acertos = 0;
        
        // Conta os acertos e abre todas as explicações
        const novasExplicacoes = {};
        questoes.forEach((item, index) => {
            if (respostas[index] === item.a) acertos++;
            novasExplicacoes[index] = true;
        });

        setExplicacoesAtivas(novasExplicacoes);
        
        const nota = (acertos / questoes.length) * 10;
        setResultadoFinal({ acertos, nota });
        
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    const limparProva = () => {
        setRespostas({});
        setDicasAtivas({});
        setExplicacoesAtivas({});
        setResultadoFinal(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Estilos dinâmicos das opções baseado no resultado
    const getEstiloOpcao = (qIndex, optIndex) => {
        if (!resultadoFinal) return {}; // Antes de corrigir, estilo normal
        
        const respostaCerta = questoes[qIndex].a;
        const respostaEscolhida = respostas[qIndex];

        if (optIndex === respostaCerta) {
            return { background: "#d4edda", borderColor: "#c3e6cb" }; // Certa
        }
        
        if (optIndex === respostaEscolhida && respostaEscolhida !== respostaCerta) {
            return { background: "#f8d7da", borderColor: "#f5c6cb" }; // Errada
        }
        
        return {};
    };

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <Head>
                <title>Simulado de Geografia</title>
            </Head>

            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '6px solid #E31837' }}>
                <h1 style={{ textAlign: 'center', color: '#E31837', marginBottom: '5px', fontWeight: '800', textTransform: 'uppercase' }}>Simulado de Geografia</h1>
                <div style={{ textAlign: 'center', color: '#2C3E50', marginBottom: '35px', fontWeight: '600', fontSize: '1.1em' }}>Treinamento Especial para o Henrique - 4º Ano</div>
                
                {questoes.map((item, index) => (
                    <div key={index} style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eaeaea' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.15em', color: '#2C3E50' }}>{item.q}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {item.o.map((opt, optIndex) => (
                                <label 
                                    key={optIndex} 
                                    style={{ display: 'block', cursor: 'pointer', padding: '10px', borderRadius: '6px', border: '1px solid transparent', transition: 'all 0.2s', ...getEstiloOpcao(index, optIndex) }}
                                >
                                    <input 
                                        type="radio" 
                                        name={`q${index}`} 
                                        checked={respostas[index] === optIndex}
                                        onChange={() => selecionarResposta(index, optIndex)}
                                        disabled={!!resultadoFinal}
                                        style={{ marginRight: '10px' }}
                                    /> 
                                    {opt}
                                </label>
                            ))}
                        </div>
                        
                        <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                            <button type="button" onClick={() => toggleDica(index)} style={{ backgroundColor: '#f39c12', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>💡 Ver Dica</button>
                            <button type="button" onClick={() => toggleExplicacao(index)} style={{ backgroundColor: '#2C3E50', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>📚 Ver Explicação do Livro</button>
                        </div>
                        
                        {dicasAtivas[index] && (
                            <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#fff9e6', borderLeft: '5px solid #f39c12', color: '#5d4037', fontStyle: 'italic' }}>{item.dica}</div>
                        )}
                        
                        {explicacoesAtivas[index] && (
                            <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#fdf2f2', borderLeft: '5px solid #E31837', color: '#c0392b' }}><strong>📚 Pelo Livro:</strong> {item.explicacao}</div>
                        )}
                    </div>
                ))}

                <button type="button" onClick={corrigirProva} style={{ display: 'block', width: '100%', backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '16px', fontSize: '1.2em', borderRadius: '6px', cursor: 'pointer', marginTop: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Verificar Respostas e Nota
                </button>
                
                <button type="button" onClick={limparProva} style={{ display: 'block', width: '100%', backgroundColor: '#E31837', color: 'white', border: 'none', padding: '16px', fontSize: '1.2em', borderRadius: '6px', cursor: 'pointer', marginTop: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Limpar Respostas e Refazer
                </button>
                
                {resultadoFinal && (
                    <div style={{ marginTop: '30px', fontSize: '1.4em', textAlign: 'center', fontWeight: 'bold', padding: '20px', borderRadius: '8px', backgroundColor: resultadoFinal.nota >= 7 ? '#e8f8f5' : '#fdf2f2', color: resultadoFinal.nota >= 7 ? '#27ae60' : '#E31837' }}>
                        Henrique, você acertou {resultadoFinal.acertos} de {questoes.length} questões!<br/>
                        Sua nota foi: <span>{resultadoFinal.nota.toFixed(1)}</span>
                    </div>
                )}
            </div>
        </div>
    );
}