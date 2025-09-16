# 1 Interface Abstrata da Fabrica:
class AbstractFactory:
    def cria_produto_a(self):
        pass

    def cria_produto_b(self):
        pass


# 1 Fabrica 1 Concreta que Cria Produto do Tipo A e B:
class FabricaConcreta1(AbstractFactory):
    def cria_produto_a(self):
        return ProdutoConcretoA1()

    def cria_produto_b(self):
        return ProdutoConcretoB1()


# 1 Fabrica 2 Concreta que Cria Produto do Tipo A e B:
class FabricaConcreta2(AbstractFactory):
    def cria_produto_a(self):
        return ProdutoConcretoA2()

    def cria_produto_b(self):
        return ProdutoConcretoB2()


# 2 Interface dos Produtos do Tipo A:
class ProdutoAbstrato:
    def metodo_a(self):
        pass


# 2 Implementação Concreta do Produto do Tipo A - Fabrica 1:
class ProdutoConcretoA1(ProdutoAbstrato):
    def metodo_a(self):
        return "Produto do Tipo A da Fabrica 1"


# 2 Implementação Concreta do Produto do Tipo A - Fabrica 2:
class ProdutoConcretoA2(ProdutoAbstrato):
    def metodo_a(self):
        return "Produto do Tipo A da Fabrica 2"


# 3 Interface dos Produtos do Tipo B:
class ProdutoAbstratoB:
    def metodo_b(self):
        pass


# 3 Implementação Concreta do Produto do Tipo B - Fabrica 1:
class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodo_b(self):
        return "Produto do Tipo B da Fabrica 1"


# 3 Implementação Concreta do Produto do Tipo B - Fabrica 2:
class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodo_b(self):
        return "Produto do Tipo B da Fabrica 2"


# 4 -- USO DO PADRÂO ABSTRACT FACTORY -- IMPLEMENTAÇÃO
def cliente_cod(factory):
    produto_a = factory.cria_produto_a()
    produto_b = factory.cria_produto_b()

    print(produto_a.metodo_a())
    print(produto_b.metodo_b())


# Exemplo de uso da Fabrica 1:
factory1 = FabricaConcreta1()
cliente_cod(factory1)

# Exemplo de uso da Fabrica 2:
factory2 = FabricaConcreta2()
cliente_cod(factory2)
