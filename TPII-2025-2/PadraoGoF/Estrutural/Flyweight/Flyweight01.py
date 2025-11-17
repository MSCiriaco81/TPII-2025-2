# Flyweight Factory
class FabricaFlyweight:
    def __init__(self):
        self.flyweights = {}
    
    def obterFlyweight(self, id):
        if id not in self.flyweights:
            self.flyweights[id] = ProdutoFlyweight(id)
        return self.flyweights[id]

# Flyweight
class ProdutoFlyweight:
    def __init__(self, id):
        self.id = id
    
    def exibirDetalhes(self, nome, preco):
        print(f"ID: {self.id} | Produto:{nome:15} | R${preco:.2f}")

# Cliente:
class Cliente:
    def __init__(self):
        self.fabricaFlyweight = FabricaFlyweight()
        self.carrinho = []
    
    def addProduto(self, id, nome, preco):
        flyweight = self.fabricaFlyweight.obterFlyweight(id)
        self.carrinho.append({"flyweight": flyweight, "nome": nome, "preco": preco})
    
    def exibirCarrinho(self):
        print("Itens do Carrinho:")
        for item in self.carrinho:
            item["flyweight"].exibirDetalhes(item["nome"], item["preco"])

# Uso
cliente = Cliente()
cliente.addProduto("001", "Camiseta     ", 39.90)
cliente.addProduto("002", "Calça Jeans  ", 89.90)
cliente.addProduto("001", "Camiseta     ", 59.90)
cliente.exibirCarrinho()