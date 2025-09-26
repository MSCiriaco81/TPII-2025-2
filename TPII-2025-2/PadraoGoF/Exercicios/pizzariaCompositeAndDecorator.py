# PADRÃO COMPOSITE + DECORATOR
# Sistema de Pizzaria que demonstra o uso dos padrões Composite e Decorator

# Componente Base - Interface comum para itens do pedido
class OrderItem:
    def get_price(self):
        raise NotImplementedError
    def get_name(self):
        raise NotImplementedError

# Folha (Leaf) - Produto individual
class Product(OrderItem):
    def __init__(self, name, price):
        self.name = name
        self.price = price
    def get_name(self):
        return self.name
    def get_price(self):
        return self.price

# Composite - Grupo de itens
class ItemBundle(OrderItem):
    def __init__(self, name):
        self.name = name
        self.items = []
        self.extra_cost = 0
    def add(self, item):
        self.items.append(item)
        return self
    def remove(self, item):
        if item in self.items:
            self.items.remove(item)
        return self
    def get_price(self):
        total = self.extra_cost
        for item in self.items:
            total += item.get_price()
        return total
    def get_name(self):
        return self.name
    def set_extra_cost(self, value):
        self.extra_cost = value or 0
        return self

# Decorator base para notificações
class NotifierComponent:
    def send(self, message):
        pass

class Notifier(NotifierComponent):
    def __init__(self, component=None):
        self.component = component
    def send(self, message):
        if self.component:
            self.component.send(message)

class WhatsAppNotifier(Notifier):
    def send(self, message):
        super().send(message)
        print(f"WhatsApp - {message}")

class EmailNotifier(Notifier):
    def send(self, message):
        super().send(message)
        print(f"Email - {message}")

class SmsNotifier(Notifier):
    def send(self, message):
        super().send(message)
        print(f"SMS - {message}")

# Classe para gerenciar pedidos
class Order:
    def __init__(self, customer, item_tree):
        self.customer = customer
        self.item_tree = item_tree
        self.status = "Não Pago"
    def get_total(self):
        return self.item_tree.get_price()
    def generate_summary(self):
        items_list = '\n'.join([f"\t- {item.get_name()} (R${item.get_price():.2f})" for item in self.item_tree.items])
        return f"""
Cliente: {self.customer['nome']}
Email: {self.customer['email']}
Itens Pedidos:
{items_list}
\t--------------------------------
Custo Extra: R${self.item_tree.extra_cost:.2f}
Total: R${self.get_total():.2f}
        """
    def checkout(self, notifier):
        self.status = "Pago"
        message = f"Pedido confirmado! Total R${self.get_total():.2f}"
        print(message)
        print(f"Status: {self.status}")
        notifier.send(message)

# Teste do sistema
cliente1 = {
    'nome': "Eduardo",
    'email': "eduardo@email.com",
    'sms': "555-1234",
    'whatsapp': "555-1234"
}
cliente2 = {
    'nome': "Carlos",
    'email': "carlos@email.com",
    'sms': "555-5678",
    'whatsapp': "555-5678"
}

pizza_portuguesa = Product("Pizza Portuguesa", 40.00)
pizza_queijo = Product("Pizza de Queijo", 30.00)
pizza_calabresa = Product("Pizza de Calabresa", 35.00)
pizza_chocolate = Product("Pizza de Chocolate", 20.00)
pizza_caramelo = Product("Pizza de Caramelo", 25.00)

combo_salgado = ItemBundle("Combo Salgado")\
    .add(pizza_portuguesa)\
    .add(pizza_queijo)\
    .add(pizza_calabresa)\
    .set_extra_cost(5.00)
combo_doce = ItemBundle("Combo Doce")\
    .add(pizza_chocolate)\
    .add(pizza_caramelo)\
    .set_extra_cost(10.00)

pedido1 = Order(cliente1, combo_salgado)
pedido2 = Order(cliente2, combo_doce)

print("Pedido 1")
print(pedido1.generate_summary())

notifier = Notifier()
notifier = EmailNotifier(notifier)
notifier = SmsNotifier(notifier)
notifier = WhatsAppNotifier(notifier)

print("\nCHECKOUT\n")
pedido1.checkout(notifier)

print("\n##########################\n")

print("Pedido 2")
print(pedido2.generate_summary())

print("\nCHECKOUT\n")
pedido2.checkout(notifier)
