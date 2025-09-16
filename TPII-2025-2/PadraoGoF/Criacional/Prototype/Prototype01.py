import copy

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return f"Nome: {self.nome}, Idade: {self.idade}"
    
    def clone(self):
        return copy.copy(self)


class PessoaManager:
    def __init__(self):
        self.pessoas = {}
    
    def addPessoa(self, id, nome, idade):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa

    def getPessoaId(self, id):
        return self.pessoas[id].clone()
        


manager = PessoaManager()

manager.addPessoa(1, "Viado da bike", 34)

pessoaClone1 = manager.getPessoaId(1)
pessoaClone1.nome = "Gordinho bololo"
pessoaClone1.id = 3

print("Pessoa original")
print(manager.getPessoaId(1))
print("Pessoa clonada")
print(pessoaClone1)