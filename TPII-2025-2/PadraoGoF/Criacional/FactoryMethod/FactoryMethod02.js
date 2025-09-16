// Classe base para Pessoa
class Pessoa {
  constructor(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
  }

  // Método que será sobrescrito pelas subclasses
  exibirCargo() {
    console.log(`${this.nome} é ${this.cargo}.`);
  }
}

// Subclasse Aluno
class Aluno extends Pessoa {
  constructor(nome) {
    super(nome, "Aluno");
  }

  exibirCargo() {
    console.log(`${this.nome} é Aluno.`);
  }
}

// Subclasse Administrativo
class Administrativo extends Pessoa {
  constructor(nome) {
    super(nome, "Administrativo");
  }

  exibirCargo() {
    console.log(`${this.nome} é Administrativo.`);
  }
}

// Subclasse Professor
class Professor extends Pessoa {
  constructor(nome) {
    super(nome, "Professor");
  }

  exibirCargo() {
    console.log(`${this.nome} é Professor.`);
  }
}

// Subclasse Visitante
class Visitante extends Pessoa {
  constructor(nome) {
    super(nome, "Visitante");
  }

  exibirCargo() {
    console.log(`${this.nome} é Visitante.`);
  }
}

// Factory para criar as pessoas com base no cargo
class PessoaFactory {
  static criarPessoa(nome, cargo) {
    switch (cargo.toLowerCase()) {
      case "aluno":
        return new Aluno(nome);
      case "administrativo":
        return new Administrativo(nome);
      case "professor":
        return new Professor(nome);
      case "visitante":
        return new Visitante(nome);
      default:
        throw new Error("Cargo inválido.");
    }
  }
}

// Função para simular a criação das pessoas e exibir os cargos
function simularFuncionarios() {
  // Dados de exemplo
  const pessoas = [
    { nome: "João", cargo: "Aluno" },
    { nome: "Maria", cargo: "Professor" },
    { nome: "Carlos", cargo: "Administrativo" },
    { nome: "Ana", cargo: "Visitante" }
  ];

  // Criar as pessoas e exibir o cargo
  pessoas.forEach(pessoa => {
    const p = PessoaFactory.criarPessoa(pessoa.nome, pessoa.cargo);
    p.exibirCargo();
  });
}

// Chama a função para simular
simularFuncionarios();
