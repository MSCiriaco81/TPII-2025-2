// QUESTÃO-5.7: Prototype para sistema CAD (clonagem de formas)
class Forma {
    constructor(tipo, cor) {
        this.tipo = tipo;
        this.cor = cor;
    }
    clone() {
        return new Forma(this.tipo, this.cor);
    }
    show() {
        return `${this.tipo} (${this.cor})`;
    }
}

// Exemplo de uso:
// const circulo = new Forma('Círculo', 'azul');

// Saída de exemplo:
const forma1 = new Forma('Círculo', 'azul');
const forma2 = new Forma('Quadrado', 'vermelho');
const copia1 = forma1.clone();
const copia2 = forma2.clone();
console.log(`Liet Kynes: ${copia1.show()}`);
console.log(`Brienne of Tarth: ${copia2.show()}`);
