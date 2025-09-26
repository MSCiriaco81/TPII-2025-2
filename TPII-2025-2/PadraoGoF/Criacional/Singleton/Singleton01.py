# Padrão Singleton - Exemplo 1: Contador Global

class Singleton:
    _instance = None  # Instância única
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
            cls._instance.valor = 0
        return cls._instance
    
    def incremento(self):
        self.valor += 1
        print(f"Valor: {self.valor}")


# Teste do padrão Singleton
print("Antes de iniciar s1 e s2")
s1 = Singleton()
s2 = Singleton()

print("Analisa se s1 é igual a s2:")
print(s1 is s2)

print("Incremento de s1 e s2")
s1.incremento()
s2.incremento()

print("Conclui a operação")