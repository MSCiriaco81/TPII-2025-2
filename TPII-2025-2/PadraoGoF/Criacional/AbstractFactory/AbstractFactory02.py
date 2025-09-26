# Padrão Abstract Factory - Sistema de Loja

# Interface da Fábrica Abstrata
class LojaAbstrata:
    def cria_produto_electronico(self):
        pass
    
    def cria_produto_moda(self):
        pass

# Fábrica Concreta para Loja Física
class LojaFisica(LojaAbstrata):
    def cria_produto_electronico(self):
        return Telefone()
    
    def cria_produto_moda(self):
        return Camiseta()

# Fábrica Concreta para Loja Virtual
class LojaVirtual(LojaAbstrata):
    def cria_produto_electronico(self):
        return Telefone()
    
    def cria_produto_moda(self):
        return Camiseta()

# Classe Abstrata para Produtos Eletrônicos
class ProdutoEletronico:
    def __init__(self):
        self.tipo = "eletronico"

    def descricao(self):
        pass

# Classe Abstrata para Produtos de Moda
class ProdutoModa():
    def __init__(self):
        self.tipo = "Moda"
    
    def descricao(self):
        pass

# Classe Concreta para Produtos Eletrônicos
class Telefone(ProdutoEletronico):
    def descricao(self):
        return f"Produto {self.tipo}: Telefone"

# Classe Concreta para Produtos de Moda
class Camiseta(ProdutoModa):
    def descricao(self):
        return f"Produto {self.tipo}: Camiseta"

# Simulação da Loja
def loja(cliente, loja_abstrata):
    produto_electronico = loja_abstrata.cria_produto_electronico()
    produto_moda = loja_abstrata.cria_produto_moda()

    print(f"{cliente} Comprou:")
    print(produto_electronico.descricao())
    print(produto_moda.descricao())

# Teste do padrão Abstract Factory
cliente1 = "João da Silva"
loja_fisica = LojaFisica()
loja(cliente1, loja_fisica)

print("\n...\n")

cliente2 = "Maria da Silva"
loja_virtual = LojaVirtual()
loja(cliente2, loja_virtual)
