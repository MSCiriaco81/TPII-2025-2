// QUESTÃO-4.9: Builder para cadastro de estudantes com campos opcionais
class Estudante {
    constructor(nome, idade, email, telefone, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    show() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}, Telefone: ${this.telefone}, Endereço: ${this.endereco}`;
    }
}

class EstudanteBuilder {
    constructor(nome) {
        this.nome = nome;
        this.idade = null;
        this.email = null;
        this.telefone = null;
        this.endereco = null;
    }
    setIdade(idade) { this.idade = idade; return this; }
    setEmail(email) { this.email = email; return this; }
    setTelefone(telefone) { this.telefone = telefone; return this; }
    setEndereco(endereco) { this.endereco = endereco; return this; }
    build() {
        return new Estudante(this.nome, this.idade, this.email, this.telefone, this.endereco);
    }
}

// Exemplo de uso:

// Saída de exemplo:
const estudantes = [
    new EstudanteBuilder('Gurney Halleck').setIdade(45).setEmail('gurney@arrakis.com').setEndereco('Arrakis').build(),
    new EstudanteBuilder('Arya Stark').setIdade(18).setTelefone('555-9876').setEndereco('Winterfell').build()
];
estudantes.forEach(e => {
    console.log(e.show());
});
