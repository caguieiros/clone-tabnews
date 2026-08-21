import React, { useState, useEffect } from 'react';

// 1. DADOS DO SIMULADO DE CIÊNCIAS EM INGLÊS COM TRADUÇÃO PARA PORTUGUÊS POR BLOCO
const questoes = [
    { 
        q: "1. What are microorganisms, and where can they live?", 
        ptq: "1. O que são microrganismos e onde eles podem viver?",
        o: ["Only large creatures living in salt water", "Tiny living things that survive in extreme environments and everywhere", "Only viruses that cause serious diseases", "Microscopic insects that fly"], 
        pto: ["Apenas seres grandes que vivem na água salgada", "Seres vivos minúsculos que sobrevivem em ambientes extremos e em todos os lugares", "Apenas vírus que causam doenças graves", "Insetos microscópicos que voam"],
        a: 1, 
        dica: "Remember that they dominate through their ability to live in extreme conditions.", 
        ptdica: "Lembre-se de que eles dominam pela capacidade de viver em condições extremas.",
        explicacao: "Microorganisms are tiny living things that manage to survive in extreme environments like clouds, deep-sea volcanoes, hot springs, ice caps, and animal intestines.",
        ptexplicacao: "Microrganismos são seres vivos minúsculos que conseguem sobreviver em ambientes extremos como nuvens, vulcões submarinos, fontes termais, calotas polares e intestinos de animais."
    },
    { 
        q: "2. What is the use of 'Yeast' in food and industry?", 
        ptq: "2. Qual é a utilidade da levedura (Yeast) na alimentação e indústria?",
        o: ["It only serves to spoil food quickly", "It helps ferment sugars to create biofuels and make bread", "It is a powerful antibiotic against bacteria", "It causes severe stomach infections"], 
        pto: ["Serve apenas para estragar alimentos rapidamente", "Ajuda na fermentação de açúcares para criar biocombustíveis e fabricar pães", "É um antibiótico poderoso contra bactérias", "Causa infecções estomacais graves"],
        a: 1, 
        dica: "Think about the fermentation process of ingredients like corn and sugarcane.", 
        ptdica: "Pense no processo de fermentação de ingredientes como milho e cana-de-açúcar.",
        explicacao: "Yeast is a beneficial fungus used in food (like bread) and to ferment sugars from crops like corn and sugarcane, turning them into biofuel.",
        ptexplicacao: "A levedura é um fungo benéfico usado na alimentação (como em pães) e para fermentar açúcares de culturas como milho e cana-de-açúcar, transformando-as em biocombustível."
    },
    { 
        q: "3. What is the main function of the Penicillium bacteria/fungus?", 
        ptq: "3. Qual é a principal função da bactéria/fungo Penicillium?",
        o: ["To make natural yogurts", "To produce a powerful antibiotic", "To cause strong flus", "To clean polluted waters"], 
        pto: ["Fazer iogurtes naturais", "Produzir um antibiótico poderoso", "Causar gripes fortes", "Limpar águas poluídas"],
        a: 1, 
        dica: "It was the discovery that revolutionized medicine against bacterial infections.", 
        ptdica: "Foi a descoberta que revolucionou a medicina contra infecções bacterianas.",
        explicacao: "Penicillium gave rise to powerful antibiotics that save lives by curing serious bacterial infections.",
        ptexplicacao: "O Penicillium deu origem a antibióticos poderosos que salvam vidas ao curar infecções bacterianas graves."
    },
    { 
        q: "4. What is Lactobacillus used for in our daily lives?", 
        ptq: "4. Para que serve o Lactobacillus no nosso dia a dia?",
        o: ["To produce yogurts", "To manufacture biofuel", "To kill flu viruses", "To create spray vaccines"], 
        pto: ["Para produzir iogurtes", "Para fabricar biocombustível", "Para matar vírus da gripe", "Para criar vacinas de spray"],
        a: 0, 
        dica: "It is a very common ingredient in fermented dairy products.", 
        ptdica: "É um ingrediente muito comum em produtos lácteos fermentados.",
        explicacao: "Lactobacillus is a beneficial bacterium widely used commercially for making yogurts.",
        ptexplicacao: "O Lactobacillus é uma bactéria benéfica muito utilizada comercialmente para a fabricação de iogurtes."
    },
    { 
        q: "5. Where can bacteria be found?", 
        ptq: "5. Onde as bactérias podem ser encontradas?",
        o: ["Only in sterilized hospitals", "Only in the air we breathe", "In the body, soil, and water (practically everywhere)", "Only in hot deserts"], 
        pto: ["Apenas em hospitais esterilizados", "Somente no ar que respiramos", "No corpo, no solo e na água (praticamente em todo lugar)", "Apenas em desertos quentes"],
        a: 2, 
        dica: "They are ubiquitous, meaning they are spread across almost everything.", 
        ptdica: "Elas são onipresentes, ou seja, estão espalhadas por quase tudo.",
        explicacao: "Bacteria are extremely versatile and can be found in the human body, soil, water, and practically every corner of the planet.",
        ptexplicacao: "As bactérias são extremamente versáteis e podem ser encontradas no corpo humano, no solo, na água e em praticamente todos os cantos do planeta."
    },
    { 
        q: "6. Why don't antibiotic medicines work against a viral illness like the flu?", 
        ptq: "6. Por que os remédios antibióticos NÃO funcionam contra uma doença viral como a gripe?",
        o: ["Because antibiotics are too weak", "Because antibiotics only fight bacteria, and viruses are different", "Because the flu only lasts three days", "Because the virus hides in the stomach"], 
        pto: ["Porque os antibióticos são fracos demais", "Porque os antibióticos combatem apenas bactérias, e vírus são diferentes", "Porque a gripe dura apenas três dias", "Porque o vírus se esconde no estômago"],
        a: 1, 
        dica: "Remember that viruses and bacteria are not the same category of microbe.", 
        ptdica: "Lembre-se de que vírus e bactérias não são a mesma categoria de micróbio.",
        explicacao: "Antibiotics are medicines developed to fight bad bacteria. Since viruses have a completely different biological structure, antibiotics cannot kill them.",
        ptexplicacao: "Os antibióticos são medicamentos desenvolvidos para combater bactérias ruins. Como os vírus têm uma estrutura biológica totalmente diferente, os antibióticos não conseguem matá-los."
    },
    { 
        q: "7. What is Yeast in biological terms?", 
        ptq: "7. O que é a levedura (Yeast) em termos biológicos?",
        o: ["A type of aquatic protozoan", "A microscopic fungus", "A bacteria that causes infections", "A mutant virus"], 
        pto: ["Um tipo de protozoário aquático", "Um fungo microscópico", "Uma bactéria causadora de infecções", "Um vírus mutante"],
        a: 1, 
        dica: "It is neither bacteria nor virus; it belongs to the kingdom of mushrooms and molds.", 
        ptdica: "Ela não é bactéria nem vírus; pertence ao reino dos cogumelos e bolores.",
        explicacao: "Yeast is a fungus that helps make food and ferment products.",
        ptexplicacao: "A levedura é um fungo que ajuda a fazer alimentos e fermentar produtos."
    },
    { 
        q: "8. Where do protozoa (like amoebas) mainly live?", 
        ptq: "8. Onde os protozoários (como as amebas) costumam viver principalmente?",
        o: ["In aquatic and humid environments", "On top of dry ice mountains", "Inside solid volcanic rocks", "In the atmosphere of dense clouds"], 
        pto: ["Em ambientes aquáticos e úmidos", "No topo de montanhas de gelo seco", "Dentro de rochas vulcânicas sólidas", "Na atmosfera das nuvens densas"],
        a: 0, 
        dica: "Think about the natural habitat of organisms like amoebas.", 
        ptdica: "Pense no habitat natural de organismos como a ameba.",
        explicacao: "Protozoa, such as amoebas, live primarily in aquatic and humid environments.",
        ptexplicacao: "Os protozoários, a exemplo das amebas, vivem prioritariamente em ambientes aquáticos e úmidos."
    },
    { 
        q: "9. How do vaccines work in our body?", 
        ptq: "9. Como as vacinas agem no nosso corpo?",
        o: ["They act like a 'superhero shield' training the immune system", "They replace contaminated blood with new blood", "They kill all cells in the body to clear germs", "They only serve to give physical energy"], 
        pto: ["Elas funcionam como um 'escudo de super-herói' treinando o sistema imunológico", "Elas substituem o sangue contaminado por um novo", "Elas matam todas as células do corpo para limpar os germes", "Elas servem apenas para dar energia física"],
        a: 0, 
        dica: "Think about the affectionate analogy about protective shields.", 
        ptdica: "Pense na analogia carinhosa sobre escudos protetores.",
        explicacao: "Vaccines work like 'superhero shields', helping to train the body's defense system to fight diseases before we get sick.",
        ptexplicacao: "As vacinas funcionam como 'escudos de super-herói', ajudando a treinar o sistema de defesa do corpo para combater doenças antes que fiquemos doentes."
    },
    { 
        q: "10. What was the great importance of the discovery of Penicillin?", 
        ptq: "10. Qual foi a grande importância da descoberta da Penicilina?",
        o: ["It allowed making more durable yogurts", "It created life-saving medicines that cure serious bacterial infections", "It completely eliminated the flu virus worldwide", "It allowed manufacturing corn biofuel"], 
        pto: ["Permitiu criar iogurtes mais duráveis", "Criou remédios que salvam vidas ao curar infecções bacterianas sérias", "Eliminou totalmente o vírus da gripe no mundo", "Permitiu a fabricação de biocombustível de milho"],
        a: 1, 
        dica: "It was a milestone in modern medicine history.", 
        ptdica: "Foi um marco na história da medicina moderna.",
        explicacao: "Penicillin revolutionized science by leading to the creation of drugs capable of curing severe bacterial infections that were previously fatal.",
        ptexplicacao: "A Penicilina revolucionou a ciência ao liderar a criação de medicamentos capazes de curar infecções bacterianas graves que antes eram fatais."
    },
    { 
        q: "11. Are all microorganisms harmful to humans?", 
        ptq: "11. Todos os microrganismos são prejudiciais (ruins) para os seres humanos?",
        o: ["Yes, all of them cause deadly diseases", "No, there are both helpful and harmful microorganisms", "No helpful microorganisms exist, only neutral ones", "Yes, except computer viruses"], 
        pto: ["Sim, todos causam doenças mortais", "Não, existem microrganismos úteis e prejudiciais", "Não existem microrganismos úteis, apenas neutros", "Sim, exceto os vírus de computador"],
        a: 1, 
        dica: "Remember that most help us with digestion, industry, and the ecosystem.", 
        ptdica: "Lembre-se de que a maioria nos ajuda na digestão, indústria e ecossistema.",
        explicacao: "It is incorrect to state that all microorganisms are bad; they can be either beneficial/helpful or harmful.",
        ptexplicacao: "É incorreto afirmar que todos os microrganismos são ruins; eles podem ser tanto benéficos/úteis quanto nocivos."
    },
    { 
        q: "12. If a classmate sneezes and touches the door handle, what is the risk?", 
        ptq: "12. Se um colega espirra e toca na maçaneta da porta, qual é o risco?",
        o: ["None, germs die instantly outdoors", "Other students can touch the handle and accidentally get contaminated", "The door will break because of the microbes", "The handle will change color"], 
        pto: ["Nenhum, germes morrem instantaneamente ao ar livre", "Outros alunos podem tocar na maçaneta e se contaminar acidentalmente", "A porta vai quebrar por causa dos micróbios", "A maçaneta vai mudar de cor"],
        a: 1, 
        dica: "Think about how surfaces transmit germs from one person to another.", 
        ptdica: "Pense em como as superfícies transmitem germes de uma pessoa para outra.",
        explicacao: "Cross-contamination occurs: germs pass onto the object and other people can get contaminated by touching it.",
        ptexplicacao: "Ocorre a contaminação cruzada: os germes passam para o objeto e outras pessoas podem se contaminar ao tocá-lo."
    },
    { 
        q: "13. What are two fundamental hygiene habits to prevent germ infections?", 
        ptq: "13. Quais são os dois hábitos de higiene fundamentais para evitar infecções por germes?",
        o: ["Sleeping with glasses and running in the rain", "Washing hands frequently and taking a shower", "Eating sweets and brushing teeth with soda", "Watching TV standing up and opening windows"], 
        pto: ["Dormir de óculos e correr na chuva", "Lavar as mãos frequentemente e tomar banho", "Comer doces e escovar os dentes com refrigerante", "Assistir TV de pé e abrir janelas"],
        a: 1, 
        dica: "These are basic personal cleanliness habits taught in any school.", 
        ptdica: "São hábitos básicos de limpeza pessoal ensinados em qualquer escola.",
        explicacao: "Simple practices like washing your hands well and taking a shower remove accumulated pathogenic microorganisms.",
        ptexplicacao: "Práticas simples como lavar bem as mãos e tomar banho removem microrganismos patogênicos acumulados."
    },
    { 
        q: "14. What are the three main types of microorganisms found in untreated water samples?", 
        ptq: "14. Quais são os três principais tipos de microrganismos encontrados em amostras de água não tratada?",
        o: ["Bacteria, protozoa, and viruses", "Insects, plants, and large fish", "Rocks, minerals, and plastics", "Ashes, dust, and smoke"], 
        pto: ["Bactérias, protozoários e vírus", "Insetos, plantas e peixes grandes", "Pedras, minerais e plásticos", "Cinzas, poeira e fumaça"],
        a: 0, 
        dica: "These are the three major groups invisible to the naked eye studied in the unit.", 
        ptdica: "São os três grandes grupos invisíveis a olho nu estudados na unidade.",
        explicacao: "Untreated water samples frequently harbor dangerous bacteria, protozoa, and viruses.",
        ptexplicacao: "Amostras de água não tratada frequentemente abrigam bactérias, protozoários e vírus perigosos."
    },
    { 
        q: "15. What is a common symptom associated with internal parasite infections?", 
        ptq: "15. Qual é um sintoma comum associado a infecções por parasitas internos?",
        o: ["Growth of blue hair", "Stomach ache and malaise", "X-ray vision", "Increased physical strength"], 
        pto: ["Crescimento de cabelo azul", "Dor de estômago (stomach ache) e mal-estar", "Visão raio-X", "Aumento da força física"],
        a: 1, 
        dica: "Digestive and abdominal issues usually appear when parasites are present.", 
        ptdica: "Problemas digestivos e abdominais costumam aparecer quando há parasitas.",
        explicacao: "Internal parasitic infections usually generate strong stomach aches and abdominal discomfort.",
        ptexplicacao: "Infecções parasitárias internas costumam gerar fortes dores de estômago e desconfortos abdominais."
    },
    { 
        q: "16. What is the main difference between supermarket mushrooms and nature (forest) mushrooms?", 
        ptq: "16. Qual é a diferença principal entre os cogumelos do supermercado e os da natureza (floresta)?",
        o: ["Supermarket ones are safely cultivated for food; wild ones can be poisonous", "Forest ones are made of plastic", "There is no difference, both are equal", "Supermarket ones are born in ice"], 
        pto: ["Os do supermercado são cultivados de forma segura para alimentação; os selvagens podem ser venenosos", "Os da floresta são feitos de plástico", "Não há nenhuma diferença, ambos são iguais", "Os do supermercado nascem no gelo"],
        a: 0, 
        dica: "One goes through human cultivation control for safe consumption.", 
        ptdica: "Um passa por controle de cultivo humano para consumo seguro.",
        explicacao: "Supermarket mushrooms are specifically cultivated for safe food consumption, whereas wild ones in nature can be toxic.",
        ptexplicacao: "Cogumelos de supermercado são cultivados especificamente para o consumo alimentar seguro, enquanto os da floresta na natureza podem ser tóxicos."
    },
    { 
        q: "17. What is a bacterial infection?", 
        ptq: "17. O que é uma infecção bacteriana?",
        o: ["A disease caused by the invasion of harmful bacteria in the body", "An allergy to bee stings", "A lack of vitamins in fruit", "A virus that changed its name"], 
        pto: ["Uma doença causada pela invasão de bactérias nocivas no corpo", "Uma alergia a picadas de abelha", "A falta de vitaminas na fruta", "Um vírus que mudou de nome"],
        a: 0, 
        dica: "The name itself tells you which causative microorganism is acting.", 
        ptdica: "O próprio nome já diz qual microrganismo causador está agindo.",
        explicacao: "It occurs when harmful bacteria enter the body and multiply, causing infection symptoms.",
        ptexplicacao: "Ocorre quando bactérias prejudiciais entram no organismo e se multiplicam, causando sintomas de infecção."
    },
    { 
        q: "18. Where does yeast get sugars to perform biofuel fermentation?", 
        ptq: "18. Onde a levedura (Yeast) consegue açúcares para realizar a fermentação dos biocombustíveis?",
        o: ["In granite rocks", "In agricultural crops like corn and sugarcane", "In electricity cables", "In recycled plastics"], 
        pto: ["Em pedras de granito", "Em culturas agrícolas como milho e cana-de-açúcar", "Em cabos de eletricidade", "Em plásticos reciclados"],
        a: 1, 
        dica: "Think of large Brazilian plantations used to produce ethanol and sugar.", 
        ptdica: "Pense em grandes plantações usadas para produzir etanol e açúcar.",
        explicacao: "Yeast ferments sugars present in cultivated crops, such as corn and sugarcane.",
        ptexplicacao: "A levedura fermenta os açúcares presentes em vegetais cultivados, como o milho e a cana-de-açúcar."
    },
    { 
        q: "19. Why should hands be washed before meals?", 
        ptq: "19. Por que as mãos devem ser lavadas antes das refeições?",
        o: ["To warm up your fingers", "To eliminate invisible microorganisms accumulated from touching objects", "To keep the fork from slipping", "To color the skin"], 
        pto: ["Para esquentar os dedos", "Para eliminar microrganismos invisíveis acumulados ao tocar em objetos", "Para o garfo não escorregar", "Para colorir a pele"],
        a: 1, 
        dica: "Prevents germs from hitching a ride from your hands straight to your mouth.", 
        ptdica: "Evita que germes pegem carona da sua mão direto para a sua boca.",
        explicacao: "Washing hands eliminates bacteria and viruses collected on surfaces throughout the day, preventing them from entering the body.",
        ptexplicacao: "Lavar as mãos elimina bactérias e vírus coletados em superfícies ao longo do dia, impedindo que entrem no corpo."
    },
    { 
        q: "20. What does it mean to say a microorganism is 'pathogenic'?", 
        ptq: "20. O que significa dizer que um microrganismo é 'patogênico'?",
        o: ["That it is extremely friendly", "That it is capable of causing diseases", "That it glows in the dark", "That it only lives in outer space"], 
        pto: ["Que ele é extremamente amigável", "Que ele é capaz de causar doenças", "Que ele produz luz no escuro", "Que ele vive apenas no espaço sideral"],
        a: 1, 
        dica: "Pathos means disease in Greek.", 
        ptdica: "Pathos significa doença em grego.",
        explicacao: "Pathogenic microorganisms are those that invade the body and provoke illnesses.",
        ptexplicacao: "Microrganismos patogênicos são aqueles que invadem o corpo e provocam enfermidades."
    },
    { 
        q: "21. Which of the following biological kingdoms is NOT part of the classic microorganisms studied?", 
        ptq: "21. Qual dos seguintes reinos biológicos NÃO faz parte dos microrganismos clássicos estudados?",
        o: ["Bacteria", "Microscopic fungi", "Large mammals", "Viruses and protozoa"], 
        pto: ["Bactérias", "Fungos microscópicos", "Mamíferos de grande porte", "Vírus e protozoários"],
        a: 2, 
        dica: "Look for the group of giant animals on the list.", 
        ptdica: "Procure o grupo de animais gigantes da lista.",
        explicacao: "Large mammals are animals visible to the naked eye, entirely outside the group of microscopic microbes.",
        ptexplicacao: "Mamíferos de grande porte são animais visíveis a olho nu, totalmente fora do grupo dos micróbios microscópicos."
    },
    { 
        q: "22. What does the immune system do when it receives a vaccine?", 
        ptq: "22. O que o sistema imunológico faz ao receber uma vacina?",
        o: ["It becomes permanently disabled", "It recognizes the weakened invader and creates defense antibodies", "It transforms into a bacterium", "It cools body temperature to zero degrees"], 
        pto: ["Fica desativado permanentemente", "Reconhece o invasor enfraquecido e cria anticorpos de defesa", "Transforma-se em uma bactéria", "Esfria a temperatura do corpo a zero grau"],
        a: 1, 
        dica: "It is like military training for defense cells.", 
        ptdica: "É como um treinamento militar para as células de defesa.",
        explicacao: "The vaccine safely simulates the presence of the germ, making the immune system learn to fight it quickly.",
        ptexplicacao: "A vacina simula a presença do germe de forma segura, fazendo o sistema imune aprender a combatê-lo rapidamente."
    },
    { 
        q: "23. What are fungi in nature's food chain?", 
        ptq: "23. O que são os fungos na cadeia alimentar da natureza?",
        o: ["Only parasites with no ecological utility", "Essential decomposers that recycle organic matter", "Creators of sun rays", "Sources of electrical energy"], 
        pto: ["Apenas parasitas sem utilidade ecológica", "Decompositores essenciais que reciclam matéria orgânica", "Criadores de raios solares", "Fontes de energia elétrica"],
        a: 1, 
        dica: "They help clean the forest by turning remains into soil nutrients.", 
        ptdica: "Eles ajudam a limpar a floresta transformando restos em nutrientes para o solo.",
        explicacao: "Fungi act as vital decomposers, breaking down dead matter and returning essential nutrients to the soil.",
        ptexplicacao: "Fungos atuam como decompositores vitais, quebrando matéria morta e devolvendo nutrientes essenciais ao solo."
    },
    { 
        q: "24. How do viruses multiply?", 
        ptq: "24. Como os vírus se multiplicam?",
        o: ["They divide by themselves in clean water", "They must invade living cells of other organisms to replicate", "They grow with direct sunlight like plants", "They eat sugarcane sugar"], 
        pto: ["Eles se dividem sozinhos na água limpa", "Eles precisam invadir células vivas de outros organismos para se replicar", "Eles crescem com luz solar direta como plantas", "Eles comem açúcar de cana"],
        a: 1, 
        dica: "They need a living host to give orders and clone themselves.", 
        ptdica: "Eles precisam de um hospedeiro vivo para dar ordens e se clonar.",
        explicacao: "Viruses cannot reproduce on their own; they are forced to hijack a living cell to multiply.",
        ptexplicacao: "Os vírus não conseguem se reproduzir sozinhos; obrigatoriamente precisam sequestrar uma célula viva para se multiplicar."
    },
    { 
        q: "25. What is the role of 'decomposer' bacteria?", 
        ptq: "25. Qual é o papel das bactérias chamadas 'decompositoras'?",
        o: ["Polluting the air of big cities", "Transforming remains of dead plants and animals into soil nutrients", "Producing industrial plastic", "Attacking computers"], 
        pto: ["Poluir o ar das grandes cidades", "Transformar restos de plantas e animais mortos em nutrientes para a terra", "Produzir plástico industrial", "Atacar computadores"],
        a: 1, 
        dica: "They close the circle of life in nature.", 
        ptdica: "Elas fecham o ciclo da vida na natureza.",
        explicacao: "Decomposer bacteria break down dead organic matter, enriching the soil for new plants to grow.",
        ptexplicacao: "Bactérias decompositoras quebram matéria orgânica morta, enriquecendo o solo para novas plantas crescerem."
    },
    { 
        q: "26. What happens if we drink water from a river full of untreated microbes?", 
        ptq: "26. O que acontece se bebermos água de um rio cheio de micróbios sem tratamento?",
        o: ["We become stronger instantly", "We run a serious risk of contracting intestinal infections and diseases", "We gain superpowers", "Water turns into orange juice"], 
        pto: ["Ficamos mais fortes instantaneamente", "Corremos sério risco de contrair infecções intestinais e doenças", "Ganhamos superpoderes", "A água vira suco de laranja"],
        a: 1, 
        dica: "Untreated water contains dangerous pathogens.", 
        ptdica: "A água não tratada contém agentes patogênicos perigosos.",
        explicacao: "Water without sanitation or boiling contains harmful bacteria and protozoa that provoke severe infections.",
        ptexplicacao: "Água sem saneamento ou fervura contém bactérias e protozoários nocivos que provocam infecções graves."
    },
    { 
        q: "27. Why does bread rise when we add yeast?", 
        ptq: "27. Por que o pão cresce quando adicionamos fermento (Yeast)?",
        o: ["Because the fungus produces gases during fermentation that inflate the dough", "Because heat melts the flour", "Because salt evaporates", "Because water turns to stone"], 
        pto: ["Porque o fungo produz gases durante a fermentação que estufam a massa", "Porque o calor derrete a farinha", "Porque o sal evapora", "Porque a água vira pedra"],
        a: 0, 
        dica: "The gas released by the microorganism creates air bubbles in the bread.", 
        ptdica: "O gás liberado pelo microrganismo cria bolhas de ar no pão.",
        explicacao: "Yeast consumes sugars from the dough and releases carbon dioxide, forming air bubbles that make the bread rise.",
        ptexplicacao: "O yeast consome açúcares da massa e libera dióxido de carbono, formando bolhas de ar que fazem o pão crescer."
    },
    { 
        q: "28. Which microorganism is directly used in making cheese and yogurt?", 
        ptq: "28. Qual microrganismo é usado diretamente na fabricação de queijos e iogurtes?",
        o: ["Flu virus", "Lactic bacteria (like Lactobacillus)", "Giant amoebas", "Poisonous forest fungi"], 
        pto: ["Vírus da gripe", "Bactérias lácticas (como o Lactobacillus)", "Amoebas gigantes", "Fungos venenosos da floresta"],
        a: 1, 
        dica: "The word 'lactic' reminds you of milk.", 
        ptdica: "O próprio nome 'lático' lembra leite.",
        explicacao: "Beneficial bacteria ferment milk, transforming it into tasty yogurts and cheeses.",
        ptexplicacao: "Bactérias benéficas fermentam o leite, transformando-o em iogurtes e queijos saborosos."
    },
    { 
        q: "29. What characterizes an extreme environment where microbes survive?", 
        ptq: "29. O que caracteriza um ambiente extremo onde micróbios sobrevivem?",
        o: ["Boiling or freezing temperatures, or high underwater pressure", "Classrooms with turned-off air conditioning", "Clean supermarkets", "Shopping malls"], 
        pto: ["Temperaturas ferventes, congelantes ou alta pressão submarina", "Salas de aula com ar condicionado desligado", "Supermercados limpos", "Lojas de shopping"],
        a: 0, 
        dica: "Places where human beings die instantly.", 
        ptdica: "Locais onde seres humanos morrem instantaneamente.",
        explicacao: "Extreme environments possess inhospitable conditions, like hot springs or deep ice, where only microbes resist.",
        ptexplicacao: "Ambientes extremos possuem condições inóspitas, como calor de fontes termais ou gelo profundo, onde apenas micróbios resistem."
    },
    { 
        q: "30. What is the human body's main weapon against viral infections fought by vaccines?", 
        ptq: "30. Qual é a principal arma do corpo humano contra infecções virais combatidas por vacinas?",
        o: ["Synthetic antibiotics", "Antibodies produced by the immune system itself", "Plastic vitamins", "Daily flus"], 
        pto: ["Antibióticos sintéticos", "Anticorpos produzidos pelo próprio sistema imunológico", "Vitaminas de plástico", "Gripes diárias"],
        a: 1, 
        dica: "The body creates its own defenses with the help of the immunization.", 
        ptdica: "O corpo cria suas próprias defesas com ajuda do imunizante.",
        explicacao: "The immune system produces specific antibodies to neutralize and destroy invading viruses.",
        ptexplicacao: "O sistema imunológico produz anticorpos específicos para neutralizar e destruir os vírus invasores."
    },
    { 
        q: "31. Are viruses considered complete living things by all scientists?", 
        ptq: "31. Os vírus são considerados seres vivos completos por todos os cientistas?",
        o: ["Yes, they eat, breathe, and reproduce alone", "There are debates, because outside a host cell they lack independent metabolism", "No, they are pieces of glass", "Yes, because they build houses"], 
        pto: ["Sim, eles comem, respiram e se reproduzem sozinhos", "Há debates, pois fora de uma célula hospedeira eles não têm metabolismo próprio", "Não, são pedaços de vidro", "Sim, pois constroem casas"],
        a: 1, 
        dica: "They remain 'inactive' if they are not infecting someone.", 
        ptdica: "Eles ficam 'inativos' se não estiverem infectando alguém.",
        explicacao: "Outside a living cell, viruses remain inert and crystallized, raising scientific debates about their life outside a host.",
        ptexplicacao: "Fora de uma célula viva, os vírus ficam inertes e cristalizados, levantando debates científicos sobre sua vida fora de um hospedeiro."
    },
    { 
        q: "32. What can the excessive and wrong use of antibiotics cause?", 
        ptq: "32. O que o uso excessivo e errado de antibióticos pode causar?",
        o: ["Superbugs resistant to medicines", "Blond hair", "Increased height", "Eternal immunity to everything"], 
        pto: ["Superbactérias resistentes aos remédios", "Cabelos loiros", "Aumento da altura", "Imunidade eterna a tudo"],
        a: 0, 
        dica: "Bacteria learn to defend themselves against the medicine if it is misused.", 
        ptdica: "As bactérias aprendem a se defender do medicamento se ele for mal utilizado.",
        explicacao: "Using antibiotics without need creates resistant bacteria, making future infections much harder to cure.",
        ptexplicacao: "Usar antibióticos sem necessidade cria bactérias resistentes, tornando infecções futuras muito mais difíceis de curar."
    },
    { 
        q: "33. How is yogurt formed from milk?", 
        ptq: "33. Como o iogurte se forma a partir do leite?",
        o: ["Through the action of beneficial bacteria that ferment milk", "By rapid freezing at the North Pole", "By adding pure refined sugar", "By evaporation in iron pans"], 
        pto: ["Por meio da ação de bactérias benéficas que fermentam o leite", "Por congelamento rápido no Polo Norte", "Pela adição de açúcar refinado puro", "Por evaporação em panelas de ferro"],
        a: 0, 
        dica: "Lactic fermentation process.", 
        ptdica: "Processo de fermentação láctica.",
        explicacao: "Special bacteria consume the lactose in milk and transform it into a sour, nutritious yogurt.",
        ptexplicacao: "Bactérias especiais consomem a lactose do leite e o transformam em iogurte azedinho e nutritivo."
    },
    { 
        q: "34. What is the general ecological importance of microorganisms on the planet?", 
        ptq: "34. Qual é a importância ecológica geral dos microrganismos no planeta?",
        o: ["They destroy all Earth's oxygen", "They sustain nutrient cycles, decomposition, and food chains", "They only serve to cause pandemics", "They control city traffic"], 
        pto: ["Eles destroem todo o oxigênio da Terra", "Eles sustentam ciclos de nutrientes, decomposição e cadeias alimentares", "Eles servem apenas para causar pandemias", "Eles controlam o trânsito das cidades"],
        a: 1, 
        dica: "Without them, the planet would be buried in organic trash.", 
        ptdica: "Sem eles, o planeta ficaria soterrado em lixo orgânico.",
        explicacao: "Microorganisms sustain life on Earth by recycling nutrients and grounding fundamental food webs.",
        ptexplicacao: "Microrganismos sustentam a vida na Terra ao reciclar nutrientes e basear teias alimentares fundamentais."
    },
    { 
        q: "35. What is an internal parasite in the human body?", 
        ptq: "35. O que é um parasita interno no corpo humano?",
        o: ["An organism that lives inside another and extracts nutrients causing damage", "A fat reserve organ", "A strong muscle cell", "A liquid vitamin"], 
        pto: ["Um organismo que vive dentro de outro e retira nutrientes causando danos", "Um órgão de reserva de gordura", "Uma célula muscular forte", "Uma vitamina líquida"],
        a: 0, 
        dica: "It lives rent-free and still harms the host.", 
        ptdica: "Ele mora de aluguel e ainda prejudica o hospedeiro.",
        explicacao: "Internal parasites inhabit the bodies of other living things to feed, generating diseases and malaise.",
        ptexplicacao: "Parasitas internos habitam o corpo de outros seres vivos para se alimentar, gerando doenças e mal-estar."
    },
    { 
        q: "36. What is the best way to prevent microbes from raw meat from contaminating other foods?", 
        ptq: "36. Qual é a melhor forma de impedir que micróbios de uma carne crua contaminem outros alimentos na cozinha?",
        o: ["Using separate cutting boards and utensils and washing hands well", "Leaving meat exposed to the sun for 5 minutes", "Blow on the meat", "Keeping everything in the clothes drawer"], 
        pto: ["Usar tábuas e utensílios separados e lavar bem as mãos", "Deixar a carne exposta ao sol por 5 minutos", "Assoprar a carne", "Guardar tudo na gaveta de roupas"],
        a: 0, 
        dica: "Avoids cross-contamination of foods.", 
        ptdica: "Evita a contaminação cruzada de alimentos.",
        explicacao: "Separating utensils and sanitizing surfaces prevents bacteria from raw meat from passing to ready-to-eat foods.",
        ptexplicacao: "Separar utensílios e higienizar superfícies impede que bactérias da carne crua passem para alimentos prontos."
    },
    { 
        q: "37. What do scientists use to clearly see bacteria and viruses?", 
        ptq: "37. O que os cientistas usam para enxergar bactérias e vírus com clareza?",
        o: ["Common reading magnifying glasses", "Powerful microscopes", "Sunglasses", "Space telescopes"], 
        pto: ["Lupas comuns de leitura", "Microscópios potentes", "Óculos escuros", "Telescópios espaciais"],
        a: 1, 
        dica: "They are microscopic, so they need a specific instrument.", 
        ptdica: "Eles são microscópicos, logo precisam de um instrumento específico.",
        explicacao: "As they are invisible to the naked eye, the use of advanced microscopes is mandatory to study them.",
        ptexplicacao: "Como são invisíveis a olho nu, o uso de microscópios avançados é obrigatório para estudá-los."
    },
    { 
        q: "38. Why does healthy human skin have beneficial bacteria?", 
        ptq: "38. Por que a pele humana saudável possui bactérias benéficas?",
        o: ["To attract insects", "To form a protective barrier against pathogenic invading germs", "To give color to the skin", "To produce sweet sweat"], 
        pto: ["Para atrair insetos", "Para formar uma barreira protetora contra germes invasores patogênicos", "Para dar cor à pele", "Para produzir suor doce"],
        a: 1, 
        dica: "Skin flora defends us from worse invaders.", 
        ptdica: "A flora da pele nos defende de invasores piores.",
        explicacao: "Skin microbiota acts as a natural protective shield, taking up space and fighting pathogenic microbes.",
        ptexplicacao: "A microbiota da pele atua como um escudo protetor natural, ocupando espaço e combatendo micróbios patogênicos."
    },
    { 
        q: "39. Which microorganism is fundamental in producing fuel ethanol through sugarcane?", 
        ptq: "39. Qual microrganismo é fundamental na produção de etanol combustível através da cana?",
        o: ["Yeast", "Avian flu virus", "Giant amoeba", "Tetanus bacteria"], 
        pto: ["Levedura (Yeast)", "Vírus da gripe aviária", "Amoeba gigante", "Bactéria do tétano"],
        a: 0, 
        dica: "The same fungus that makes bread rise makes biofuel.", 
        ptdica: "O mesmo fungo que faz o pão crescer faz o biocombustível.",
        explicacao: "Yeast ferments sugarcane juice, transforming sugar into alcohol (ethanol).",
        ptexplicacao: "A levedura fermenta o caldo da cana transformando o açúcar em álcool (etanol)."
    },
    { 
        q: "40. What should we always do before cooking or eating?", 
        ptq: "40. O que devemos fazer sempre antes de cozinhar ou comer?",
        o: ["Wash hands well with soap and water", "Run around the table", "Turn off all lights in the house", "Wet shoes"], 
        pto: ["Lavar bem as mãos com água e sabão", "Correr em volta da mesa", "Desligar todas as luzes da casa", "Molhar os sapatos"],
        a: 0, 
        dica: "Basic hygiene to ensure health and avoid unwanted microbes.", 
        ptdica: "Higiene básica para garantir saúde e evitar micróbios indesejados.",
        explicacao: "Washing hands with soap and water is the number one prevention measure against food infections and germs.",
        ptexplicacao: "Lavar as mãos com água e sabão é a medida número um de prevenção contra infecções alimentares e germes."
    }
];

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [respostas, setRespostas] = useState({});
    const [dicasVisiveis, setDicasVisiveis] = useState({});
    const [explicacoesVisiveis, setExplicacoesVisiveis] = useState({});
    const [traducaoTopoVisivel, setTraducaoTopoVisivel] = useState(false);
    const [traducoesQuestoes, setTraducoesQuestoes] = useState({});
    const [resultado, setResultado] = useState(null);
    const [notaEstilo, setNotaEstilo] = useState({});

    useEffect(() => {
        setMounted(true);
        if (!document.getElementById('quiz-styles')) {
            const style = document.createElement('style');
            style.id = 'quiz-styles';
            style.innerHTML = `
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 850px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 6px solid #E31837; }
                h1 { text-align: center; color: #E31837; margin-bottom: 5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
                .subtitle { text-align: center; color: #2C3E50; margin-bottom: 25px; font-weight: 600; font-size: 1.1em; }
                
                .review-box { background-color: #f8f9fa; border: 2px solid #2C3E50; border-radius: 8px; padding: 20px; margin-bottom: 35px; }
                .review-box h2 { color: #E31837; margin-top: 0; font-size: 1.3em; border-bottom: 2px solid #eaeaea; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
                .review-box p, .review-box li { color: #2C3E50; font-size: 0.95em; line-height: 1.5; }
                .review-box ul { padding-left: 20px; margin-bottom: 0; }
                .review-box li { margin-bottom: 10px; }

                .translation-toggle-btn { background-color: #2980b9; color: white; border: none; padding: 6px 12px; font-size: 0.85em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; }
                .translation-toggle-btn:hover { background-color: #1f618d; }
                
                .translation-box { margin-top: 15px; padding: 15px; background-color: #ebf5fb; border-left: 5px solid #2980b9; border-radius: 0 6px 6px 0; color: #1b4f72; }

                .question { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; }
                .question-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }
                .question p { font-weight: bold; font-size: 1.15em; color: #2C3E50; margin: 0; }

                .options label { display: block; margin: 8px 0; cursor: pointer; padding: 10px; border-radius: 6px; transition: all 0.2s; border: 1px solid transparent; }
                .options label:hover { background: #fdf2f2; border: 1px solid #fadbdc; }
                
                .btn-group { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
                
                .hint-btn { background-color: #f39c12; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .hint-btn:hover { background-color: #d68910; }
                
                .exp-btn { background-color: #2C3E50; color: white; border: none; padding: 8px 14px; font-size: 0.9em; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .exp-btn:hover { background-color: #1a252f; }

                .hint-text { margin-top: 12px; padding: 12px; background-color: #fff9e6; border-left: 5px solid #f39c12; color: #5d4037; font-size: 0.95em; font-style: italic; border-radius: 0 4px 4px 0; }
                .explanation-text { margin-top: 12px; padding: 12px; background-color: #fdf2f2; border-left: 5px solid #E31837; color: #c0392b; font-size: 0.95em; border-radius: 0 4px 4px 0; }
                .translation-text-q { margin-top: 8px; padding: 10px; background-color: #ebf5fb; border-left: 4px solid #2980b9; color: #1b4f72; font-size: 0.9em; border-radius: 0 4px 4px 0; }
                
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

    // Evita qualquer piscada ou erro de hidratação no carregamento inicial do Next.js
    if (!mounted) return null;

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

    const toggleTraducaoQuestao = (qIndex) => {
        setTraducoesQuestoes(prev => ({ ...prev, [qIndex]: !prev[qIndex] }));
    };

    const corrigirProva = () => {
        let acertos = 0;
        questoes.forEach((item, index) => {
            if (respostas[index] === item.a) {
                acertos++;
            }
            setExplicacoesVisiveis(prev => ({ ...prev, [index]: true }));
        });

        const nota = (acertos / questoes.length) * 10;
        setResultado(`Henrique, you got ${acertos} out of ${questoes.length} questions right! Your score is: ${nota.toFixed(1)}`);
        
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
        setTraducoesQuestoes({});
        setTraducaoTopoVisivel(false);
        setResultado(null);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <Head>
                <title>Science Quiz - Henrique</title>
            </Head>
            <h1>Science Quiz</h1>
            <div className="subtitle">Special Practice for Henrique - Grade 4 (&quot;Misunderstood Microbes&quot;)</div>
            
            {/* CAIXA DE REVISÃO DETALHADA E MASTIGADA EM INGLÊS COM BOTÃO DE TRADUÇÃO */}
            <div className="review-box">
                <h2>
                    📖 Detailed Review &amp; Performance Feedback (Science)
                    <button type="button" className="translation-toggle-btn" onClick={() => setTraducaoTopoVisivel(!traducaoTopoVisivel)}>
                        {traducaoTopoVisivel ? 'Hide Portuguese Translation' : 'Ver Tradução em Português'}
                    </button>
                </h2>
                <p>Here is the detailed breakdown of the core concepts Henrique studied in <strong>&quot;Misunderstood Microbes&quot;</strong>:</p>
                <ul>
                    <li><strong>What are Microorganisms:</strong> Tiny living things that can survive and dominate in extreme environments such as clouds, deep-sea volcanoes, hot springs, ice caps, and animal intestines.</li>
                    <li><strong>Beneficial Examples:</strong> Yeast (levedura) used in food/baking and biofuels; Lactobacillus used to make yogurt; and the Penicillium fungus/bacterium that produces life-saving antibiotics against bacterial infections.</li>
                    <li><strong>Bacteria vs. Viruses:</strong> Antibiotics fight bad bacteria, but <strong>they DO NOT work against viruses</strong> (like the flu), because viruses have an entirely different biological structure and require host cells to replicate.</li>
                    <li><strong>Hygiene and Vaccines:</strong> Vaccines act like &quot;superhero shields&quot;, training the immune system to fight germs proactively. Simple daily habits like washing hands prevent cross-contamination from touched surfaces like door handles.</li>
                    <li><strong>Types and Risks:</strong> Untreated water samples harbor bacteria, protozoa, and viruses; internal parasites cause severe stomachaches; and supermarket mushrooms are safely cultivated for food consumption, unlike toxic wild ones found in nature.</li>
                </ul>

                {traducaoTopoVisivel && (
                    <div className="translation-box">
                        <strong>🇧🇷 Tradução (Português):</strong>
                        <p style={{ marginTop: '8px', marginBottom: '4px' }}>Aqui está o apanhado detalhado dos conceitos centrais estudados em &quot;Misunderstood Microbes&quot;:</p>
                        <ul style={{ marginBottom: 0 }}>
                            <li><strong>O que são Microrganismos:</strong> Seres vivos minúsculos que sobrevivem e dominam em ambientes extremos como nuvens, vulcões submarinos, fontes termais, calotas polares e intestinos de animais.</li>
                            <li><strong>Exemplos Benéficos:</strong> Levedura (Yeast) usada na alimentação/pães e biocombustíveis; Lactobacillus usado em iogurtes; e o fungo/bactéria Penicillium que produz antibióticos salvadores contra infecções bacterianas.</li>
                            <li><strong>Bactérias vs. Vírus:</strong> Antibióticos combatem bactérias ruins, mas <strong>NÃO funcionam contra vírus</strong> (como a gripe), pois os vírus possuem estrutura biológica totalmente diferente e precisam de células hospedeiras.</li>
                            <li><strong>Higiene e Vacinas:</strong> Vacinas agem como &quot;escudos de super-herói&quot;, treinando o sistema imunológico contra germes. Hábitos simples como lavar as mãos evitam a contaminação cruzada em superfícies tocadas.</li>
                            <li><strong>Tipos e Riscos:</strong> Amostras de água não tratada abrigam bactérias, protozoários e vírus; parasitas internos causam fortes dores de estômago; e cogumelos de supermercado são cultivados com segurança para consumo, ao contrário dos selvagens tóxicos.</li>
                        </ul>
                    </div>
                )}
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                {questoes.map((item, index) => {
                    const respostaDada = respostas[index];
                    const traduzidoVisivel = traducoesQuestoes[index];

                    return (
                        <div className="question" key={index}>
                            <div className="question-header">
                                <p>{item.q}</p>
                                <button type="button" className="translation-toggle-btn" onClick={() => toggleTraducaoQuestao(index)}>
                                    {traduzidoVisivel ? 'Hide Translation' : 'Ver Tradução'}
                                </button>
                            </div>

                            {traduzidoVisivel && (
                                <div className="translation-text-q">
                                    <strong>🇧🇷 Tradução:</strong> {item.ptq}
                                </div>
                            )}

                            <div className="options">
                                {item.o.map((opt, optIndex) => {
                                    let estiloLabel = {};
                                    if (respostaDada !== undefined && respostaDada === optIndex) {
                                        // Deixa apenas a linha clicada verde (se certa) ou vermelha (se errada), sem revelar a resposta correta
                                        if (optIndex === item.a) {
                                            estiloLabel = { backgroundColor: "#d4edda", borderColor: "#c3e6cb" };
                                        } else {
                                            estiloLabel = { backgroundColor: "#f8d7da", borderColor: "#f5c6cb" };
                                        }
                                    }
                                    return (
                                        <label key={optIndex} style={estiloLabel}>
                                            <input 
                                                type="radio" 
                                                name={`q${index}`} 
                                                checked={respostaDada === optIndex}
                                                onChange={() => selecionarResposta(index, optIndex)} 
                                            /> {opt} {traduzidoVisivel && <span style={{ color: '#7f8c8d', fontSize: '0.9em' }}>({item.pto[optIndex]})</span>}
                                        </label>
                                    );
                                })}
                            </div>

                            <div className="btn-group">
                                <button type="button" className="hint-btn" onclick="null" onClick={() => toggleDica(index)}>💡 View Hint</button>
                                <button type="button" className="exp-btn" onclick="null" onClick={() => toggleExplicacao(index)}>📚 View Explanation</button>
                            </div>

                            {dicasVisiveis[index] && (
                                <div className="hint-text">
                                    <strong>Hint:</strong> {item.dica}
                                    {traduzidoVisivel && <div style={{ marginTop: '4px', fontSize: '0.9em' }}><em>Dica: {item.ptdica}</em></div>}
                                </div>
                            )}
                            
                            {explicacoesVisiveis[index] && (
                                <div className="explanation-text">
                                    <strong>📚 Explanation:</strong> {item.explicacao}
                                    {traduzidoVisivel && <div style={{ marginTop: '4px', fontSize: '0.9em' }}><em>Explicação: {item.ptexplicacao}</em></div>}
                                </div>
                            )}
                        </div>
                    );
                })}
            </form>

            <button type="button" className="btn-main btn-corrigir" onClick={corrigirProva}>Check Answers &amp; Score</button>
            <button type="button" className="btn-main btn-limpar" onClick={limparProva}>Clear Answers &amp; Retake</button>
            {resultado && <div id="result" style={notaEstilo}>{resultado}</div>}
        </div>
    );
}