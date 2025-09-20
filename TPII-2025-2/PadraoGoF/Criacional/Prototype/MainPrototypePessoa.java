// Exemplo de Prototype em Java - Pessoa

// Classe Pessoa (Prototype)
class Pessoa implements Cloneable {
    int id;
    String nome;
    int idade;
    Pessoa(int id, String nome, int idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    @Override
    public Pessoa clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
    @Override
    public String toString() {
        return "Pessoa{id=" + id + ", nome='" + nome + "', idade=" + idade + "}";
    }
}

// Gerenciador de Pessoas
class PessoaManager {
    java.util.Map<Integer, Pessoa> pessoas = new java.util.HashMap<>();
    void addPessoa(int id, String nome, int idade) {
        pessoas.put(id, new Pessoa(id, nome, idade));
    }
    Pessoa getPessoaId(int id) {
        Pessoa original = pessoas.get(id);
        if (original != null) {
            return original.clone();
        } else {
            return null;
        }
    }
}

public class MainPrototypePessoa {
    public static void main(String[] args) {
        PessoaManager manager = new PessoaManager();
        manager.addPessoa(1, "Pessoa 1", 44);
        manager.addPessoa(2, "Pessoa 2", 65);
        manager.addPessoa(3, "Pessoa 3", 1360);

        Pessoa pessoaClone1 = manager.getPessoaId(1);
        if (pessoaClone1 != null) {
            pessoaClone1.nome = "Pessoa Clonada";
            pessoaClone1.id = 99;
        }

        System.out.println("Pessoa original:");
        System.out.println(manager.getPessoaId(1));
        System.out.println("Pessoa clonada:");
        System.out.println(pessoaClone1);
    }
}
