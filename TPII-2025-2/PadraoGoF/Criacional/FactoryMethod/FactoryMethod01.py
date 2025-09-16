# Classe base de veiculo:
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

# Subclasse de veiculo:
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Caminhao(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

# Fabrica abstrata de veiculo
class FabricaDeVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("Metodo deve ser implementado na subclasse")

# Fabrica concreta de carro:
class FabricaDeCarro(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

# Fabrica concreta de Moto:
class FabricaDeMoto(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

# Fabrica concreta de caminhao:
class FabricaDeCaminhao(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Caminhao(modelo)
    
# USO DO PADRAO DE PROJETO - FABRICA
fabricaDeCarro = FabricaDeCarro()
fabricaDeMoto = FabricaDeMoto()
fabricaDeCaminhao = FabricaDeCaminhao()

carro1 = fabricaDeCarro.criarVeiculo("Sedan")
carro1.mostrarDetalhes()
carro2 = fabricaDeCarro.criarVeiculo("esportivo")
carro2.mostrarDetalhes()

moto1 = fabricaDeMoto.criarVeiculo("Yamaha")
moto1.mostrarDetalhes()
moto2 = fabricaDeMoto.criarVeiculo("Honda")
moto2.mostrarDetalhes()

caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania")
caminhao1.mostrarDetalhes()
caminhao2 = fabricaDeCaminhao.criarVeiculo("W-Cargo")
caminhao2.mostrarDetalhes()