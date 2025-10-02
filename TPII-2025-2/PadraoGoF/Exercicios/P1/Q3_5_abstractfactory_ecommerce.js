// QUESTÃO-3.5: Abstract Factory para e-commerce (eletrônicos e moda)
// Produtos: Produto, Embalagem

class Produto {
    descricao() { throw new Error('Implementar descricao()'); }
}
class Embalagem {
    tipo() { throw new Error('Implementar tipo()'); }
}

// Eletrônicos
class ProdutoEletronico extends Produto {
    descricao() { return 'Produto eletrônico'; }
}
class EmbalagemEletronico extends Embalagem {
    tipo() { return 'Embalagem reforçada para eletrônicos'; }
}

// Moda
class ProdutoModa extends Produto {
    descricao() { return 'Produto de moda'; }
}
class EmbalagemModa extends Embalagem {
    tipo() { return 'Embalagem estilosa para moda'; }
}

// Abstract Factory
class ECommerceFactory {
    criarProduto() { throw new Error('Implementar criarProduto()'); }
    criarEmbalagem() { throw new Error('Implementar criarEmbalagem()'); }
}

class EletronicoFactory extends ECommerceFactory {
    criarProduto() { return new ProdutoEletronico(); }
    criarEmbalagem() { return new EmbalagemEletronico(); }
}
class ModaFactory extends ECommerceFactory {
    criarProduto() { return new ProdutoModa(); }
    criarEmbalagem() { return new EmbalagemModa(); }
}

// Exemplo de uso:
// const factory = new EletronicoFactory();
// const produto = factory.criarProduto();

// Saída de exemplo:
const clientes = [
    { nome: 'Lady Jessica', factory: new EletronicoFactory() },
    { nome: 'Brienne of Tarth', factory: new ModaFactory() }
];
clientes.forEach(c => {
    const produto = c.factory.criarProduto();
    const embalagem = c.factory.criarEmbalagem();
    console.log(`${c.nome}: ${produto.descricao()}, ${embalagem.tipo()}`);
});
