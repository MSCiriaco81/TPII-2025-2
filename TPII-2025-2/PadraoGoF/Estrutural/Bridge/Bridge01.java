// Exemplo de Bridge em Java
// O padrão Bridge separa a abstração da implementação, permitindo que ambos evoluam independentemente.

// Interface de Cor
interface Cor {
    String getCor();
}

// Implementações concretas de Cor
class CorVermelha implements Cor {
    public String getCor() { return "Vermelho"; }
}
class CorVerde implements Cor {
    public String getCor() { return "Verde"; }
}
class CorAzul implements Cor {
    public String getCor() { return "Azul"; }
}

// Abstração Forma
abstract class Forma {
    protected Cor cor;
    Forma(Cor cor) { this.cor = cor; }
    void setCor(Cor cor) { this.cor = cor; }
    abstract void desenhar();
}

// Abstrações refinadas
class Circulo extends Forma {
    Circulo(Cor cor) { super(cor); }
    void desenhar() {
        System.out.println("Desenhando um Círculo " + cor.getCor());
    }
}
class Quadrado extends Forma {
    Quadrado(Cor cor) { super(cor); }
    void desenhar() {
        System.out.println("Desenhando um Quadrado " + cor.getCor());
    }
}

// Exemplo de uso
class MainBridge {
    public static void main(String[] args) {
        Forma circuloVermelho = new Circulo(new CorVermelha());
        Forma quadradoVerde = new Quadrado(new CorVerde());
        Forma circuloAzul = new Circulo(new CorAzul());
        circuloVermelho.desenhar();
        quadradoVerde.desenhar();
        circuloAzul.desenhar();
    }
}
