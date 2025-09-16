// 1.1 - Implementação da Interface Cor
class Cor{
    constructor(cor){
        this.Cor = cor;
    }

    getCor(){
        return this.Cor;
    }
}

// 1.2 - Implementação Concreta de Cores:
class CorVermelha extends Cor {
    constructor() {
        super("Vermelho");
    }
}


class CorVerde extends Cor{
    constructor(){
        super("Verde");
    }
}

class CorAzul extends Cor{
    constructor(){
        super("Azul");
    }
}

// 2.1 - Implementação da Interface da Forma:
class Forma {
    constructor(cor) {
        this.cor = cor;
    }

    setCor(cor) {
        this.cor = cor;
    }

    desenhar() {
        throw new Error("Esse Metodo precisa ser implementado pela subclasse");
    }
}


// 2.2 - Abstração Refinada:
class Circulo extends Forma{
    desenhar(){
        console.log(`Desenhando um Circulo ${this.cor.getCor()}`);
    }
}

class Quadrado extends Forma{
    desenhar(){
        console.log(`Desenhando um Quadrado ${this.cor.getCor()}`);
    }
}

class Triangulo extends Forma{
    desenhar(){
        console.log(`Desenhando um Triangulo ${this.cor.getCor()}`);
    }
}

// 3 - Utilização - Cliente:
const vermelho = new CorVermelha();
const verde = new CorVerde();
const azul = new CorAzul();

const circulo1 = new Circulo(vermelho);
const circulo2 = new Circulo(verde);
const circulo3 = new Circulo(azul);

const quadrado1 = new Quadrado(vermelho);
const quadrado2 = new Quadrado(verde);
const quadrado3 = new Quadrado(azul);

const triangulo1 = new Triangulo(vermelho);
const triangulo2 = new Triangulo(verde);
const triangulo3 = new Triangulo(azul);

circulo1.desenhar();
circulo2.desenhar();
circulo3.desenhar();

quadrado1.desenhar();
quadrado2.desenhar();
quadrado3.desenhar();

triangulo1.desenhar();
triangulo2.desenhar();
triangulo3.desenhar();