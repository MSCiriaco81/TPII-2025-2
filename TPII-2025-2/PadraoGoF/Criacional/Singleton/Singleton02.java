// Exemplo de Singleton em Java - Aluno
class Aluno {
    private static Aluno instancia;
    private String nome = "";
    private java.util.Map<String, Double> notas = new java.util.HashMap<>();
    private Aluno() {}
    public static Aluno getInstance() {
        if (instancia == null) {
            instancia = new Aluno();
        }
        return instancia;
    }
    public void definirNome(String nome) {
        this.nome = nome;
    }
    public void addNota(String disciplina, double nota) {
        this.notas.put(disciplina, nota);
    }
    public double calcularMedia() {
        if (notas.isEmpty()) return 0.0;
        double total = 0;
        for (double nota : notas.values()) {
            total += nota;
        }
        return total / notas.size();
    }
    public String getNome() { return nome; }
}

class MainSingleton02 {
    public static void main(String[] args) {
        Aluno aluno = Aluno.getInstance();
        aluno.definirNome("João");
        aluno.addNota("Matemática", 8.5);
        aluno.addNota("Português", 7.0);
        aluno.addNota("História", 9.0);
        System.out.println("Nome: " + aluno.getNome());
        System.out.println("Média: " + aluno.calcularMedia());
    }
}
