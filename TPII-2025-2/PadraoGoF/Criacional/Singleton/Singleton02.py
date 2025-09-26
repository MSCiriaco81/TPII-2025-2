# Padrão Singleton - Exemplo 2: Aluno com Notas

class Aluno:
    _instancia = None  # Instância única
    
    def __new__(cls):
        if cls._instancia is None:
            cls._instancia = super(Aluno, cls).__new__(cls)
            cls._instancia.nome = ""
            cls._instancia.notas = {}
        return cls._instancia
    
    def definir_nome(self, nome):
        self.nome = nome
    
    def add_nota(self, disciplina, nota):
        self.notas[disciplina] = nota
    
    def calcular_media(self):
        if not self.notas:
            return 0
        total = sum(self.notas.values())
        return total / len(self.notas)


# Teste do padrão Singleton
aluno1 = Aluno()
aluno2 = Aluno()

print(f"aluno1 é o mesmo objeto que aluno2? {aluno1 is aluno2}")

aluno1.definir_nome("João Silva")
aluno1.add_nota("Matemática", 8.5)
aluno2.add_nota("História", 7.0)
aluno1.add_nota("Física", 9.2)

print(f"Nome: {aluno1.nome}")
print(f"Notas: {aluno1.notas}")
print(f"Média: {aluno1.calcular_media():.2f}")