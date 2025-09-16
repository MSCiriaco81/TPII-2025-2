// Definindo as Partes da Pizza
class Massa {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Molho {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Ingredientes {
    constructor(itens) {
        this.itens = itens;
    }
}

class Tamanho {
    constructor(diametro) {
        this.diametro = diametro;
    }
}

// Builder:
class PizzaBuilder {
    constructor() {
        this.massa = null;
        this.molho = null;
        this.ingredientes = [];
        this.tamanho = null; 
    }

    addMassa(tipo) {
        this.massa = new Massa(tipo);
        return this;
    }

    addMolho(tipo) {
        this.molho = new Molho(tipo);
        return this;
    }

    addIngredientes(itens) {
        this.ingredientes = new Ingredientes(itens);
        return this;
    }

    addTamanho(diametro) {
        this.tamanho = new Tamanho(diametro);
        return this;
    }

    construir() {
        return new Pizza(this.massa, this.molho, this.ingredientes, this.tamanho);
    }
}

// Construir Pizza:
class Pizza {
    constructor(massa, molho, ingredientes, tamanho) {
        this.massa = massa;
        this.molho = molho;
        this.ingredientes = ingredientes;
        this.tamanho = tamanho;
    }

    mostrarDetalhes() {
        console.log(`Pizza:
            Massa: ${this.massa.tipo}, 
            Molho: ${this.molho.tipo}, 
            Ingredientes: ${this.ingredientes.itens.join(", ")}, 
            Tamanho: ${this.tamanho.diametro} cm`);
    }
}

const builder = new PizzaBuilder();

// Criando pizzas:
const pizzaMargherita = builder
    .addMassa('Tradicional')
    .addMolho('Tomate')
    .addIngredientes(['Mussarela', 'Manjericão', 'Azeite'])
    .addTamanho(30)
    .construir();

const pizzaCalabresa = builder
    .addMassa('Fina')
    .addMolho('Tomate')
    .addIngredientes(['Calabresa', 'Queijo', 'Cebola'])
    .addTamanho(40)
    .construir();

const pizzaVeggie = builder
    .addMassa('Integral')
    .addMolho('Pesto')
    .addIngredientes(['Tomate', 'Espinafre', 'Cogumelos', 'Queijo Vegano'])
    .addTamanho(35)
    .construir();

// Mostrar pizzas:
pizzaMargherita.mostrarDetalhes();
pizzaCalabresa.mostrarDetalhes();
pizzaVeggie.mostrarDetalhes();
