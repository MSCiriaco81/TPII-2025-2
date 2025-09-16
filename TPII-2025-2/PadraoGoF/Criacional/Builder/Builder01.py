# Definindo Parte de um Carro
class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class Interior:
    def __init__(self, cor):
        self.cor = cor


# Builder:
class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def add_motor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def add_carroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self

    def add_rodas(self, tamanho):
        self.rodas = Rodas(tamanho)
        return self

    def add_interior(self, cor):
        self.interior = Interior(cor)
        return self

    def construir(self):
        return Carro(self.motor, self.carroceria, self.rodas, self.interior)


# Carro:
class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrar_detalhes(self):
        print(f"Carro:\n"
              f"  Motor: {self.motor.tipo},\n"
              f"  Carroceria: {self.carroceria.estilo},\n"
              f"  Rodas: {self.rodas.tamanho},\n"
              f"  Interior: {self.interior.cor}\n")


# Construir Carro:
builder = CarroBuilder()

# Criando carros
carro_esportivo = builder.add_motor("V8") \
                         .add_carroceria("Esportivo") \
                         .add_rodas(18) \
                         .add_interior("Preta") \
                         .construir()

carro_sedan = builder.add_motor("1.4 LT") \
                     .add_carroceria("Sedan") \
                     .add_rodas(15) \
                     .add_interior("Bege") \
                     .construir()

carro_byd = builder.add_motor("Eletrico 12v") \
                   .add_carroceria("BYD") \
                   .add_rodas(12) \
                   .add_interior("Plastico") \
                   .construir()

# Exibindo os detalhes dos carros
carro_esportivo.mostrar_detalhes()
carro_sedan.mostrar_detalhes()
carro_byd.mostrar_detalhes()
