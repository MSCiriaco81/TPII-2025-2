// QUESTÃO-6.6: Singleton para carrinho de compras por usuário
class CarrinhoCompras {
    constructor() {
        if (CarrinhoCompras._instance) {
            return CarrinhoCompras._instance;
        }
        this.itens = [];
        CarrinhoCompras._instance = this;
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
    getItens() {
        return this.itens;
    }
    static getInstance() {
        if (!CarrinhoCompras._instance) {
            CarrinhoCompras._instance = new CarrinhoCompras();
        }
        return CarrinhoCompras._instance;
    }
}

// Exemplo de uso:
// const carrinho = CarrinhoCompras.getInstance();

// Saída de exemplo:
const carrinho1 = CarrinhoCompras.getInstance();
carrinho1.adicionarItem('Espada de aço valiriano');
const carrinho2 = CarrinhoCompras.getInstance();
carrinho2.adicionarItem('Destilador Fremen');
console.log(`Arya Stark: ${carrinho1.getItens().join(', ')}`);
console.log(`Stilgar: ${carrinho2.getItens().join(', ')}`);
