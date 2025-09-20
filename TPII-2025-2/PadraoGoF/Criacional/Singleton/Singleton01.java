// Exemplo de Singleton em Java - Contador Simples

class Singleton {
    private static Singleton instance;
    private int valor = 0;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    public void incremento() {
        valor++;
        System.out.println("Valor: " + valor);
    }
}

class MainSingleton01 {
    public static void main(String[] args) {
        System.out.println("Antes de iniciar S1 e S2");
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        System.out.println("Analisa se S1 é igual S2: ");
        System.out.println(s1 == s2);
        System.out.println("Incremento de S1 e S2");
        s1.incremento();
        s2.incremento();
        System.out.println("Conclui a operação");
    }
}
