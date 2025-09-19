# Estrutura Componente:
class Componente:
    def __init__(self, nome):
        self.nome = nome

    def adicionar(self):
        pass

    def remover(self):
        pass

    def obter_nome(self):
        pass

# Estrutura Folha:
class Folha(Componente):
    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco

    def obter_nome(self):
        return self.nome

    def obter_preco(self):
        return self.preco

# Estrutura Conteiner que irá compor (Componente):
class Conteiner(Componente):
    def __init__(self, nome):
        super().__init__(nome)
        self.componentes = []

    def adicionar(self, componente):
        self.componentes.append(componente)

    def remover(self, componente):
        if componente in self.componentes:
            self.componentes.remove(componente)

    def obter_nome(self):
        return self.nome

    def obter_preco(self):
        preco = 0
        for componente in self.componentes:
            preco += componente.obter_preco()
        return preco

# Exemplo de Uso - Supermercado:
maca = Folha('Maçã', 2.00)
laranja = Folha('Laranja', 3.00)
uva = Folha('Uva', 5.00)

frutas = Conteiner('Frutas')
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)

caixa = Conteiner('Compra Total')
caixa.adicionar(frutas)
caixa.adicionar(Folha('Embalagem', 2.00))

print(f'Preço Total: R${caixa.obter_preco():.2f}')
