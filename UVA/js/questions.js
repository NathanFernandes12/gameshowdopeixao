const questions = {

  easy: [
    {
      question: "Qual desses peixes tem a cauda de cor avermelhada?",
      options: ["Pacu", "Pirarara", "Pirarucu", "Dourado"],
      correct: 1,
      value: 1000
    },
    {
      question: "Qual peixe é conhecido como o gigante da Amazônia?",
      options: ["Tambaqui", "Tucunaré", "Pirarucu", "Jaraqui"],
      correct: 2,
      value: 2000
    },
    {
      question: "Qual destes peixes é um predador voraz da Amazônia?",
      options: ["Tambaqui", "Tucunaré", "Jaraqui", "Matrinxã"],
      correct: 1,
      value: 3000
    },
    {
      question: "Qual peixe é famoso por seus dentes afiados?",
      options: ["Piranha", "Pacu", "Jaraqui", "Curimatã"],
      correct: 0,
      value: 5000
    },
    {
      question: "Qual peixe é conhecido como 'dourado da Amazônia'?",
      options: ["Tambaqui", "Matrinxã", "Pirarucu", "Tucunaré"],
      correct: 1,
      value: 7000
    },
    {
      question: "Qual destes peixes é herbívoro?",
      options: ["Piranha", "Pacu", "Tucunaré", "Traíra"],
      correct: 1,
      value: 10000
    },
    {
      question: "Qual peixe respira ar atmosférico?",
      options: ["Tambaqui", "Jaraqui", "Pirarucu", "Matrinxã"],
      correct: 2,
      value: 15000
    },
    {
      question: "Qual peixe é conhecido por realizar grandes migrações?",
      options: ["Jaraqui", "Acará", "Traíra", "Aruanã"],
      correct: 0,
      value: 20000
    },
    {
      question: "Qual destes peixes possui escamas muito grandes?",
      options: ["Pacu", "Pirarucu", "Jaraqui", "Matrinxã"],
      correct: 1,
      value: 30000
    },
    {
      question: "Qual peixe é conhecido como 'bacalhau da Amazônia'?",
      options: ["Pirarucu", "Tambaqui", "Surubim", "Filhote"],
      correct: 0,
      value: 50000
    }
  ],
  medium: [
    {
      question: "Qual é o período de defeso do Tambaqui na Amazônia?",
      options: ["Out-Jan", "Nov-Fev", "Dez-Mar", "Jan-Abr"],
      correct: 1,
      value: 5000
    },
    {
      question: "Qual o peso médio de um Pirarucu adulto?",
      options: ["40-60kg", "60-80kg", "80-100kg", "100-120kg"],
      correct: 2,
      value: 10000
    },
    {
      question: "Qual a principal característica do Acará-Disco?",
      options: ["Formato circular", "Cores vibrantes", "Nado rápido", "Escamas grandes"],
      correct: 0,
      value: 15000
    },
    {
      question: "Qual peixe amazônico pode produzir descargas elétricas?",
      options: ["Arraia", "Poraquê", "Candiru", "Bodó"],
      correct: 1,
      value: 25000
    },
    {
      question: "Qual a principal época de reprodução do Tucunaré?",
      options: ["Cheia", "Vazante", "Seca", "Enchente"],
      correct: 2,
      value: 35000
    },
    {
      question: "Qual peixe é conhecido por construir ninhos?",
      options: ["Acará", "Tucunaré", "Tambaqui", "Matrinxã"],
      correct: 1,
      value: 50000
    },
    {
      question: "Qual característica única do peixe Candiru?",
      options: ["Parasita", "Venenoso", "Elétrico", "Fosforescente"],
      correct: 0,
      value: 75000
    },
    {
      question: "Qual o habitat preferido do Aruanã?",
      options: ["Igapó", "Igarapé", "Rio aberto", "Lagos"],
      correct: 0,
      value: 100000
    },
    {
      question: "Qual peixe pode respirar ar e andar na terra?",
      options: ["Tamuatá", "Poraquê", "Acará", "Bodó"],
      correct: 0,
      value: 250000
    },
    {
      question: "Qual a principal característica do Baiacu?",
      options: ["Saltar alto", "Inflar o corpo", "Mudar de cor", "Nadar de ré"],
      correct: 1,
      value: 500000
    }
  ],
  hard: [
    {
      question: "Qual o nome científico do Pirarucu?",
      options: ["Arapaima gigas", "Colossoma macropomum", "Cichla ocellaris", "Brycon amazonicus"],
      correct: 0,
      value: 10000
    },
    {
      question: "Qual a temperatura ideal para criação de Tambaqui?",
      options: ["20-24°C", "24-28°C", "28-32°C", "32-36°C"],
      correct: 2,
      value: 25000
    },
    {
      question: "Qual o tempo médio de incubação dos ovos do Tucunaré?",
      options: ["2-3 dias", "3-4 dias", "4-5 dias", "5-6 dias"],
      correct: 1,
      value: 50000
    },
    {
      question: "Qual a voltagem máxima que um Poraquê pode produzir?",
      options: ["400V", "600V", "800V", "1000V"],
      correct: 2,
      value: 100000
    },
    {
      question: "Qual o período de gestação da Arraia amazônica?",
      options: ["3-4 meses", "5-6 meses", "7-8 meses", "9-10 meses"],
      correct: 1,
      value: 150000
    },
    {
      question: "Qual a profundidade máxima que o Pirarucu pode alcançar?",
      options: ["10 metros", "20 metros", "30 metros", "40 metros"],
      correct: 2,
      value: 250000
    },
    {
      question: "Quantas espécies de Acará existem na Amazônia?",
      options: ["Mais de 50", "Mais de 100", "Mais de 150", "Mais de 200"],
      correct: 3,
      value: 400000
    },
    {
      question: "Qual o tempo de vida médio de um Pirarucu em ambiente natural?",
      options: ["15-20 anos", "20-25 anos", "25-30 anos", "30-35 anos"],
      correct: 1,
      value: 600000
    },
    {
      question: "Qual a velocidade máxima que um Dourado pode atingir?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      correct: 2,
      value: 800000
    },
    {
      question: "Qual o comprimento máximo registrado de um Pirarucu?",
      options: ["3 metros", "4 metros", "4,5 metros", "5 metros"],
      correct: 1,
      value: 1000000
    }
  ]
};