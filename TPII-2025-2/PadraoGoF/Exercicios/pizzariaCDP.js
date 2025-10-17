/**
 * PADRÃO COMPOSITE + DECORATOR + PROXY
 * Sistema de Pizzaria com uso dos padrões Composite, Decorator e Proxy
 */

// ========================== COMPOSITE ==========================

// Componente Base - Define a interface comum para itens do pedido
class OrderItem {
    getPrice() {}
    getName() {}
}

// Folha (Leaf) - Representa um produto individual
class Product extends OrderItem {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
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
        this.name = name;
        this.items = [];
        this.extraCost = 0;
    }

    add(item) {
        this.items.push(item);
        return this;
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) this.items.splice(index, 1);
        return this;
    }

    getPrice() {
        let total = this.extraCost;
        this.items.forEach(item => total += item.getPrice());
        return total;
    }

    getName() {
        return this.name;
    }

    setExtraCost(value) {
        this.extraCost = value || 0;
        return this;
    }
}

// ========================== DECORATOR ==========================

// Componente base para notificações
class NotifierComponent {
    send(message) {}
}

// Decorator base - Envolve um componente de notificação
class Notifier extends NotifierComponent {
    constructor(component) {
        super();
        this.component = component;
    }

    send(message) {
        if (this.component) {
            this.component.send(message);
        }
    }
}

// Decorator concreto - WhatsApp
class WhatsAppNotifier extends Notifier {
    send(message) {
        super.send(message);
        console.log(`WhatsApp - ${message}`);
    }
}

// Decorator concreto - Email
class EmailNotifier extends Notifier {
    send(message) {
        super.send(message);
        console.log(`Email - ${message}`);
    }
}

// Decorator concreto - SMS
class SmsNotifier extends Notifier {
    send(message) {
        super.send(message);
        console.log(`SMS - ${message}`);
    }
}

// ========================== ORDER ==========================

class Order {
    constructor(customer, itemTree) {
        this.customer = customer;
        this.itemTree = itemTree;
        this.status = "Não Pago";
    }

    getTotal() {
        return this.itemTree.getPrice();
    }

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

    checkout(notifier) {
        this.status = "Pago";
        const message = `Pedido confirmado! Total R$${this.getTotal().toFixed(2)}`;
        console.log(message);
        console.log(`Status: ${this.status}`);
        notifier.send(message);
    }
}

// ========================== TESTE DO SISTEMA ==========================

const cliente1 = {
    nome: "Paul",
    email: "atreides@email.com",
    sms: "555-1234",
    whatsapp: "555-1234"
};

const cliente2 = {
    nome: "Alia",
    email: "alia@email.com",
    sms: "555-5678",
    whatsapp: "555-5678"
};

// Produtos individuais
const pizzaPortuguesa = new Product("Pizza Portuguesa", 40.00);
const pizzaQueijo = new Product("Pizza de Queijo", 30.00);
const pizzaCalabresa = new Product("Pizza de Calabresa", 35.00);
const pizzaChocolate = new Product("Pizza de Chocolate", 20.00);
const pizzaCaramelo = new Product("Pizza de Caramelo", 25.00);

// Combos
const comboSalgado = new ItemBundle("Combo Salgado")
    .add(pizzaPortuguesa)
    .add(pizzaQueijo)
    .add(pizzaCalabresa)
    .setExtraCost(5.00);

const comboDoce = new ItemBundle("Combo Doce")
    .add(pizzaChocolate)
    .add(pizzaCaramelo)
    .setExtraCost(10.00);

// Pedidos
const pedido1 = new Order(cliente1, comboSalgado);
const pedido2 = new Order(cliente2, comboDoce);

console.log("Pedido 1");
console.log(pedido1.generateSummary());

// Cadeia de notificações
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

// ========================== SISTEMA DE PAGAMENTO COM PROXY SIMPLES ==========================

class PaymentService {
    pay(order, amount) {}
}

class RealPaymentService extends PaymentService {
    pay(order, amount) {
        console.log(`Processando pagamento de R$${amount.toFixed(2)} para ${order.customer.nome}...`);
        console.log("Pagamento aprovado com sucesso!");
        order.status = "Pago";
    }
}

class PaymentProxy extends PaymentService {
    constructor(realService, authorizedUsers = []) {
        super();
        this.realService = realService;
        this.authorizedUsers = authorizedUsers;
    }

    pay(order, amount) {
        if (this.isAuthorized(order.customer.nome)) {
            this.realService.pay(order, amount);
        } else {
            console.log(`Pagamento negado: o usuário ${order.customer.nome} não está autorizado.`);
        }
    }

    isAuthorized(customerName) {
        return this.authorizedUsers.includes(customerName);
    }
}

// Simulação do proxy
const realService = new RealPaymentService();
const proxy = new PaymentProxy(realService, ["Paul"]);

console.log("\n=== PAGAMENTO VIA PROXY ===\n");
proxy.pay(pedido1, pedido1.getTotal()); // Autorizado
proxy.pay(pedido2, pedido2.getTotal()); // Negado
