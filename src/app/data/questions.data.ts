import Question from "../models/question";

export default function getQuestions() {
    return [
        {
            id: 1,
            showSongs: false,
            text: "Qual filme devemos ver imediatamente?",
            image: "https://i.chzbgr.com/full/9076215296/h4CE03482/funny-meme-about-weekend-plans-being-netflix",
            alternatives: [
                { text: "Thor 2: O sofrimento continua", isCorrect: false },
                { text: "O Resgate do Soldado Ryan", isCorrect: false },
                { text: "Matrix", isCorrect: false },
                { text: "O Auto da Compadecida", isCorrect: false },
                { text: "A Origem", isCorrect: false },
            ]
        },
        {
            id: 2,
            showSongs: false,
            text: "Esse erro de português eu tolero: (imagem acima meramente ilustrativa)",
            image: "./assets/hexa.jpeg",
            alternatives: [
                { text: "PULÇO", isCorrect: false },
                { text: "Em fim", isCorrect: false },
                { text: "Humidade", isCorrect: false },
                { text: "Porque junto na pergunta?", isCorrect: false },
                { text: "Agente precisa se beija", isCorrect: false },
            ]
        },
        {
            id: 3,
            text: "Se o Nikolas Ferreira aparece infartando no seu posto, você:",
            image: "https://pbs.twimg.com/media/E0vWf3wWQAE0sxK.jpg:large",
            alternatives: [
                { text: "Atende normalmente", isCorrect: false },
                { text: "Encaminha para a UPA Alphaville", isCorrect: false },
                { text: "Eutanásia", isCorrect: false },
                { text: "Realiza um transplante de cérebro", isCorrect: false },
            ]
        },
        {
            id: 4,
            text: "Se você tivesse um papagaio, ensinaria ele a:",
            image: "./assets/papo.png",
            alternatives: [
                { text: "Cantar do hino do CAM", isCorrect: false },
                { text: "Falar um palavrão", isCorrect: false },
                { text: "Cantar Turu-Turu", isCorrect: false },
                { text: "Como papagaios falam????", isCorrect: false },
            ]
        },
        {
            id: 5,
            showSongs: true,
            text: "Qual a melhor música? ⬆",
            alternatives: [
                { text: "Bixinho - Duda Beat", isCorrect: false },
                { text: "Here Again - Rush", isCorrect: false },
                { text: "Happy End - Tom Zé", isCorrect: false },
                { text: "Meu Refrigerador Não Funciona - Os Mutantes", isCorrect: false },
                { text: "Seu Astral - Jorge & Mateus", isCorrect: false },
            ]
        },
        {
            id: 7,
            text: "Doutora, qual a melhor residência para hoje?",
            image: "https://i.pinimg.com/originals/d6/11/07/d6110767decb03cd46e59580aeddff0f.jpg",
            alternatives: [
                { text: "Cardiologia", isCorrect: false },
                { text: "Especialização em ouvidos ensebados", isCorrect: false },
                { text: "A minha", isCorrect: false },
                { text: "A sua", isCorrect: false },
            ]
        },
    ] as Question[];
}