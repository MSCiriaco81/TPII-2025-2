// Exemplo de Composite em Java
// O padrão Composite permite compor objetos em estruturas de árvore para representar hierarquias parte-todo.

// Componente base
abstract class Componente {
    protected String nome;
    Componente(String nome) { this.nome = nome; }
    abstract void adicionar(Componente componente);
    abstract void remover(Componente componente);
    abstract String obterNome();
    abstract double obterPreco();
}

// Folha (não pode ter filhos)
class Folha extends Componente {
    private double preco;
    Folha(String nome, double preco) {
        super(nome);
        this.preco = preco;
    }
    void adicionar(Componente componente) {}
    void remover(Componente componente) {}
    String obterNome() { return nome; }
    double obterPreco() { return preco; }
}

// Conteiner (pode ter filhos)
class Conteiner extends Componente {
    private java.util.List<Componente> componentes = new java.util.ArrayList<>();
    Conteiner(String nome) { super(nome); }
    void adicionar(Componente componente) { componentes.add(componente); }
    void remover(Componente componente) { componentes.remove(componente); }
    String obterNome() { return nome; }
    double obterPreco() {
        double preco = 0;
        for (Componente c : componentes) {
            preco += c.obterPreco();
        }
        return preco;
    }
}

// Exemplo de uso
class MainComposite {
    public static void main(String[] args) {
        Componente maca = new Folha("Maçã", 2.00);
        Componente banana = new Folha("Banana", 1.50);
        Componente cesta = new Conteiner("Cesta de Frutas");
        cesta.adicionar(maca);
        cesta.adicionar(banana);
        System.out.println(cesta.obterNome() + " - Preço total: R$ " + cesta.obterPreco());
    }
}
