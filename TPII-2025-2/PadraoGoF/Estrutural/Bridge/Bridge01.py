# 1.1 - Implementação da Interface Cor
class Cor:
    def __init__(self, cor: str):
        self._cor = cor

    def get_cor(self):
        return self._cor


# 1.2 - Implementação Concreta de Cores:
class CorVermelha(Cor):
    def __init__(self):
        super().__init__("Vermelho")


class CorVerde(Cor):
    def __init__(self):
        super().__init__("Verde")


class CorAzul(Cor):
    def __init__(self):
        super().__init__("Azul")


# 2.1 - Interface/Abstração da Forma
class Forma:
    def __init__(self, cor: Cor):
        self.cor = cor

    def set_cor(self, cor: Cor):
        self.cor = cor

    def desenhar(self):
        raise NotImplementedError("O método desenhar() deve ser implementado pela subclasse")


# 2.2 - Abstrações Refinadas
class Circulo(Forma):
    def desenhar(self):
        print(f"Desenhando um Círculo {self.cor.get_cor()}")


class Quadrado(Forma):
    def desenhar(self):
        print(f"Desenhando um Quadrado {self.cor.get_cor()}")


class Triangulo(Forma):
    def desenhar(self):
        print(f"Desenhando um Triângulo {self.cor.get_cor()}")


# 3 - Utilização - Cliente
if __name__ == "__main__":
    vermelho = CorVermelha()
    verde = CorVerde()
    azul = CorAzul()

    circulo1 = Circulo(vermelho)
    circulo2 = Circulo(verde)
    circulo3 = Circulo(azul)

    quadrado1 = Quadrado(vermelho)
    quadrado2 = Quadrado(verde)
    quadrado3 = Quadrado(azul)

    triangulo1 = Triangulo(vermelho)
    triangulo2 = Triangulo(verde)
    triangulo3 = Triangulo(azul)

    circulo1.desenhar()
    circulo2.desenhar()
    circulo3.desenhar()

    quadrado1.desenhar()
    quadrado2.desenhar()
    quadrado3.desenhar()

    triangulo1.desenhar()
    triangulo2.desenhar()
    triangulo3.desenhar()
