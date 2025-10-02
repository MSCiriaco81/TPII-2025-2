// QUESTÃO-5.5: Prototype para editora digital (documentos)
class Documento {
    constructor(tipo, conteudo) {
        this.tipo = tipo;
        this.conteudo = conteudo;
    }
    clone() {
        return new Documento(this.tipo, this.conteudo);
    }
    show() {
        return `${this.tipo}: ${this.conteudo}`;
    }
}

// Exemplo de uso:
// const contrato = new Documento('Contrato', 'Texto do contrato');

// Saída de exemplo:
const doc1 = new Documento('Contrato', 'Arrakis Spice Agreement');
const doc2 = new Documento('Carta', 'Winter is coming!');
const copia1 = doc1.clone();
const copia2 = doc2.clone();
console.log(`Duke Leto: ${copia1.show()}`);
console.log(`Eddard Stark: ${copia2.show()}`);
