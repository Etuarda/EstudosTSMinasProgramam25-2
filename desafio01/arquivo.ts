// Tipos
type Mensagem =
    | "Exploradora confiante."
    | "Brilha como aprendiz."
    | "Desbravando a programação.";

type CursoId = 101 | 202 | 303;

interface Curso {
    id: CursoId;
    nome: string;
}

interface Estudante {
    nome: string;
    cursoId: CursoId;
    // Tuple que garante exatamente 3 notas (evita valores undefined)
    notas: [number, number, number];
    mensagem: string; // Será preenchida automaticamente pela função de estilo de aprendizagem
}

// Dados iniciais
const cursos: Curso[] = [
    { id: 101, nome: "Frontend" },
    { id: 202, nome: "Backend" },
    { id: 303, nome: "Ciência de Dados" },
];

const estudantes: Estudante[] = [
    {
        nome: "Eduarda Silva",
        cursoId: 101,
        notas: [8.5, 7.0, 9.0],
        mensagem: "" // Será preenchida automaticamente
    },
    {
        nome: "Gloria Maria",
        cursoId: 202,
        notas: [6.0, 5.5, 6.5],
        mensagem: ""
    },
    {
        nome: "Ana Luiza",
        cursoId: 303,
        notas: [4.0, 3.5, 5.0],
        mensagem: ""
    },
];

// Função declarada: Calcula a média das 3 notas do estudante
function mediaEstudante(estudante: Estudante): number {
    const [nota1, nota2, nota3] = estudante.notas;
    return (nota1 + nota2 + nota3) / 3;
}

// Função anônima: Determina o estilo de aprendizagem baseado na média
const estiloAprendizado = function (estudante: Estudante): Mensagem {
    const media = mediaEstudante(estudante);
    if (media >= 7) return "Exploradora confiante.";
    if (media >= 5) return "Brilha como aprendiz.";
    return "Desbravando a programação.";
};

// Arrow function: Versão simplificada da função anterior com mesma lógica
const estiloAprendizadoArrow = (estudante: Estudante): Mensagem => {
    const media = mediaEstudante(estudante);
    return media >= 7
        ? "Exploradora confiante."
        : media >= 5
            ? "Brilha como aprendiz."
            : "Desbravando a programação.";
};

// Switch Case: Retorna o nome do curso baseado no ID
function nomeDoCursoPorId(cursoId: CursoId): string {
    switch (cursoId) {
        case 101: return cursos[0].nome;
        case 202: return cursos[1].nome;
        case 303: return cursos[2].nome;
        default: return "Curso não encontrado";
    }
}

// Exibição dos resultados
console.log("=== SISTEMA DE REGISTRO DE ESTUDANTES ===\n");

estudantes.forEach((estudante: Estudante) => {
    const media = mediaEstudante(estudante);
    estudante.mensagem = estiloAprendizadoArrow(estudante);

    console.log("=".repeat(40));
    console.log(`Nome: ${estudante.nome}`);
    console.log(`Curso: ${nomeDoCursoPorId(estudante.cursoId)}`);
    console.log(`Média das notas: ${media.toFixed(2)}`);
    console.log(`Mensagem: ${estudante.mensagem}`);
    console.log(""); // Linha em branco para melhor legibilidade
});