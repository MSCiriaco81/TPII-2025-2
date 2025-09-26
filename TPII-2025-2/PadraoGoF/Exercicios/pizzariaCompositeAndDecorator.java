// PADRÃO COMPOSITE + DECORATOR
// Sistema de Pizzaria que demonstra o uso dos padrões Composite e Decorator
import java.util.*;

// Componente Base - Interface comum para itens do pedido
abstract class OrderItem {
    abstract double getPrice();
    abstract String getName();
}

// Folha (Leaf) - Produto individual
class Product extends OrderItem {
    private String name;
    private double price;
    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
    String getName() { return name; }
    double getPrice() { return price; }
}

// Composite - Grupo de itens
class ItemBundle extends OrderItem {
    private String name;
    List<OrderItem> items = new ArrayList<>();
    double extraCost = 0;
    public ItemBundle(String name) {
        this.name = name;
    }
    ItemBundle add(OrderItem item) {
        items.add(item);
        return this;
    }
    ItemBundle remove(OrderItem item) {
        items.remove(item);
        return this;
    }
    double getPrice() {
        double total = extraCost;
        for (OrderItem item : items) {
            total += item.getPrice();
        }
        return total;
    }
    String getName() { return name; }
    ItemBundle setExtraCost(double value) {
        this.extraCost = value;
        return this;
    }
}

// Decorator base para notificações
abstract class NotifierComponent {
    abstract void send(String message);
}

class Notifier extends NotifierComponent {
    protected NotifierComponent component;
    public Notifier() {}
    public Notifier(NotifierComponent component) {
        this.component = component;
    }
    void send(String message) {
        if (component != null) component.send(message);
    }
}

class WhatsAppNotifier extends Notifier {
    public WhatsAppNotifier(NotifierComponent component) { super(component); }
    void send(String message) {
        super.send(message);
        System.out.println("WhatsApp - " + message);
    }
}
class EmailNotifier extends Notifier {
    public EmailNotifier(NotifierComponent component) { super(component); }
    void send(String message) {
        super.send(message);
        System.out.println("Email - " + message);
    }
}
class SmsNotifier extends Notifier {
    public SmsNotifier(NotifierComponent component) { super(component); }
    void send(String message) {
        super.send(message);
        System.out.println("SMS - " + message);
    }
}

// Classe para gerenciar pedidos
class Order {
    private Map<String, String> customer;
    private ItemBundle itemTree;
    private String status;
    public Order(Map<String, String> customer, ItemBundle itemTree) {
        this.customer = customer;
        this.itemTree = itemTree;
        this.status = "Não Pago";
    }
    double getTotal() {
        return itemTree.getPrice();
    }
    String generateSummary() {
        StringBuilder itemsList = new StringBuilder();
        for (OrderItem item : itemTree.items) {
            itemsList.append(String.format("\t- %s (R$%.2f)\n", item.getName(), item.getPrice()));
        }
        return String.format(
            "\nCliente: %s\nEmail: %s\nItens Pedidos:\n%s\t--------------------------------\nCusto Extra: R$%.2f\nTotal: R$%.2f\n",
            customer.get("nome"), customer.get("email"), itemsList.toString(), itemTree.extraCost, getTotal()
        );
    }
    void checkout(NotifierComponent notifier) {
        this.status = "Pago";
        String message = String.format("Pedido confirmado! Total R$%.2f", getTotal());
        System.out.println(message);
        System.out.println("Status: " + status);
        notifier.send(message);
    }
}

public class pizzariaCompositeAndDecorator {
    public static void main(String[] args) {
        Map<String, String> cliente1 = new HashMap<>();
        cliente1.put("nome", "Eduardo");
        cliente1.put("email", "eduardo@email.com");
        cliente1.put("sms", "555-1234");
        cliente1.put("whatsapp", "555-1234");
        Map<String, String> cliente2 = new HashMap<>();
        cliente2.put("nome", "Carlos");
        cliente2.put("email", "carlos@email.com");
        cliente2.put("sms", "555-5678");
        cliente2.put("whatsapp", "555-5678");

        Product pizzaPortuguesa = new Product("Pizza Portuguesa", 40.00);
        Product pizzaQueijo = new Product("Pizza de Queijo", 30.00);
        Product pizzaCalabresa = new Product("Pizza de Calabresa", 35.00);
        Product pizzaChocolate = new Product("Pizza de Chocolate", 20.00);
        Product pizzaCaramelo = new Product("Pizza de Caramelo", 25.00);

        ItemBundle comboSalgado = new ItemBundle("Combo Salgado")
            .add(pizzaPortuguesa)
            .add(pizzaQueijo)
            .add(pizzaCalabresa)
            .setExtraCost(5.00);
        ItemBundle comboDoce = new ItemBundle("Combo Doce")
            .add(pizzaChocolate)
            .add(pizzaCaramelo)
            .setExtraCost(10.00);

        Order pedido1 = new Order(cliente1, comboSalgado);
        Order pedido2 = new Order(cliente2, comboDoce);

        System.out.println("Pedido 1");
        System.out.println(pedido1.generateSummary());

        NotifierComponent notifier = new Notifier();
        notifier = new EmailNotifier(notifier);
        notifier = new SmsNotifier(notifier);
        notifier = new WhatsAppNotifier(notifier);

        System.out.println("\nCHECKOUT\n");
        pedido1.checkout(notifier);

        System.out.println("\n##########################\n");

        System.out.println("Pedido 2");
        System.out.println(pedido2.generateSummary());

        System.out.println("\nCHECKOUT\n");
        pedido2.checkout(notifier);
    }
}
