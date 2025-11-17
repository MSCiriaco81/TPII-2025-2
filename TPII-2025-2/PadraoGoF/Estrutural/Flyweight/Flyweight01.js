// Flyweight Factory
class FabricaFlyeight{
    constructor(){
        this.flyweights = {};
    }

    obterFlyeight(id){
        if(!this.flyweights[id]){
            this.flyweights[id] = new ProdutoFlyeight(id);
        }
        return this.flyweights[id];
    }
}

// Flyeight
class ProdutoFlyeight{
    constructor(id){
        this.id = id;
    }

    exibirDetalhe(nome, preco){
        console.log(`ID: ${this.id} | R$${preco.toFixed(2)} | PROD: ${nome}`);
    }
}

// Cliente - USO DO PADRAO:
class Cliente{
    constructor(){
        this.fabricaFlyeight = new FabricaFlyeight();
        this.pedido = []
    }

    addProduto(id, nome, preco){
        const flyweights = this.fabricaFlyeight.obterFlyeight(id);
        this.pedido.push({flyweights, nome, preco});
    }

    exibirPedido(){
        console.log("Itens do Pedido:");
        this.pedido.forEach(item => {
            item.flyweights.exibirDetalhe(item.nome, item.preco);
        })
    }
}

// Aplicação Geral da Estrutura:
let valor = 99.99;
const cliente = new Cliente();

cliente.addProduto("001", "Camiseta   ", 39.90);
cliente.addProduto("002", "Calca Jeans", 89.90);
cliente.addProduto("003", "Bermuda    ", 39.90);
//---
cliente.addProduto("002", "Chinelo    ", valor);
cliente.addProduto("003", "Bone       ", 39.90);

cliente.exibirPedido();