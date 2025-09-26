/**
 * PADRÃO COMPOSITE + DECORATOR
 * Sistema de Pizzaria que demonstra o uso dos padrões Composite e Decorator
 */

// Componente Base - Define a interface comum para itens do pedido
class OrderItem {
    getPrice() {} // Método abstrato para obter preço
    getName() {} // Método abstrato para obter nome
}

// Folha (Leaf) - Representa um produto individual
class Product extends OrderItem {
    constructor(name, price) {
        super();
        this.name = name;   // Nome do produto
        this.price = price; // Preço do produto
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

// Composto (Composite) - Representa um grupo de itens que podem conter outros itens
class ItemBundle extends OrderItem {
    constructor(name) {
        super();
        this.name = name;         // Nome do pacote
        this.items = [];          // Lista de itens do pacote
        this.extraCost = 0;       // Custo adicional (ex: taxa de entrega)
    }

    // Adiciona um item ao pacote
    add(item) {
        this.items.push(item);
        return this;
    }

    // Remove um item do pacote
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) this.items.splice(index, 1);
        return this;
    }

    // Calcula o preço total do pacote (soma de todos os itens + custo extra)
    getPrice() {
        let total = this.extraCost;
        this.items.forEach(item => {
            total += item.getPrice();
        });
        return total;
    }

    getName() {
        return this.name;
    }

    // Define um custo adicional para o pacote (ex: taxa de entrega)
    setExtraCost(value) {
        this.extraCost = value || 0;
        return this;
    }
}

// Padrão Decorator - Componente base para notificações
class NotifierComponent {
    send(message) {} // Método abstrato para envio de mensagens
}

// Decorator base - Envolve um componente de notificação
class Notifier extends NotifierComponent {
    constructor(component) {
        super();
        this.component = component; // Componente que será decorado
    }

    // Envia mensagem através do componente decorado
    send(message) {
        if (this.component) {
            this.component.send(message);
        }
    }
}

// Decorator concreto - Adiciona notificação via WhatsApp
class WhatsAppNotifier extends Notifier {
    send(message) {
        super.send(message); // Chama o comportamento do componente decorado
        console.log(`WhatsApp - ${message}`);
    }
}

// Decorator concreto - Adiciona notificação via Email
class EmailNotifier extends Notifier {
    send(message) {
        super.send(message); // Chama o comportamento do componente decorado
        console.log(`Email - ${message}`);
    }
}

// Decorator concreto - Adiciona notificação via SMS
class SmsNotifier extends Notifier {
    send(message) {
        super.send(message); // Chama o comportamento do componente decorado
        console.log(`SMS - ${message}`);
    }
}

// Classe para gerenciar pedidos
class Order {
    constructor(customer, itemTree) {
        this.customer = customer;   // Cliente do pedido
        this.itemTree = itemTree;   // Árvore de itens do pedido (usando o padrão Composite)
        this.status = "Não Pago";   // Status do pedido
    }

    // Calcula o total do pedido
    getTotal() {
        return this.itemTree.getPrice();
    }

    // Gera um resumo do pedido
    generateSummary() {
        const itemsList = this.itemTree.items
            .map(item => `\t- ${item.getName()} (R$${item.getPrice().toFixed(2)})`)
            .join("\n");

        return `
Cliente: ${this.customer.nome}
Email: ${this.customer.email}
Itens Pedidos:
${itemsList}
\t--------------------------------
Custo Extra: R$${this.itemTree.extraCost.toFixed(2)}
Total: R$${this.getTotal().toFixed(2)}
        `;
    }

    // Finaliza o pedido e envia notificações
    checkout(notifier) {
        this.status = "Pago";
        const message = `Pedido confirmado! Total R$${this.getTotal().toFixed(2)}`;
        console.log(message);
        console.log(`Status: ${this.status}`);
        notifier.send(message);
    }
}

// Teste do sistema
const cliente1 = {
    nome: "Eduardo",
    email: "eduardo@email.com",
    sms: "555-1234",
    whatsapp: "555-1234"
};

const cliente2 = {
    nome: "Carlos",
    email: "carlos@email.com", 
    sms: "555-5678",
    whatsapp: "555-5678"
};

// Produtos individuais (pizzas)
const pizzaPortuguesa = new Product("Pizza Portuguesa", 40.00);
const pizzaQueijo = new Product("Pizza de Queijo", 30.00);
const pizzaCalabresa = new Product("Pizza de Calabresa", 35.00);
const pizzaChocolate = new Product("Pizza de Chocolate", 20.00);
const pizzaCaramelo = new Product("Pizza de Caramelo", 25.00);

// Combos usando o padrão Composite
const comboSalgado = new ItemBundle("Combo Salgado")
    .add(pizzaPortuguesa)
    .add(pizzaQueijo)
    .add(pizzaCalabresa)
    .setExtraCost(5.00); // taxa de entrega

const comboDoce = new ItemBundle("Combo Doce")
    .add(pizzaChocolate)
    .add(pizzaCaramelo)
    .setExtraCost(10.00); // taxa de entrega

// Criação dos pedidos
const pedido1 = new Order(cliente1, comboSalgado);
const pedido2 = new Order(cliente2, comboDoce);

console.log("Pedido 1");
console.log(pedido1.generateSummary());

console.log("Pedido 1");
console.log(pedido1.generateSummary());

// Cria uma cadeia de decoradores para notificações múltiplas
let notifier = new Notifier();
notifier = new EmailNotifier(notifier);
notifier = new SmsNotifier(notifier);
notifier = new WhatsAppNotifier(notifier);

console.log("\nCHECKOUT\n");
pedido1.checkout(notifier);

console.log("\n##########################\n");

console.log("Pedido 2");
console.log(pedido2.generateSummary());

console.log("\nCHECKOUT\n");
pedido2.checkout(notifier);
