# Exemplo de Abstract Factory em Python - Exercício Veículos

# Interface Abstrata da Fábrica
class VeiculoAbstrato:
    def cria_veiculo_terrestre1(self):
        pass
    def cria_veiculo_terrestre2(self):
        pass
    def cria_veiculo_aereo1(self):
        pass
    def cria_veiculo_aereo2(self):
        pass

# Fábrica Concreta para Veículos Terrestres
class Terrestre(VeiculoAbstrato):
    def cria_veiculo_terrestre1(self):
        return Carro()
    def cria_veiculo_terrestre2(self):
        return Onibus()
    def cria_veiculo_aereo1(self):
        return None
    def cria_veiculo_aereo2(self):
        return None

# Fábrica Concreta para Veículos Aéreos
class Aereo(VeiculoAbstrato):
    def cria_veiculo_terrestre1(self):
        return None
    def cria_veiculo_terrestre2(self):
        return None
    def cria_veiculo_aereo1(self):
        return Aviao()
    def cria_veiculo_aereo2(self):
        return Helicoptero()

# Classes para veículos terrestres
class VeiculoTerrestre:
    tipo = "Terrestre"
    def descricao(self):
        pass
class Carro(VeiculoTerrestre):
    def descricao(self):
        return f"Tipo de transporte {self.tipo}: Carro"
class Onibus(VeiculoTerrestre):
    def descricao(self):
        return f"Tipo de transporte {self.tipo}: Onibus"

# Classes para veículos aéreos
class VeiculoAereo:
    tipo = "Aereo"
    def descricao(self):
        pass
class Aviao(VeiculoAereo):
    def descricao(self):
        return f"Tipo de transporte {self.tipo}: Aviao"
class Helicoptero(VeiculoAereo):
    def descricao(self):
        return f"Tipo de transporte {self.tipo}: Helicoptero"

# Simulação de uso
def veiculo(dono, fabrica):
    vt1 = fabrica.cria_veiculo_terrestre1()
    vt2 = fabrica.cria_veiculo_terrestre2()
    va1 = fabrica.cria_veiculo_aereo1()
    va2 = fabrica.cria_veiculo_aereo2()
    print(f"{dono} Tem um:")
    if va1: print(va1.descricao())
    if va2: print(va2.descricao())
    if vt1: print(vt1.descricao())
    if vt2: print(vt2.descricao())

if __name__ == "__main__":
    dono1 = "João da Silva"
    terrestre = Terrestre()
    veiculo(dono1, terrestre)

    dono2 = "Maria da Silva"
    aereo = Aereo()
    veiculo(dono2, aereo)
