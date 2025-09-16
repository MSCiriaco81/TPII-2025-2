// Implementação da interface de cálculo de preço
class PriceImpl {
  getBasePrice() {
    throw new Error("Método getBasePrice() deve ser implementado");
  }

  getSizeMultiplier() {
    throw new Error("Método getSizeMultiplier() deve ser implementado");
  }

  getExtrasPrice() {
    throw new Error("Método getExtrasPrice() deve ser implementado");
  }

  getTotalPrice() {
    return this.getBasePrice() * this.getSizeMultiplier() + this.getExtrasPrice();
  }
}

// Implementação concreta do cálculo para a pizza
class PizzaPrice extends PriceImpl {
  constructor(sabor, tamanho, adicionais) {
    super();
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.adicionais = adicionais;
  }

  getBasePrice() {
    const basePrices = {
      'margherita': 20,
      'pepperoni': 25,
      'quatro-queijos': 30,
      'frango-catupiry': 28,
    };
    return basePrices[this.sabor] || 20;
  }

  getSizeMultiplier() {
    const sizeMultipliers = {
      'pequena': 1,
      'media': 1.5,
      'grande': 2
    };
    return sizeMultipliers[this.tamanho] || 1;
  }

  getExtrasPrice() {
    const extrasPrices = {
      'borda-recheada': 5,
      'azeitona': 3,
      'bacon': 7,
      'extra-queijo': 4,
      'catupiry': 6
    };

    return this.adicionais.reduce((total, adicional) => {
      return total + (extrasPrices[adicional] || 0);
    }, 0);
  }
}

// Abstração da Pizza que utiliza a implementação para calcular o preço
class Pizza {
  constructor(priceImpl) {
    this.priceImpl = priceImpl;
  }

  getDescription() {
    const sabores = {
      'margherita': ['molho de tomate', 'queijo muçarela', 'manjericão'],
      'pepperoni': ['molho de tomate', 'queijo muçarela', 'pepperoni'],
      'quatro-queijos': ['queijo muçarela', 'queijo gorgonzola', 'queijo parmesão', 'queijo provolone'],
      'frango-catupiry': ['frango desfiado', 'catupiry', 'queijo muçarela']
    };

    const ingredientes = sabores[this.priceImpl.sabor] || [];

    return `Pizza sabor ${this.priceImpl.sabor} (${ingredientes.join(', ')}), tamanho ${this.priceImpl.tamanho}, com adicionais: ${this.priceImpl.adicionais.length > 0 ? this.priceImpl.adicionais.join(', ') : 'nenhum'}`;
  }

  getTotalPrice() {
    return this.priceImpl.getTotalPrice();
  }
}

// Mostrar opções para o usuário

function mostrarOpcoes() {
  const sabores = {
    'margherita': ['molho de tomate', 'queijo muçarela', 'manjericão'],
    'pepperoni': ['molho de tomate', 'queijo muçarela', 'pepperoni'],
    'quatro-queijos': ['queijo muçarela', 'queijo gorgonzola', 'queijo parmesão', 'queijo provolone'],
    'frango-catupiry': ['frango desfiado', 'catupiry', 'queijo muçarela']
  };

  const tamanhos = ['pequena', 'media', 'grande'];

  const adicionais = {
    'borda-recheada': 5,
    'azeitona': 3,
    'bacon': 7,
    'extra-queijo': 4,
    'catupiry': 6
  };

  console.log("Sabores disponíveis:");
  for (const [sabor, ingredientes] of Object.entries(sabores)) {
    console.log(`- ${sabor}: ${ingredientes.join(', ')}`);
  }

  console.log("\nTamanhos disponíveis:");
  tamanhos.forEach(t => console.log(`- ${t}`));

  console.log("\nAdicionais disponíveis:");
  for (const [adicional, preco] of Object.entries(adicionais)) {
    console.log(`- ${adicional} (R$ ${preco})`);
  }
}

mostrarOpcoes();

const saborEscolhido = 'quatro-queijos';
const tamanhoEscolhido = 'media';
const adicionaisEscolhidos = ['borda-recheada', 'extra-queijo'];

const pizzaPrice = new PizzaPrice(saborEscolhido, tamanhoEscolhido, adicionaisEscolhidos);
const pizza = new Pizza(pizzaPrice);

console.log("\nPedido:");
console.log(pizza.getDescription());
console.log("Valor total: R$ " + pizza.getTotalPrice().toFixed(2));
