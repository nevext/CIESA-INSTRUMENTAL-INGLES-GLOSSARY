// Glossary with terms
const glossario = {
  "html": "Linguagem de marcação usada para estruturar páginas web.",
  "css": "Linguagem de estilos usada para descrever a apresentação de documentos HTML.",
  "javascript": "Linguagem de programação usada para adicionar interatividade a páginas web.",
  "dom": "Document Object Model — API que representa a estrutura de documentos HTML e XML.",
  "responsive design": "Abordagem de design que adapta layouts a diferentes tamanhos de tela e dispositivos.",
  "api": "Interface de Programação de Aplicações — conjunto de regras para comunicação entre softwares.",
  "python": "Linguagem de programação de alto nível, interpretada e conhecida pela legibilidade.",
  "python I": "Curso introdutório de Python cobrindo sintaxe básica, tipos e estruturas de controle.",
  "python II": "Curso intermediário de Python sobre estruturas de dados, módulos e POO básica.",
  "python III": "Curso avançado de Python com bibliotecas, testes, concorrência e projetos práticos.",

  "algorithm": "Procedimento passo a passo para resolver problemas ou realizar cálculos de forma eficiente.",
  "data structure": "Formato organizado para armazenar e manipular dados de modo eficiente.",
  "object-oriented programming": "Paradigma que organiza código em objetos que encapsulam estado e comportamento.",
  "functional programming": "Paradigma que trata a computação como avaliação de funções e evita estado mutável.",
  "database": "Sistema estruturado para armazenar, consultar e gerenciar dados persistentes.",
  "sql": "Linguagem de consulta usada para interagir com bancos de dados relacionais.",
  "nosql": "Categoria de bancos de dados não relacionais com esquemas flexíveis e escalabilidade horizontal.",
  "mongodb": "Banco NoSQL orientado a documentos que armazena dados em documentos semelhantes a JSON.",
  "postgresql": "Banco de dados relacional open-source conhecido por conformidade e extensibilidade.",
  "mysql": "Sistema de gerenciamento de banco de dados relacional amplamente utilizado.",

  "machine learning": "Campo de IA que cria modelos capazes de aprender padrões a partir de dados.",
  "deep learning": "Subcampo de machine learning que usa redes neurais profundas para tarefas complexas.",
  "neural network": "Modelo computacional inspirado em neurônios biológicos usado para aprendizagem de padrões.",
  "supervised learning": "Aprendizado em que modelos treinam com dados rotulados para prever resultados.",
  "unsupervised learning": "Aprendizado que busca padrões ou estruturas em dados não rotulados.",
  "reinforcement learning": "Paradigma em que agentes aprendem por meio de recompensas e penalidades.",
  "data science": "Campo interdisciplinar que extrai insights de dados usando estatística e programação.",
  "data engineering": "Práticas e ferramentas para construir pipelines e sistemas confiáveis de dados.",
  "etl": "Extract, Transform, Load — processo de mover e transformar dados entre sistemas.",
  "big data": "Conjuntos de dados muito grandes ou complexos que exigem ferramentas especializadas.",
  "hadoop": "Framework open-source para processamento e armazenamento distribuído de grandes volumes.",
  "spark": "Motor de processamento unificado para análise de dados em larga escala.",

  "ci/cd": "Integração Contínua e Entrega/Deploy Contínuo — automação do build, testes e deploy.",
  "docker": "Plataforma para empacotar aplicações e dependências em containers portáteis.",
  "kubernetes": "Sistema para orquestração, escala e gestão de containers em ambientes distribuídos.",
  "containerization": "Técnica de empacotar aplicações em containers isolados para portabilidade.",
  "virtualization": "Criação de ambientes virtuais de hardware ou sistemas operacionais em um host físico.",
  "cloud computing": "Entrega sob demanda de recursos (compute, storage, rede) pela internet.",
  "aws": "Amazon Web Services — provedor de serviços em nuvem com ampla variedade de serviços gerenciados.",
  "serverless": "Modelo de execução em nuvem onde o provedor gerencia infraestrutura e realiza escalonamento automático.",
  "edge computing": "Processamento distribuído que executa tarefas próximas à fonte de dados para reduzir latência.",

  "git": "Sistema de controle de versão distribuído usado para rastrear alterações no código-fonte.",
  "github": "Plataforma web para hospedar repositórios Git, colaboração e revisão de código.",
  "rest": "Estilo arquitetural para APIs que usa métodos HTTP e comunicação stateless.",
  "graphql": "Linguagem de consulta para APIs que permite solicitar apenas os dados necessários.",
  "http": "Hypertext Transfer Protocol — protocolo base para comunicação na web.",
  "https": "Versão segura do HTTP que cifra os dados em trânsito usando TLS.",
  "json": "Formato leve e legível para intercâmbio de dados, muito usado em APIs.",
  "xml": "Linguagem de marcação para representar documentos estruturados de forma independente de plataforma.",
  "websocket": "Protocolo que fornece comunicação bidirecional em tempo real entre cliente e servidor.",

  "jwt": "JSON Web Token — formato compacto para transmitir informações de forma segura entre partes.",
  "oauth": "Padrão aberto para delegação de acesso usado em autenticação e autorização baseada em tokens.",
  "security": "Conjunto de práticas para proteger sistemas e dados contra acessos e ameaças não autorizadas.",
  "encryption": "Processo de codificar dados para que apenas partes autorizadas possam decifrá-los.",
  "hashing": "Função unidirecional que gera um valor fixo a partir de uma entrada para integridade e lookup.",
  "xss": "Cross-Site Scripting — vulnerabilidade que permite injeção de scripts maliciosos em páginas web.",
  "csrf": "Cross-Site Request Forgery — ataque que induz o usuário a executar ações não intencionais.",

  "unit testing": "Prática de testar unidades isoladas do software para garantir comportamento correto.",
  "integration testing": "Testes que verificam as interações entre vários componentes do sistema.",
  "e2e testing": "Testes ponta a ponta que validam fluxos completos do ponto de vista do usuário.",
  "tdd": "Test-Driven Development — prática de escrever testes antes do código para guiar o design.",
  "agile": "Metodologia iterativa de desenvolvimento focada em colaboração e entregas incrementais.",
  "scrum": "Framework ágil que organiza trabalho em sprints com papéis e cerimônias definidas.",

  "ux": "User Experience — disciplina que estuda a interação e percepção do usuário com um produto.",
  "ui": "User Interface — elementos visuais e controles pelos quais o usuário interage com o sistema.",
  "accessibility": "Prática de design que garante usabilidade para pessoas com diferentes habilidades.",
  "performance": "Métrica que mede a rapidez e eficiência de resposta de um sistema.",
  "scalability": "Capacidade de um sistema lidar com aumento de carga por adição de recursos.",

  "react": "Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes.",
  "vue": "Framework JavaScript progressivo para criar interfaces reativas e componentes reutilizáveis.",
  "angular": "Plataforma e framework para construir aplicações web em TypeScript mantido pelo Google.",
  "svelte": "Framework que compila componentes em código eficiente durante o build, reduzindo runtime.",
  "typescript": "Superset do JavaScript que adiciona tipagem estática opcional para maior robustez.",
  "node.js": "Ambiente de execução JavaScript no servidor baseado no motor V8.",
  "express": "Framework minimalista para criar servidores HTTP em Node.js.",
  "nestjs": "Framework Node.js progressivo para construir aplicações escaláveis usando TypeScript.",
  "npm": "Gerenciador de pacotes padrão para o ecossistema Node.js.",
  "yarn": "Gerenciador de pacotes alternativo ao npm com foco em velocidade e determinismo.",
  "pnpm": "Gerenciador de pacotes eficiente no uso de espaço em disco por meio de linking.",
  "webpack": "Empacotador de módulos que reúne recursos e transforma código para produção.",
  "rollup": "Bundler otimizado para criação de bibliotecas JavaScript com saída enxuta.",
  "vite": "Ferramenta de build que usa módulos ES para dev server rápido e bundling em produção.",
  "babel": "Transpiler que converte código JavaScript moderno em versões compatíveis com navegadores antigos.",
  "monorepo": "Estratégia de manter múltiplos projetos relacionados dentro de um único repositório.",
  "microservices": "Arquitetura que divide aplicações em serviços menores, independentes e desacoplados.",
  "api gateway": "Componente que expõe APIs de microserviços, roteia requisições e aplica políticas centrais.",
  "grpc": "Framework RPC de alto desempenho que utiliza Protobuf para serialização.",
  "rabbitmq": "Message broker que implementa protocolos de mensageria confiável como AMQP.",
  "kafka": "Plataforma de streaming distribuído para processamento e transporte de grandes volumes de eventos.",
  "redis": "Armazenamento em memória usado como cache, broker de mensagens e banco chave-valor.",
  "memcached": "Sistema de cache em memória simples e distribuído para acelerar aplicações.",
  "caching": "Técnica para armazenar dados frequentemente usados e reduzir latência e carga.",
  "cdn": "Rede de distribuição de conteúdo que entrega ativos estáticos a partir de localizações próximas ao usuário.",
  "ssr": "Server-Side Rendering — renderização de páginas no servidor antes do envio ao cliente.",
  "csr": "Client-Side Rendering — renderização realizada no navegador do usuário via JavaScript.",
  "ssg": "Static Site Generation — pré-renderização de páginas em HTML estático durante o build.",
  "pwa": "Progressive Web App — aplicação web instalável com recursos offline e experiência nativa.",
  "service worker": "Script que roda em segundo plano no navegador para cache offline e notificações push.",
  "linting": "Análise estática de código para detectar problemas e garantir consistência de estilo.",
  "prettier": "Formatador de código que aplica regras de estilo de forma automatizada.",
  "eslint": "Ferramenta de lint para JavaScript/TypeScript que encontra erros e aplica regras de estilo.",
  "github actions": "Serviço de CI/CD integrado ao GitHub para automatizar workflows e pipelines.",
  "jenkins": "Servidor de automação open-source usado para integração contínua e entrega.",
  "prometheus": "Sistema de monitoramento e alerta orientado a séries temporais.",
  "grafana": "Plataforma de visualização e observabilidade para métricas e logs.",
  "logging": "Registro estruturado de eventos e mensagens para diagnóstico e auditoria.",
  "tracing": "Rastreamento distribuído que permite seguir uma requisição através de múltiplos serviços.",
  "owasp": "Open Web Application Security Project — comunidade que publica guias e boas práticas de segurança.",
  "load balancer": "Componente que distribui tráfego entre múltiplos servidores para disponibilidade e escalabilidade.",
  "reverse proxy": "Servidor que encaminha requisições de clientes para servidores backend, usado para balanceamento e segurança.",
  "nginx": "Servidor web e reverse proxy conhecido por alto desempenho e eficiência.",
  "apache": "Servidor web tradicional e extensível, amplamente utilizado em hospedagem.",
  "dns": "Domain Name System — sistema que traduz nomes de domínio em endereços IP.",
  "tls": "Transport Layer Security — protocolo que garante comunicação segura na internet.",

  /* --- Linguagens de programação (principais + históricas) --- */
  "c": "Linguagem de programação de baixo nível com alto desempenho, muito usada em sistemas e software de infraestrutura.",
  "c++": "Extensão de C com suporte a programação orientada a objetos; amplamente usada em software de alto desempenho e jogos.",
  "c#": "Linguagem da Microsoft para a plataforma .NET, tipada estaticamente e orientada a objetos.",
  "java": "Linguagem orientada a objetos que roda na JVM; muito usada em aplicações corporativas e Android.",
  "kotlin": "Linguagem moderna interoperável com Java, frequentemente usada em desenvolvimento Android.",
  "swift": "Linguagem desenvolvida pela Apple para iOS/macOS, com ênfase em segurança e desempenho.",
  "objective-c": "Linguagem baseada em C com extensões orientadas a objetos, usada historicamente em plataformas Apple.",
  "rust": "Linguagem de sistemas que prioriza segurança de memória e concorrência sem garbage collector.",
  "go": "Linguagem desenvolvida pelo Google com foco em simplicidade, concorrência e compilação rápida.",
  "php": "Linguagem de script muito usada no desenvolvimento web do lado servidor.",
  "ruby": "Linguagem dinâmica e orientada a objetos conhecida pela sintaxe expressiva e pelo framework Rails.",
  "perl": "Linguagem de script poderosa para processamento de texto e tarefas administrativas.",
  "r": "Linguagem e ambiente para estatística, análise e visualização de dados.",
  "matlab": "Ambiente e linguagem para cálculo numérico e prototipagem científica.",
  "julia": "Linguagem de alto desempenho projetada para computação técnica e científica.",
  "scala": "Linguagem que une paradigmas funcional e orientado a objetos para a JVM.",
  "haskell": "Linguagem funcional pura com forte sistema de tipos e ênfase em imutabilidade.",
  "erlang": "Linguagem funcional projetada para sistemas distribuídos e tolerantes a falhas.",
  "elixir": "Linguagem funcional construída sobre a VM do Erlang, usada para aplicações escaláveis e concorrentes.",
  "lisp": "Família de linguagens histórica com forte suporte a metaprogramação e listas como estrutura primária.",
  "scheme": "Dialeto minimalista de Lisp usado em educação e pesquisa.",
  "common lisp": "Implementação padronizada de Lisp com bibliotecas ricas para desenvolvimento.",
  "smalltalk": "Linguagem puramente orientada a objetos que influenciou muitos conceitos modernos.",
  "fortran": "Linguagem histórica voltada para computação científica e numérica de alto desempenho.",
  "cobol": "Linguagem histórica projetada para aplicações de negócios e processamento de grandes volumes.",
  "pascal": "Linguagem de ensino e desenvolvimento estruturado, usada historicamente na educação.",
  "ada": "Linguagem projetada para sistemas críticos com foco em segurança, confiabilidade e verificação.",
  "assembly": "Linguagem de baixo nível que mapeia instruções diretamente ao conjunto de instruções do processador.",
  "prolog": "Linguagem lógica usada em inteligência artificial e sistemas de inferência.",
  "f#": "Linguagem funcional que roda na plataforma .NET, com interoperabilidade com C#.",
  "d": "Linguagem de sistemas com sintaxe moderna e foco em performance e produtividade.",
  "delphi": "Ambiente e linguagem (Object Pascal) para desenvolvimento rápido de aplicações desktop.",
  "groovy": "Linguagem dinâmica para a JVM com sintaxe concisa e interoperabilidade com Java.",
  "tcl": "Linguagem de script usada para automação, testes e integração de aplicações.",
  "basic": "Família de linguagens projetada para simplicidade e ensino; evoluiu para variantes modernas.",
  "visual basic": "Implementação da família BASIC com forte integração ao ecossistema Microsoft.",
  "vb.net": "Versão moderna do Visual Basic para a plataforma .NET.",
  "dart": "Linguagem do Google usada com o framework Flutter para construir UIs nativas multiplataforma.",
  "lua": "Linguagem de script leve e embutível, muito usada em jogos e aplicações embarcadas.",
  "scratch": "Linguagem visual educacional para ensinar fundamentos de programação a iniciantes.",
  "clojure": "Linguagem funcional que roda na JVM, com ênfase em imutabilidade e concorrência.",
  "racket": "Dialeto de Scheme usado para educação, pesquisa e criação de DSLs.",
  "sml": "Standard ML — linguagem funcional com tipagem estática e inferência.",
  "crystal": "Linguagem com sintaxe inspirada em Ruby que compila para binários de alto desempenho.",
  "nim": "Linguagem compilada com sintaxe expressiva e foco em performance e segurança.",
  "zig": "Linguagem de sistemas com foco em simplicidade, controle e segurança de memória.",
  "elm": "Linguagem funcional para front-end que compila para JavaScript com foco em confiabilidade.",
  "solidity": "Linguagem para escrever contratos inteligentes em blockchains compatíveis com a EVM (Ethereum).",
  "vhdl": "Linguagem de descrição de hardware usada para modelagem e síntese de circuitos digitais.",
  "verilog": "Outra linguagem de descrição de hardware amplamente usada em design digital.",
  "glsl": "Linguagem de sombreamento para GPUs usada em gráficos 3D.",
  "hlsl": "Linguagem de sombreamento da Microsoft para DirectX.",
  "bash": "Shell e linguagem de script para sistemas Unix/Linux, amplamente usada em automação.",
  "powershell": "Shell e linguagem de automação da Microsoft para administração de sistemas.",
  "awk": "Linguagem de processamento de texto para extração, formatação e relatórios em arquivos de texto.",
  "sed": "Editor de fluxo usado para transformações de texto em pipelines de shell.",
  "apex": "Linguagem proprietária da Salesforce para lógica de plataforma e triggers.",
  "algol": "Linguagem histórica que influenciou muitas linguagens modernas; importante na teoria de linguagens.",
  "bcpl": "Linguagem histórica que precedeu e influenciou o desenvolvimento do C.",
  "bliss": "Linguagem de sistemas histórica usada em software de baixo nível.",
  "forth": "Linguagem stack-based usada em sistemas embarcados e aplicações de controle.",
  "icon": "Linguagem com facilidades para manipulação de strings e estrutura de dados dinâmicas.",
  "eiffel": "Linguagem orientada a objetos com ênfase em design por contrato e robustez.",

  /* --- Disciplinas de Ciência da Computação (curso I/II/III seguindo padrão Python) --- */
  "discrete mathematics": "Ramo da matemática focado em estruturas discretas (lógica, conjuntos, grafos) aplicadas à computação.",
  "discrete mathematics I": "Curso introdutório cobrindo lógica proposicional, conjuntos, funções e relações.",
  "discrete mathematics II": "Curso intermediário com combinatória, grafos e técnicas de prova matemáticas.",

  "calculus": "Fundamentos de cálculo diferencial e integral usados em várias áreas de computação.",
  "calculus I": "Cálculo diferencial e limites — fundamentos para análise contínua.",
  "calculus II": "Integrais, séries e introdução a cálculo multivariável.",

  "linear algebra": "Estudo de vetores, matrizes e transformações lineares essenciais para ML e gráficos.",
  "linear algebra I": "Espaços vetoriais, matrizes e sistemas lineares básicos.",
  "linear algebra II": "Autovalores, autovetores e decomposições matriciais aplicadas.",

  "probability and statistics": "Conceitos de probabilidade e estatística fundamentais para ciência de dados.",
  "probability and statistics I": "Probabilidade básica, variáveis aleatórias e distribuições.",
  "probability and statistics II": "Inferência estatística, testes de hipóteses e regressão.",

  "algorithmics": "Estudo de algoritmos, complexidade e técnicas de projeto de algoritmos.",
  "algorithmics I": "Algoritmos e análise de complexidade; ordenação, busca e estruturas básicas.",
  "algorithmics II": "Técnicas avançadas: programação dinâmica, grafos e algoritmos de fluxo.",
  "algorithmics III": "Tópicos avançados e algoritmos em profundidade (approx, randomizados, parametrizados).",

  "data structures I": "Estudo de estruturas fundamentais (listas, pilhas, filas, árvores, tabelas de espalhamento).",
  "data structures II": "Estruturas avançadas e aplicações (árvores balanceadas, heaps, grafos e índices).",

  "programming languages": "Disciplina que estuda paradigmas, semântica e design de linguagens de programação.",
  "programming languages I": "Introdução a paradigmas imperativo e orientado a objetos.",
  "programming languages II": "Paradigmas funcionais, teoria da linguagem e semântica formal.",

  "operating systems": "Princípios de sistemas operacionais: gerenciamento de processos, memória e I/O.",
  "operating systems I": "Conceitos básicos: escalonamento, gerenciamento de memória e sistemas de arquivos.",
  "operating systems II": "Tópicos avançados: sincronização, virtualização e kernels modernos.",

  "computer architecture": "Estudo da organização e projeto de computadores e unidades de processamento.",
  "computer architecture I": "Circuitos básicos, ISA e pipeline de processadores.",
  "computer architecture II": "Arquiteturas avançadas, cache, paralelismo e otimização de desempenho.",

  "compilers": "Teoria e implementação de compiladores: análise léxica, sintática e geração de código.",
  "compilers I": "Front-end de compiladores: gramáticas, parsing e análise semântica.",
  "compilers II": "Back-end: otimização, geração de código e técnicas modernas de compilação.",

  "databases I": "Modelagem de dados, SQL e princípios de bancos de dados relacionais.",
  "databases II": "Sistemas distribuídos de dados, NoSQL, indexação e tuning de performance.",

  "software engineering": "Princípios de engenharia de software: projeto, requisitos e manutenção.",
  "software engineering I": "Processos de desenvolvimento, UML e design de software básico.",
  "software engineering II": "Arquitetura de software, padrões de projeto e qualidade de software.",
  "software engineering III": "Práticas avançadas: refatoração, métricas, governança e DevOps.",

  "software testing": "Técnicas e metodologias para assegurar qualidade por meio de testes.",
  "software testing I": "Testes unitários, integração e criação de suites de teste.",
  "software testing II": "Testes de carga, automação e testes ponta a ponta (E2E).",

  "computer networks": "Princípios, protocolos e camadas que compõem redes de computadores.",
  "computer networks I": "Modelos OSI/TCP, protocolos básicos (IP, TCP, UDP) e roteamento.",
  "computer networks II": "Redes avançadas, segurança de rede e comunicações distribuídas.",

  "distributed systems": "Modelos e algoritmos para sistemas distribuídos consistentes e tolerantes a falhas.",
  "distributed systems I": "Conceitos de comunicação distribuída, consistência e replicação.",
  "distributed systems II": "Coordenação, tolerância a falhas e sistemas escaláveis (consensus, Paxos/Raft).",

  "parallel computing": "Conceitos de programação paralela, sincronização e arquiteturas paralelas.",
  "parallel computing I": "Programação multithread, modelos de memória e problemas de concorrência.",
  "parallel computing II": "GPU computing, MPI e otimizações para alto desempenho.",

  "theory of computation": "Fundamentos teóricos: autômatos, linguagens formais e decidibilidade.",
  "automata theory": "Estudo de autômatos finitos, máquinas de Turing e classes de complexidade.",

  "artificial intelligence I": "Introdução a IA: busca, representação do conhecimento e algoritmos básicos.",
  "artificial intelligence II": "Tópicos avançados: raciocínio, agentes inteligentes e planejamento.",

  "machine learning I": "Fundamentos de ML: regressão, classificação e avaliação de modelos.",
  "machine learning II": "Técnicas avançadas: ensemble, redes neurais e regularização.",
  "machine learning III": "Tópicos avançados: deep learning, otimização e escalonamento de modelos.",

  "computer graphics": "Técnicas de geração e manipulação de imagens e modelos 3D.",
  "computer graphics I": "Fundamentos de rasterização, modelagem e pipeline gráfico.",
  "computer graphics II": "Sombreamento, ray tracing e técnicas avançadas de renderização.",

  "human-computer interaction": "Estudo do design centrado no usuário e usabilidade de interfaces.",
  "hci I": "Princípios de design, prototipagem e avaliação de usabilidade.",

  "computer vision I": "Fundamentos de visão computacional: detecção, classificação e segmentação.",
  "natural language processing I": "Processamento de linguagem natural: tokenização, modelos e análise de texto.",

  "embedded systems": "Desenvolvimento de sistemas com recursos restritos e integração hardware/software.",
  "embedded systems I": "Programação de microcontroladores, sensores e comunicação embarcada.",

  "real-time systems": "Sistemas com requisitos de tempo rígido para execução determinística.",
  "numerical methods": "Técnicas numéricas para solução aproximada de problemas matemáticos.",

  "cryptography I": "Princípios de criptografia simétrica e assimétrica e protocolos básicos.",
  "cryptography II": "Protocolos avançados, assinatura digital, PKI e aplicações práticas.",

  "information theory": "Teoria da informação, entropia e codificação para comunicação eficiente.",
  "bioinformatics": "Aplicações de computação para análise de dados biológicos e genômicos.",
  "ethics in computing": "Aspectos éticos, privacidade e responsabilidade profissional na computação.",
  "research methods": "Metodologias de pesquisa, redação científica e experimentação em computação.",

  /* --- GitHub / Git (termos comuns) --- */
  "repository": "Repositório — local (ou remoto) que armazena o histórico de um projeto em Git.",
  "fork": "Cópia de um repositório na sua conta usada para desenvolver mudanças independentemente do original.",
  "pull request": "Requisição para integrar mudanças de um branch/fork; permite revisão de código antes do merge.",
  "issue": "Registro de tarefa, bug ou discussão associado a um projeto; usado para gerenciamento de trabalho.",
  "branch": "Ramificação do histórico de commits para desenvolver funcionalidades isoladamente.",
  "merge": "Operação que integra mudanças de um branch em outro, consolidando o histórico.",
  "merge conflict": "Conflito que ocorre quando alterações incompatíveis existem em regiões sobrepostas do código.",
  "clone": "Cópia local de um repositório remoto obtida com `git clone`.",
  "push": "Enviar commits locais para um repositório remoto.",
  "pull": "Atualizar sua cópia local com commits presentes no repositório remoto.",
  "remote": "Referência a repositórios remotos configurados no Git (ex.: origin, upstream).",
  "gitignore": "Arquivo que define padrões de arquivos a serem ignorados pelo Git.",
  "readme.md": "Arquivo que documenta propósito, instalação e uso do projeto; primeira leitura para contribuintes.",
  "contributing.md": "Guia para contribuições que explica como enviar PRs, padrões e testes exigidos.",
  "codeowners": "Arquivo que indica responsáveis por áreas do código e facilita designação automática em PRs.",
  "tagging": "Marcação de commits com tags para identificar versões ou marcos (releases).",
  "release": "Versão publicada de um software, normalmente associada a uma tag e assets binários.",
  "workflow": "Arquivo YAML que define jobs de CI/CD (ex.: GitHub Actions) para automação de builds e testes.",

  /* --- Empresas, institutos e organizações (cenário nacional) --- */
  "nubank": "Fintech brasileira que oferece serviços bancários digitais e grande atuação em tecnologia.",
  "mercado livre": "Plataforma de e‑commerce e serviços financeiros com forte presença tecnológica no Brasil.",
  "totvs": "Empresa brasileira de software de gestão empresarial (ERP) com ampla atuação nacional.",
  "ci&t": "Consultoria e empresa de engenharia digital originada no Brasil, focada em transformação digital.",
  "stefanini": "Companhia brasileira de serviços de TI e consultoria em tecnologia.",
  "ifood": "Plataforma de delivery que une logística e tecnologia para entrega de alimentos.",
  "stone": "Empresa de pagamentos e soluções financeiras com forte foco em tecnologia.",
  "pagseguro": "Plataforma brasileira de pagamentos digitais e serviços financeiros.",
  "concrete": "Empresa brasileira de tecnologia especializada em engenharia de software e produtos digitais.",
  "vtex": "Plataforma brasileira de comércio eletrônico (SaaS) usada por grandes varejistas.",
  "uol": "Empresa brasileira de internet com serviços de hospedagem, cloud e conteúdo digital.",

  "cpqd": "Centro de pesquisa e desenvolvimento em telecomunicações e tecnologias digitais no Brasil.",
  "lncc": "Laboratório Nacional de Computação Científica — instituto de pesquisa em computação no Brasil.",
  "ipt": "Instituto de Pesquisas Tecnológicas — centro de pesquisa e desenvolvimento em tecnologia aplicada.",
  "cesar": "Centro de Estudos e Sistemas Avançados do Recife — instituto de inovação e desenvolvimento tecnológico.",
  "serpro": "Serviço Federal de Processamento de Dados — órgão que presta serviços de TI ao governo federal.",
  "fapesp": "Fundação de Amparo à Pesquisa do Estado de São Paulo — importante agência de fomento à pesquisa.",

  /* --- Dúvidas frequentes de alunos de programação (FAQ) --- */
  "how to start programming": "Comece escolhendo uma linguagem (ex.: Python/JavaScript), faça pequenos projetos práticos e estude fundamentos (algoritmos, estruturas de dados).",
  "which language to start": "Recomendado: Python para iniciantes ou JavaScript para web; escolha alinhada ao seu objetivo (web, mobile, dados).",
  "how to debug": "Use debuggers, logs, divida o problema em etapas, reproduza o erro e leia cuidadosamente mensagens de erro.",
  "why is my code not running": "Verifique sintaxe, dependências, versões, ambiente (PATH, NODE/PYTHON), e consulte o console/terminal para mensagens.",
  "how to learn algorithms": "Pratique em plataformas de problemas, estude complexidade (Big‑O) e implemente soluções variadas (ordenacao, grafos, DP).",
  "how to get first job": "Construa portfólio com projetos reais, contribua em OSS, prepare‑se para entrevistas técnicas e faça networking.",
  "how to use git and github": "Aprenda comandos básicos (clone, add, commit, push, pull, branch, merge) e o fluxo de PR/Code Review no GitHub.",
  "how to contribute to open source": "Leia CONTRIBUTING.md, escolha issues marcadas como 'good first issue' e submeta PRs pequenos e testados.",
  "what is version control": "Sistema para controlar histórico de alterações, colaborar com outros desenvolvedores e recuperar versões anteriores.",
  "what is object oriented programming": "Paradigma baseado em objetos que encapsulam estado e comportamento (encapsulamento, herança, polimorfismo).",
  "what is recursion": "Técnica onde uma função se chama até atingir condição base; útil para problemas recursivos como árvores.",
  "how to prepare for interviews": "Pratique algoritmos, revise projetos do portfólio, estude system design e treine soft skills e behavioral questions.",
  "best resources to learn": "Documentação oficial, cursos práticos, livros clássicos, tutoriais e comunidades como StackOverflow e GitHub.",
  "how to improve code quality": "Escreva testes, faça code reviews, use linters e siga boas práticas de design e refatoração.",
  "how to debug merge conflicts": "Leia o diff, entenda as mudanças concorrentes, escolha/mescle manualmente e teste antes de commitar.",
  "what is rest api": "Estilo arquitetural para APIs que usa HTTP, recursos identificáveis e métodos padronizados (GET, POST, PUT, DELETE).",
  "what is http status 404": "Código de resposta HTTP que indica que o recurso solicitado não foi encontrado no servidor.",

  /* --- Disciplinas de Análise e Desenvolvimento de Sistemas --- */
  "systems analysis": "Análise de sistemas — técnicas para levantamento de requisitos, modelagem de processos e especificação de soluções.",
  "systems analysis I": "Introdução à análise de sistemas: elicitação de requisitos, entrevistas e modelagem básica.",
  "systems analysis II": "Modelagem avançada, diagramas UML, casos de uso e especificação de requisitos não funcionais.",

  "systems development": "Desenvolvimento de sistemas — ciclo de vida, metodologias e práticas de construção de software.",
  "systems development I": "Fundamentos do desenvolvimento: ambientes, versionamento e fluxos de trabalho básicos.",
  "systems development II": "Integração, testes, deploy e práticas de manutenção.",
  "systems development III": "Processos de engenharia de software aplicados a projetos reais e manutenção evolutiva.",

  "requirements engineering": "Engenharia de requisitos — elicitação, análise, documentação e validação de requisitos.",
  "requirements engineering I": "Técnicas de elicitação, entrevistas, prototipagem e documentação de requisitos.",
  "requirements engineering II": "Gerência de requisitos, rastreabilidade e validação com stakeholders.",

  "software design": "Projeto de software — modelagem, padrões de projeto e decisões arquiteturais.",
  "software design I": "Princípios de design, UML e padrões básicos (Factory, Singleton, MVC).",
  "software design II": "Design baseado em componentes, design para escalabilidade e manutenibilidade.",

  "software architecture": "Arquitetura de software — estilos arquiteturais, camadas, microservices e padrões.",
  "software architecture I": "Conceitos de arquitetura, padrões e trade-offs de desempenho e manutenção.",

  "uml": "Unified Modeling Language — notação para modelagem de requisitos, arquitetura e comportamento do sistema.",
  "use cases": "Casos de uso — técnica para descrever interações entre atores e o sistema e definir requisitos funcionais.",

  "business analysis": "Análise de negócios — alinhamento entre necessidades organizacionais e soluções de TI.",
  "bpmn": "Business Process Model and Notation — notação para modelagem de processos de negócio.",

  "database design": "Projeto de banco de dados — modelagem conceitual (ER), normalização e modelagem lógica.",
  "database design I": "Modelagem ER, normalização e criação de esquemas relacionais.",

  "web development": "Desenvolvimento web — construção de aplicações web front-end e back-end.",
  "web development I": "Fundamentos de HTML, CSS e JavaScript para web.",
  "web development II": "Back-end, APIs, autenticação e deploy.",

  "mobile development": "Desenvolvimento móvel — criação de aplicações para plataformas móveis (Android/iOS).",
  "mobile development I": "Introdução ao desenvolvimento móvel com SDKs e paradigmas nativos ou multiplataforma.",

  "project management": "Gerência de projetos de software — planejamento, cronograma, estimativas e acompanhamento.",
  "project management I": "Planejamento de projetos, estimativas e uso de ferramentas de controle.",

  "quality assurance": "Garantia de qualidade — processos e técnicas para assegurar que o software atende aos requisitos.",
  "quality assurance I": "Testes funcionais, revisão de código e automação de testes.",

  "configuration management": "Gerência de configuração — controle de versões, builds e automação de deploy.",
  "systems integration": "Integração de sistemas — técnicas de integração, middlewares e APIs.",

  "case tools": "Ferramentas CASE — ferramentas que suportam análise, projeto e modelagem de sistemas.",
  "user stories": "User stories — técnica ágil para descrever requisitos do ponto de vista do usuário.",
  "software prototyping": "Prototipagem de software — criação rápida de protótipos para validação de requisitos com usuários.",

  "it governance": "Governança de TI — políticas, processos e práticas para alinhar TI ao negócio.",
  "legacy systems": "Sistemas legados — manutenção, modernização e desafios de integração com sistemas antigos.",
  "erp systems": "Sistemas ERP — sistemas integrados de gestão empresarial e implementação/parametrização.",
  "bpm tools": "Ferramentas de BPM — software para modelagem, automação e monitoramento de processos.",

  /* --- Disciplinas da Faculdade de Direito --- */
  "constitutional law": "Direito Constitucional — estudo da constituição, estruturas do Estado e direitos fundamentais.",
  "constitutional law I": "Princípios constitucionais, separação de poderes e controle de constitucionalidade.",
  "constitutional law II": "Direitos fundamentais, ações constitucionais e interpretação constitucional.",

  "administrative law": "Direito Administrativo — organização e atuação da administração pública, atos e responsabilidade.",
  "administrative law I": "Princípios administrativos, poderes, atos e regimes jurídicos.",
  "administrative law II": "Licitações, contratos administrativos e responsabilidade civil do Estado.",

  "civil law": "Direito Civil — normas que regulam as relações privadas, obrigações e direitos reais.",
  "civil law I": "Parte geral do direito civil: pessoas, bens, fatos jurídicos e prescrição.",
  "civil law II": "Direito das Obrigações e contratos.",
  "civil law III": "Direito de Família e Sucessões.",

  "civil procedure": "Processo Civil — regras e procedimentos para tutela jurisdicional das relações civis.",
  "civil procedure I": "Petição inicial, tutela provisória, procedimentos comuns e recursos.",
  "civil procedure II": "Execução, procedimentos especiais e cumprimento de sentença.",

  "criminal law": "Direito Penal — tipificação de crimes, penas e princípios de aplicação penal.",
  "criminal law I": "Parte Geral do Direito Penal: princípios, imputabilidade e penas.",
  "criminal law II": "Parte Especial: crimes em espécie.",

  "criminal procedure": "Processo Penal — investigação, ação penal, provas e julgamento criminal.",
  "criminal procedure I": "Inquérito policial, medidas cautelares e ações penais.",
  "criminal procedure II": "Julgamento, recursos, execução penal e medidas alternativas.",

  "labor law": "Direito do Trabalho — regulação das relações de trabalho e proteção do empregado.",
  "labor law I": "Contratos de trabalho, jornada, remuneração e direitos fundamentais trabalhistas.",
  "labor law II": "Direito coletivo do trabalho, negociações sindicais e processo trabalhista.",

  "tax law": "Direito Tributário — princípios tributários, tributos e obrigações fiscais.",
  "tax law I": "Sistema tributário, competência tributária e espécies de tributos.",
  "tax law II": "Contencioso tributário, execução fiscal e planejamento tributário.",

  "commercial law": "Direito Comercial — normas aplicáveis a atos de comércio e empresários.",
  "commercial law I": "Empresário, estabelecimento, títulos de crédito e contratos mercantis.",

  "corporate law": "Direito Societário — sociedades empresariais, governança e contratos societários.",
  "corporate law I": "Tipos societários, constituição, responsabilidade dos sócios e capital social.",
  "corporate law II": "Operações societárias, governança, fusões e aquisições.",

  "contract law": "Direito Contratual — formação, eficácia, interpretação e extinção dos contratos.",
  "tort law": "Responsabilidade Civil — reparação de danos, responsabilidade objetiva e subjetiva.",

  "property law": "Direito das Coisas — posse, propriedade, usucapião e direitos reais.",
  "property law I": "Posse, propriedade e modos de aquisição de bens.",
  "property law II": "Direitos reais limitados, registro imobiliário e garantias reais.",

  "family law": "Direito de Família — casamento, uniões, regime de bens, filiação e alimentos.",
  "succession law": "Direito das Sucessões — herança, testamentos, inventário e partilha.",

  "consumer protection law": "Direito do Consumidor — proteção contratual, prática comercial e defesa do consumidor.",
  "environmental law": "Direito Ambiental — proteção do meio ambiente, licenciamento e responsabilização.",

  "intellectual property law": "Propriedade Intelectual — direitos autorais, marcas, patentes e proteção de criações.",
  "copyright law": "Direito Autoral — proteção de obras intelectuais e direitos conexos.",
  "patent law": "Patentes — proteção de invenções e propriedade industrial.",
  "trademark law": "Marcas — registro, proteção e litígios relativos a sinais distintivos.",

  "international law": "Direito Internacional Público — relações entre Estados e organismos internacionais.",
  "private international law": "Direito Internacional Privado — conflitos de leis e regras de jurisdição.",
  "international trade law": "Direito do Comércio Internacional — contratos, tratados e regulação do comércio exterior.",

  "human rights law": "Direitos Humanos — proteção e mecanismos nacionais e internacionais de proteção.",
  "constitutional remedies": "Ações constitucionais (habeas corpus, mandado de segurança, habeas data, ação popular).",

  "arbitration and mediation": "Arbitragem e Mediação — métodos alternativos de resolução de conflitos.",
  "evidence law": "Provas — meios de prova, valoração probatória e cadeia de custódia.",
  "legal ethics": "Ética profissional — deveres, prerrogativas e responsabilidade de advogados e operadores do direito.",

  "jurisprudence": "Jurisprudência e teoria do direito — estudos conceituais e interpretações jurídicas.",
  "legal history": "História do Direito — evolução das normas, instituições e sistemas jurídicos.",
  "sociology of law": "Sociologia do Direito — interações entre direito, instituições e sociedade.",
  "comparative law": "Direito Comparado — análise comparativa entre sistemas jurídicos.",

  "electoral law": "Direito Eleitoral — normas que regulamentam processos eleitorais e partidos políticos.",
  "administrative procedure": "Processo Administrativo — procedimentos no âmbito da administração pública.",
  "public procurement law": "Contratos Públicos — licitações, contratos e fiscalização.",

  "bankruptcy law": "Falências e Recuperação Judicial — regimes de insolvência e reestruturação empresarial.",
  "insurance law": "Direito dos Seguros — contratos de seguro, cobertura e regulação.",
  "banking law": "Direito Bancário — regulação das instituições financeiras e operações bancárias.",
  "maritime law": "Direito Marítimo — transporte, contratos e responsabilidades no transporte marítimo.",

  "immigration law": "Direito Migratório — normas sobre entrada, permanência e naturalização de estrangeiros.",
  "health law": "Direito da Saúde — regulação sanitária, bioética e responsabilidade médica.",
  "sports law": "Direito Desportivo — regulação do esporte, contratos e responsabilidade civil esportiva.",
  "entertainment law": "Direito do Entretenimento — contratos artísticos, direitos autorais e indústria cultural.",

  "cyber law": "Direito Digital — crimes cibernéticos, regulação de internet e contratos eletrônicos.",
  "data protection law": "Proteção de Dados — privacidade e tratamento de dados pessoais (LGPD/GDPR).",

  "penitentiary law": "Execução Penal — cumprimento de penas, medidas alternativas e direitos dos presos.",
  "tax procedure": "Processo Tributário — contencioso fiscal e procedimentos de execução tributária.",

  "legal clinic": "Clínica Jurídica — prática supervisionada, atendimento e estágio jurídico.",
  "moot court": "Simulação de julgamentos — prática de argumentação e procedimentos forenses.",
  "notarial and registration law": "Direito Notarial e Registral — atos notariais, registros públicos e validade documental.",

  "consumer credit law": "Direito do Crédito e Recuperação de Crédito — contratos de crédito e cobranças.",
  "public finance": "Finanças Públicas — orçamento público, receitas e despesas do Estado.",

  /* --- Professores / Corpo Docente (Tecnologia e áreas relacionadas) --- */
  "janaina souza": "Professora e coordenadora do curso de Tecnologia; ministra aulas de Python e coordena atividades acadêmicas do curso.",
  "paulo": "Professor dos cursos de Tecnologia; leciona disciplinas práticas e orientadas a projetos.",
  "andre": "Professor do curso de Tecnologia; ministra disciplinas de programação de sistemas, incluindo C.",
  "john": "Professor focado em Design em Tecnologia; ministra disciplinas de UX, UI e design de interação.",
  "brendo rodrigo": "Professor que ministra aulas de Python para alunos do curso de Tecnologia.",
  "francisco sousa": "Professor de Matemática; leciona Cálculo, Lógica e Álgebra aplicados à tecnologia.",
  "laura mendes": "(nome simulado) Professora de Inglês — ministra inglês técnico e conversação voltados para cursos de tecnologia.",

  /* --- VSCode / editor terms --- */
  "vscode": "Visual Studio Code — editor de código leve e extensível da Microsoft.",
  "vscode extension": "Extensão do VSCode que adiciona funcionalidades (linters, debuggers, temas, snippets).",
  "command palette": "Command Palette — atalho para executar comandos do VSCode rapidamente (Ctrl+Shift+P).",
  "integrated terminal": "Terminal integrado ao editor para executar comandos sem sair do VSCode.",
  "intellisense": "Autocompletação e sugestões inteligentes de código.",
  "debugger": "Depurador integrado com breakpoints, step e watch variables.",
  "settings.json": "Arquivo de configuração (JSON) para ajustes do editor e do workspace.",
  "launch.json": "Configuração de execução/depuração para projetos no VSCode.",
  "tasks.json": "Definição de tarefas automatizadas executáveis pelo VSCode.",
  "workspace": "Conjunto de pastas/arquivos abertos no VSCode com configurações específicas.",
  "user settings": "Configurações globais do usuário aplicadas a todas as instâncias do VSCode.",
  "workspace settings": "Configurações específicas do workspace que sobrepõem as user settings.",
  "snippets": "Trechos de código reutilizáveis inseridos rapidamente no editor.",
  "extensions marketplace": "Loja de extensões do VSCode para buscar e instalar plugins.",
  "remote development": "Desenvolvimento remoto (containers, WSL, SSH) integrado ao VSCode.",

  /* --- Laboratórios e espaços do CIESA --- */
  "laboratorio 1": "Laboratório 1 — laboratório de tecnologia (inativo). Alguns alunos relataram avistamentos 'fantasmas' — acesso restrito.",
  "lab 1": "Laboratório 1 — laboratório de tecnologia (inativo). Alguns alunos relataram avistamentos 'fantasmas' — acesso restrito.",

  "laboratorio 2": "Laboratório 2 — laboratório de tecnologia ativo, equipado para aulas práticas e projetos.",
  "lab 2": "Laboratório 2 — laboratório de tecnologia ativo, equipado para aulas práticas e projetos.",

  "laboratorio 3": "Laboratório 3 — laboratório de tecnologia (inativo). Relatos esporádicos de fenômenos estranhos foram registrados.",
  "lab 3": "Laboratório 3 — laboratório de tecnologia (inativo). Relatos esporádicos de fenômenos estranhos foram registrados.",

  "laboratorio 4": "Laboratório 4 — laboratório de tecnologia ativo para aulas práticas, oficinas e pesquisa.",
  "lab 4": "Laboratório 4 — laboratório de tecnologia ativo para aulas práticas, oficinas e pesquisa.",

  "refeitorio": "Refeitório — local para lanchar e refeições; venda de lanches e convivência estudantil.",
  "cafeteria": "Refeitório — local para lanchar e refeições; venda de lanches e convivência estudantil.",

  "sala dos professores": "Sala dos professores — localizada um andar abaixo do térreo; espaço de trabalho e reuniões da docência.",
  "staff room": "Sala dos professores — localizada um andar abaixo do térreo; espaço de trabalho e reuniões da docência.",

  "biblioteca fisica": "Biblioteca física — localizada no último andar do prédio; acervo e empréstimos presenciais.",
  "physical library": "Biblioteca física — localizada no último andar do prédio; acervo e empréstimos presenciais.",

  /* --- Entrada pessoal: criador do site --- */
  "nevext": "Nevext — eu, o criador (autor/administrador do glossário).",

  /* --- Ligas acadêmicas (Tecnologia) --- */
  "chronokairo": "Chronokairo — liga acadêmica de tecnologia focada em projetos interdisciplinares e pesquisa aplicada.",
  "latij": "Latij — liga acadêmica de tecnologia dedicada a inovação, competições e desenvolvimento de soluções tecnológicas.",
};

// Function used on index.html to redirect to result.html
function buscar() {
  const termo = document.getElementById('campo-pesquisa').value;
  window.location.href = `result.html?termo=${encodeURIComponent(termo)}`;
}

// Function used on result.html to perform the search
function executarBusca(termo) {
  termo = termo.toLowerCase();
  const resultados = Object.keys(glossario).filter(chave =>
    chave.toLowerCase().includes(termo)
  );

  const divResultados = document.getElementById("resultados") || document.getElementById("buscar");

  // add class so CSS can control height/scroll/appearance
  divResultados.classList.add('glossario-list');

  if (resultados.length > 0) {
    divResultados.innerHTML = resultados.map(chave => {
      const id = 'glossario-' + chave.replace(/[^a-z0-9\-_]/gi, '-').toLowerCase();
      return `
        <div class="glossario-item" id="${id}">
          <h3 class="glossario-term">${chave}</h3>
          <p class="glossario-definition">${glossario[chave]}</p>
        </div>
      `;
    }).join("");
  } else {
    // build mailto with the searched term so the user can request adding it
    const mailto = 'mailto:nevext@outlook.com?subject=' + encodeURIComponent('Add glossary term: ' + termo) + '&body=' + encodeURIComponent('Please add the following term to the glossary: ' + termo + '\n\nDefinition suggestion:');

    divResultados.innerHTML = `
      <div class="glossario-item not-found">
        <p>Term not found. Try again.</p>
        <p>Would you like to add this term? <a href="${mailto}" target="_blank" rel="noopener">Send an email to Nevext</a></p>
      </div>
    `;
  }
}

// Detect if we are on the results page and show the query from the URL
const params = new URLSearchParams(window.location.search);
const termoURL = params.get("termo");

if (termoURL) {
  executarBusca(termoURL);
} 

// Add event to the search button (works on both index and result)
const botao = document.getElementById("botao-pesquisa");
if (botao) {
  botao.addEventListener("click", () => {
    const termo = document.getElementById("campo-pesquisa").value;
    // If on result.html, perform search directly
    if (window.location.pathname.includes("result.html")) {
      executarBusca(termo);
    } else {
      // If on index.html, redirect
      buscar();
    }
  });
}