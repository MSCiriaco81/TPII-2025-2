// Exemplo de Factory Method em Java - Pessoas

// Classe base para Pessoa
class Pessoa {
    String nome;
    String cargo;
    Pessoa(String nome, String cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    void exibirCargo() {
        System.out.println(nome + " é " + cargo + ".");
    }
}
// Subclasse Aluno
class Aluno extends Pessoa {
    Aluno(String nome) { super(nome, "Aluno"); }
    @Override
    void exibirCargo() { System.out.println(nome + " é Aluno."); }
}
// Subclasse Administrativo
class Administrativo extends Pessoa {
    Administrativo(String nome) { super(nome, "Administrativo"); }
    @Override
    void exibirCargo() { System.out.println(nome + " é Administrativo."); }
}
// Subclasse Professor
class Professor extends Pessoa {
    Professor(String nome) { super(nome, "Professor"); }
    @Override
    void exibirCargo() { System.out.println(nome + " é Professor."); }
}
// Subclasse Visitante
class Visitante extends Pessoa {
    Visitante(String nome) { super(nome, "Visitante"); }
    @Override
    void exibirCargo() { System.out.println(nome + " é Visitante."); }
}
// Factory para criar as pessoas com base no cargo
class PessoaFactory {
    static Pessoa criarPessoa(String nome, String cargo) {
        switch (cargo.toLowerCase()) {
            case "aluno": return new Aluno(nome);
            case "administrativo": return new Administrativo(nome);
            case "professor": return new Professor(nome);
            case "visitante": return new Visitante(nome);
            default: throw new IllegalArgumentException("Cargo inválido.");
        }
    }
}

public class MainFactoryMethodPessoa {
    public static void main(String[] args) {
        // Dados de exemplo
        String[][] pessoas = {
            {"João", "Aluno"},
            {"Maria", "Professor"},
            {"Carlos", "Administrativo"},
            {"Ana", "Visitante"}
        };
        for (String[] pessoa : pessoas) {
            Pessoa p = PessoaFactory.criarPessoa(pessoa[0], pessoa[1]);
            p.exibirCargo();
        }
    }
}
