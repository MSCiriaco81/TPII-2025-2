// QUESTÃO-4.8: Builder para grade horária semanal
class GradeHoraria {
    constructor() {
        this.aulas = [];
    }
    addAula(dia, materia) {
        this.aulas.push(`${dia}: ${materia}`);
    }
    show() {
        return this.aulas.join('\n');
    }
}

class GradeHorariaBuilder {
    constructor() {
        this.grade = new GradeHoraria();
    }
    addAula(dia, materia) { this.grade.addAula(dia, materia); return this; }
    build() { return this.grade; }
}

// Exemplo de uso:
// const builder = new GradeHorariaBuilder();

// Saída de exemplo:
const grades = [
    { nome: 'Alia Atreides', grade: new GradeHorariaBuilder().addAula('Segunda', 'Mentat').addAula('Quarta', 'Bene Gesserit').build() },
    { nome: 'Sansa Stark', grade: new GradeHorariaBuilder().addAula('Terça', 'Política').addAula('Sexta', 'História do Norte').build() }
];
grades.forEach(g => {
    console.log(`${g.nome}:\n${g.grade.show()}`);
});
