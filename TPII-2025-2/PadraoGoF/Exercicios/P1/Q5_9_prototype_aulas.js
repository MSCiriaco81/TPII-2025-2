// QUESTÃO-5.9: Prototype para agendamento de aulas (clonagem de horários)
class HorarioAula {
    constructor(dia, hora, materia) {
        this.dia = dia;
        this.hora = hora;
        this.materia = materia;
    }
    clone() {
        return new HorarioAula(this.dia, this.hora, this.materia);
    }
    show() {
        return `${this.dia} ${this.hora} - ${this.materia}`;
    }
}

// Exemplo de uso:
// const modelo = new HorarioAula('Segunda', '08:00', 'Matemática');
// const copia = modelo.clone();

// Saída de exemplo:
const modelo = new HorarioAula('Segunda', '08:00', 'Matemática');
const copia = modelo.clone();
copia.materia = 'Física';
console.log(`Irulan Corrino: ${modelo.show()}`);
console.log(`Syrio Forel: ${copia.show()}`);
