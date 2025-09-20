// Exemplo de Abstract Factory em Java

// 1. Interface Abstrata da Fábrica
abstract class AbstractFactory {
    abstract ProdutoAbstrato criaProdutoA();
    abstract ProdutoAbstratoB criaProdutoB();
}

// 1. Fábrica 1 Concreta que cria Produto do Tipo A e B
class FabricaConcreta1 extends AbstractFactory {
    @Override
    ProdutoAbstrato criaProdutoA() {
        return new ProdutoConcretoA1();
    }
    @Override
    ProdutoAbstratoB criaProdutoB() {
        return new ProdutoConcretoB1();
    }
}

// 1. Fábrica 2 Concreta que cria Produto do Tipo A e B
class FabricaConcreta2 extends AbstractFactory {
    @Override
    ProdutoAbstrato criaProdutoA() {
        return new ProdutoConcretoA2();
    }
    @Override
    ProdutoAbstratoB criaProdutoB() {
        return new ProdutoConcretoB2();
    }
}

// 2. Interface dos Produtos do Tipo A
abstract class ProdutoAbstrato {
    abstract String metodoA();
}

// 2. Implementação Concreta do Produto do Tipo A - Fábrica 1
class ProdutoConcretoA1 extends ProdutoAbstrato {
    @Override
    String metodoA() {
        return "Produto do Tipo A da Fabrica 1";
    }
}

// 2. Implementação Concreta do Produto do Tipo A - Fábrica 2
class ProdutoConcretoA2 extends ProdutoAbstrato {
    @Override
    String metodoA() {
        return "Produto do Tipo A da Fabrica 2";
    }
}

// 3. Interface dos Produtos do Tipo B
abstract class ProdutoAbstratoB {
    abstract String metodoB();
}

// 3. Implementação Concreta do Produto do Tipo B - Fábrica 1
class ProdutoConcretoB1 extends ProdutoAbstratoB {
    @Override
    String metodoB() {
        return "Produto do Tipo B da Fabrica 1";
    }
}

// 3. Implementação Concreta do Produto do Tipo B - Fábrica 2
class ProdutoConcretoB2 extends ProdutoAbstratoB {
    @Override
    String metodoB() {
        return "Produto do Tipo B da Fabrica 2";
    }
}

// Exemplo de uso
public class MainAbstractFactory {
    public static void main(String[] args) {
        testAbstractFactory();
    }

    static void testAbstractFactory() {
        AbstractFactory fabrica1 = new FabricaConcreta1();
        ProdutoAbstrato produtoA1 = fabrica1.criaProdutoA();
        ProdutoAbstratoB produtoB1 = fabrica1.criaProdutoB();
        System.out.println(produtoA1.metodoA());
        System.out.println(produtoB1.metodoB());

        AbstractFactory fabrica2 = new FabricaConcreta2();
        ProdutoAbstrato produtoA2 = fabrica2.criaProdutoA();
        ProdutoAbstratoB produtoB2 = fabrica2.criaProdutoB();
        System.out.println(produtoA2.metodoA());
        System.out.println(produtoB2.metodoB());
    }
}
