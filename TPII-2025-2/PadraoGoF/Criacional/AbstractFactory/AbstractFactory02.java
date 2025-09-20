// Exemplo de Abstract Factory em Java - Loja

// Interface da Fábrica Abstrata
abstract class LojaAbstrata {
    abstract ProdutoEletronico criaProdutoEletronico();
    abstract ProdutoModa criaProdutoModa();
}

// Fábrica Concreta para Loja Física
class LojaFisica extends LojaAbstrata {
    @Override
    ProdutoEletronico criaProdutoEletronico() {
        return new Telefone();
    }
    @Override
    ProdutoModa criaProdutoModa() {
        return new Camiseta();
    }
}

// Fábrica Concreta para Loja Virtual
class LojaVirtual extends LojaAbstrata {
    @Override
    ProdutoEletronico criaProdutoEletronico() {
        return new Telefone();
    }
    @Override
    ProdutoModa criaProdutoModa() {
        return new Camiseta();
    }
}

// Classe Abstrata para Produtos Eletrônicos
abstract class ProdutoEletronico {
    String tipo = "eletronico";
    abstract String descricao();
}

// Classe Abstrata para Produtos de Moda
abstract class ProdutoModa {
    String tipo = "Moda";
    abstract String descricao();
}

// Classe Concreta para Produtos Eletrônicos
class Telefone extends ProdutoEletronico {
    @Override
    String descricao() {
        return "Produto " + tipo + ": Telefone";
    }
}

// Classe Concreta para Produtos de Moda
class Camiseta extends ProdutoModa {
    @Override
    String descricao() {
        return "Produto " + tipo + ": Camiseta";
    }
}

// Simulação da Loja
class SimulacaoLoja {
    static void loja(String cliente, LojaAbstrata loja) {
        ProdutoEletronico produtoEletronico = loja.criaProdutoEletronico();
        ProdutoModa produtoModa = loja.criaProdutoModa();
        System.out.println(cliente + " Comprou:");
        System.out.println(produtoEletronico.descricao());
        System.out.println(produtoModa.descricao());
    }

    public static void main(String[] args) {
        String cliente1 = "João da Silva";
        LojaAbstrata lojaFisica = new LojaFisica();
        loja(cliente1, lojaFisica);

        System.out.println("\n...\n");

        String cliente2 = "Maria da Silva";
        LojaAbstrata lojaVirtual = new LojaVirtual();
        loja(cliente2, lojaVirtual);
    }
}
