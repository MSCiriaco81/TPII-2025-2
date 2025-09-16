const { act } = require("react");

class Aluno{
    constructor(){
        if (Aluno.instancia) {
            this.nome = "";
            this.notas = {};
            Aluno.instancia = this;
        }
        return Aluno.instancia;
    }

    definirNome(nome){
        this.nome = nome;
    }

    addNota(disciplina, nota){
        this.notas[disciplina] = nota;
    }

    calcularMedia(){
        const total = Object.values(this.notas).reduce((act, nota) => act + nota,0);
        return total / Object.keys(this.notas).length;
    }
}