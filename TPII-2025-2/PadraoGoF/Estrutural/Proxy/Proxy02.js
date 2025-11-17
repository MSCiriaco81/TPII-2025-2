// OBJETO REAL - CLASSE PRODUTO:
class Produto{
    constructor(nome, preco, codEAN){
        this.nome = nome;
        this.preco = preco;
        this.codEAN = codEAN;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome} | R$${this.preco.toFixed(2)} | CodEAN: ${this.codEAN}`)
    }
}

// PROXY - PROXYPRODUTO:
class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }

    exibirDetalhes(){
        console.log("Autenticando no Sistema...");
        this.autenticar();
        console.log("Atenticação Realizada com Sucesso...")

        this.produto.exibirDetalhes();

        console.log("Registrando no Sistema...");
            // Funcionalidade 2
        console.log("Operação Concluida...")
        console.log("\n---------\n")
    }

    autenticar(){
        console.log("  >> Autenticando Usuario");
        console.log("  >> Consultando Dados   ");
        console.log("  >> Autenticação OK     ");
    }
}

// USO DO PADRAO:
const produtoReal1 = new Produto("Camiseta  ", 49.90, "7891223311775");
const produtoReal2 = new Produto("Bone      ", 29.90, "7891198537722");

const proxyProduto1 = new ProxyProduto(produtoReal1);
const proxyProduto2 = new ProxyProduto(produtoReal2);

proxyProduto1.exibirDetalhes();
proxyProduto2.exibirDetalhes();


