# 1 - Interface do Cliente
class AplicacaoCliente:
    def request(self):
        pass

class Cliente:
    def __init__(self, target: AplicacaoCliente):
        self.target = target

    def cria_request(self):
        print("Cliente - Fazendo uma requisição")
        self.target.request()


# 2 - Serviço Existente
class Adaptee:
    def especifica_request(self):
        print("Requisição específica do Adaptee")


# 3 - Adapter
class Adapter(AplicacaoCliente):
    def __init__(self, adaptee: Adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.especifica_request()


# 5 - UTILIZANDO O ADAPTER -----------------------------------
if __name__ == "__main__":
    adaptee = Adaptee()
    adapter = Adapter(adaptee)
    cliente = Cliente(adapter)

    # Fazendo uma requisição - Requisição Específica do Adaptee:
    cliente.cria_request()
