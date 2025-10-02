// QUESTÃO-5.6: Prototype para pizzaria (clonagem de pizzas)
class Pizza {
    constructor(ingredientes) {
        this.ingredientes = ingredientes;
    }
    clone() {
        // Clona ingredientes para evitar referência
        return new Pizza([...this.ingredientes]);
    }
    show() {
        return `Pizza com: ${this.ingredientes.join(', ')}`;
    }
}

// Exemplo de uso:
// const pizzaBase = new Pizza(['queijo', 'molho']);
// const pizzaClone = pizzaBase.clone();

// Saída de exemplo:
const pizzaBase = new Pizza(['queijo', 'molho']);
const pizzaClone = pizzaBase.clone();
pizzaClone.ingredientes.push('calabresa');
console.log(`Duncan Idaho: ${pizzaBase.show()}`);
console.log(`Sandor Clegane: ${pizzaClone.show()}`);
