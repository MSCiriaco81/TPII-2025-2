// Exemplo de Adapter em Java
// O Adapter permite que interfaces incompatíveis trabalhem juntas.

// 1 - Interface do Cliente
interface AplicacaoCliente {
    void request();
}

// 2 - Serviço Existente
class Adaptee {
    void especificaRequest() {
        System.out.println("Requisição específica do Adaptee");
    }
}

// 3 - Adapter
class Adapter implements AplicacaoCliente {
    private Adaptee adaptee;
    Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    @Override
    public void request() {
        adaptee.especificaRequest();
    }
}

// 4 - Cliente que usa o Adapter
class Cliente {
    private AplicacaoCliente target;
    Cliente(AplicacaoCliente target) {
        this.target = target;
    }
    void criaRequest() {
        System.out.println("Cliente - Fazendo uma requisição");
        target.request();
    }
}

// 5 - Exemplo de uso
class MainAdapter {
    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        AplicacaoCliente adapter = new Adapter(adaptee);
        Cliente cliente = new Cliente(adapter);
        cliente.criaRequest();
    }
}
