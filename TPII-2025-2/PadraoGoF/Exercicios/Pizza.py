# Implementação da interface de cálculo de preço
class PriceImpl:
    def get_base_price(self):
        raise NotImplementedError("Método get_base_price() deve ser implementado")

    def get_size_multiplier(self):
        raise NotImplementedError("Método get_size_multiplier() deve ser implementado")

    def get_extras_price(self):
        raise NotImplementedError("Método get_extras_price() deve ser implementado")

    def get_total_price(self):
        return self.get_base_price() * self.get_size_multiplier() + self.get_extras_price()

# Implementação concreta do cálculo para a pizza
class PizzaPrice(PriceImpl):
    def __init__(self, sabor, tamanho, adicionais):
        super().__init__()
        self.sabor = sabor
        self.tamanho = tamanho
        self.adicionais = adicionais

    def get_base_price(self):
        base_prices = {
            'margherita': 20,
            'pepperoni': 25,
            'quatro-queijos': 30,
            'frango-catupiry': 28,
        }
        return base_prices.get(self.sabor, 20)

    def get_size_multiplier(self):
        size_multipliers = {
            'pequena': 1,
            'media': 1.5,
            'grande': 2
        }
        return size_multipliers.get(self.tamanho, 1)

    def get_extras_price(self):
        extras_prices = {
            'borda-recheada': 5,
            'azeitona': 3,
            'bacon': 7,
            'extra-queijo': 4,
            'catupiry': 6
        }
        return sum(extras_prices.get(ad, 0) for ad in self.adicionais)

# Classe Pizza que utiliza a implementação para calcular o preço
class Pizza:
    def __init__(self, price_impl):
        self.price_impl = price_impl

    def get_description(self):
        sabores = {
            'margherita': ['molho de tomate', 'queijo muçarela', 'manjericão'],
            'pepperoni': ['molho de tomate', 'queijo muçarela', 'pepperoni'],
            'quatro-queijos': ['queijo muçarela', 'queijo gorgonzola', 'queijo parmesão', 'queijo provolone'],
            'frango-catupiry': ['frango desfiado', 'catupiry', 'queijo muçarela']
        }
        ingredientes = sabores.get(self.price_impl.sabor, [])
        return f"Pizza sabor {self.price_impl.sabor} ({', '.join(ingredientes)}), tamanho {self.price_impl.tamanho}, com adicionais: {', '.join(self.price_impl.adicionais) if self.price_impl.adicionais else 'nenhum'}"

    def get_total_price(self):
        return self.price_impl.get_total_price()

# Função para mostrar opções disponíveis ao usuário
def mostrar_opcoes():
    sabores = {
        'margherita': ['molho de tomate', 'queijo muçarela', 'manjericão'],
        'pepperoni': ['molho de tomate', 'queijo muçarela', 'pepperoni'],
        'quatro-queijos': ['queijo muçarela', 'queijo gorgonzola', 'queijo parmesão', 'queijo provolone'],
        'frango-catupiry': ['frango desfiado', 'catupiry', 'queijo muçarela']
    }
    tamanhos = ['pequena', 'media', 'grande']
    adicionais = {
        'borda-recheada': 5,
        'azeitona': 3,
        'bacon': 7,
        'extra-queijo': 4,
        'catupiry': 6
    }
    print("Sabores disponíveis:")
    for sabor, ingredientes in sabores.items():
        print(f"- {sabor}: {', '.join(ingredientes)}")
    print("\nTamanhos disponíveis:")
    for t in tamanhos:
        print(f"- {t}")
    print("\nAdicionais disponíveis:")
    for adicional, preco in adicionais.items():
        print(f"- {adicional} (R$ {preco})")

# Exibe as opções ao usuário
mostrar_opcoes()

# Exemplo de uso
def main():
    sabor_escolhido = 'quatro-queijos'
    tamanho_escolhido = 'media'
    adicionais_escolhidos = ['borda-recheada', 'extra-queijo']
    pizza_price = PizzaPrice(sabor_escolhido, tamanho_escolhido, adicionais_escolhidos)
    pizza = Pizza(pizza_price)
    print("\nPedido:")
    print(pizza.get_description())
    print("Valor total: R$ {:.2f}".format(pizza.get_total_price()))

if __name__ == "__main__":
    main()
