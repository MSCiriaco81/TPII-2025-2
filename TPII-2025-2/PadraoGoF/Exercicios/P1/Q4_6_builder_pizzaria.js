// QUESTÃO-4.6: Builder para pizzaria
class Pizza {
    constructor() {
        this.ingredientes = [];
    }
    addIngrediente(ing) {
        this.ingredientes.push(ing);
    }
    show() {
        return `Pizza com: ${this.ingredientes.join(', ')}`;
    }
}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }
    addQueijo() { this.pizza.addIngrediente('queijo'); return this; }
    addMolho() { this.pizza.addIngrediente('molho'); return this; }
    addCalabresa() { this.pizza.addIngrediente('calabresa'); return this; }
    addTomate() { this.pizza.addIngrediente('tomate'); return this; }
    addAzeitona() { this.pizza.addIngrediente('azeitona'); return this; }
    build() { return this.pizza; }
}

// Exemplo de uso:
// const builder = new PizzaBuilder();

// Saída de exemplo:
const pedidosPizza = [
    { nome: 'Shireen Baratheon', pizza: new PizzaBuilder().addQueijo().addMolho().addAzeitona().build() },
    { nome: 'Thufir Hawat', pizza: new PizzaBuilder().addQueijo().addCalabresa().addTomate().build() }
];
pedidosPizza.forEach(p => {
    console.log(`${p.nome}: ${p.pizza.show()}`);
});
