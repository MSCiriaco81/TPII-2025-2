/**
 * PADRÃO FACADE
 * Sistema de Pizzaria que encapsula vários subsistemas (catálogo, pedido, cálculo e notificações)
 * atrás de uma interface única e simples: PizzariaFacade
 */

/* ====== Subsistemas internos (ocultos pela Fachada) ====== */

// Catálogo de produtos e combos
class Catalogo {
  constructor() {
    this.produtos = new Map();
    this.combos = new Map();
  }

  adicionarProduto(nome, preco) {
    this.produtos.set(nome, { nome, preco });
  }

  adicionarCombo(nomeCombo, nomesItens) {
    this.combos.set(nomeCombo, [...nomesItens]);
  }

  obterProduto(nome) {
    const produto = this.produtos.get(nome);
    if (!produto) throw new Error(`Produto não encontrado: ${nome}`);
    return produto;
  }

  obterCombo(nomeCombo) {
    const combo = this.combos.get(nomeCombo);
    if (!combo) throw new Error(`Combo não encontrado: ${nomeCombo}`);
    return combo.map((nome) => this.obterProduto(nome));
  }
}

// Motor de cálculo de preços
class MotorDePreco {
  static calcularTotal(itens, custoExtra = 0) {
    return itens.reduce((acc, item) => acc + item.preco, custoExtra);
  }
}

// Gerador de resumo do pedido
class GeradorDeResumo {
  static gerarResumo(pedido) {
    const listaItens = pedido.itens
      .map((it) => `\t- ${it.nome} (R$${it.preco.toFixed(2)})`)
      .join("\n");

    return `
Cliente: ${pedido.cliente.nome}
Email: ${pedido.cliente.email}
Itens do Pedido:
${listaItens}
\t--------------------------------
Custo Extra: R$${pedido.custoExtra.toFixed(2)}
Total: R$${pedido.total.toFixed(2)}
    `.trim();
  }
}

// Serviço de notificações (simplificado)
class ServicoDeNotificacao {
  enviar(mensagem, { email, sms, whatsapp } = {}, canais = []) {
    const canaisNorm = new Set(canais.map((c) => c.toLowerCase()));
    if (canaisNorm.has("email") && email) console.log(`Email - ${mensagem}`);
    if (canaisNorm.has("sms") && sms) console.log(`SMS - ${mensagem}`);
    if (canaisNorm.has("whatsapp") && whatsapp)
      console.log(`WhatsApp - ${mensagem}`);
  }
}

// Entidade Pedido
class Pedido {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
    this.custoExtra = 0;
    this.status = "Não Pago";
    this.total = 0;
  }
}

/* ===================== FACHADA ===================== */

class PizzariaFacade {
  constructor() {
    this.catalogo = new Catalogo();
    this.notificacoes = new ServicoDeNotificacao();
    this.pedidos = new Map();
    this._sequenciaId = 1;
  }

  // Cadastra produtos e combos
  inicializarCatalogo() {
    // Produtos
    this.catalogo.adicionarProduto("Pizza Portuguesa", 40.0);
    this.catalogo.adicionarProduto("Pizza de Queijo", 30.0);
    this.catalogo.adicionarProduto("Pizza de Calabresa", 35.0);
    this.catalogo.adicionarProduto("Pizza de Chocolate", 20.0);
    this.catalogo.adicionarProduto("Pizza de Caramelo", 25.0);

    // Combos
    this.catalogo.adicionarCombo("Combo Salgado", [
      "Pizza Portuguesa",
      "Pizza de Queijo",
      "Pizza de Calabresa",
    ]);

    this.catalogo.adicionarCombo("Combo Doce", [
      "Pizza de Chocolate",
      "Pizza de Caramelo",
    ]);
  }

  // Cria um novo pedido
  criarPedido(cliente) {
    const pedido = new Pedido(cliente);
    const id = String(this._sequenciaId++);
    this.pedidos.set(id, pedido);
    return id;
  }

  // Adiciona um produto ao pedido
  adicionarProduto(pedidoId, nomeProduto) {
    const pedido = this._obterPedido(pedidoId);
    pedido.itens.push(this.catalogo.obterProduto(nomeProduto));
    return this._recalcular(pedidoId);
  }

  // Adiciona um combo ao pedido
  adicionarCombo(pedidoId, nomeCombo) {
    const pedido = this._obterPedido(pedidoId);
    pedido.itens.push(...this.catalogo.obterCombo(nomeCombo));
    return this._recalcular(pedidoId);
  }

  // Define custo extra (ex: taxa de entrega)
  definirCustoExtra(pedidoId, valor) {
    const pedido = this._obterPedido(pedidoId);
    pedido.custoExtra = valor || 0;
    return this._recalcular(pedidoId);
  }

  // Retorna um resumo do pedido
  gerarResumo(pedidoId) {
    const pedido = this._obterPedido(pedidoId);
    return GeradorDeResumo.gerarResumo(pedido);
  }

  // Finaliza o pedido e envia notificações
  finalizarPedido(pedidoId, canais = []) {
    const pedido = this._obterPedido(pedidoId);
    pedido.status = "Pago";
    const mensagem = `Pedido confirmado! Total R$${pedido.total.toFixed(2)}`;
    console.log(mensagem);
    console.log(`Status: ${pedido.status}`);
    this.notificacoes.enviar(mensagem, pedido.cliente, canais);
    return { status: pedido.status, total: pedido.total };
  }

  /* ======= Métodos internos ======= */
  _recalcular(pedidoId) {
    const pedido = this._obterPedido(pedidoId);
    pedido.total = MotorDePreco.calcularTotal(pedido.itens, pedido.custoExtra);
    return pedido.total;
  }

  _obterPedido(pedidoId) {
    const pedido = this.pedidos.get(pedidoId);
    if (!pedido) throw new Error(`Pedido não encontrado: ${pedidoId}`);
    return pedido;
  }
}

/* ===================== EXEMPLO DE USO ===================== */

// Clientes
const cliente1 = {
  nome: "Paul",
  email: "atreides@gmail.com",
  sms: "555-1234",
  whatsapp: "555-1234",
};

const cliente2 = {
  nome: "Alia",
  email: "alia@gmail.com",
  sms: "555-5678",
  whatsapp: "555-5678",
};

// Cria a fachada e inicializa o catálogo
const pizzaria = new PizzariaFacade();
pizzaria.inicializarCatalogo();

// Pedido 1 - Combo Salgado
const pedido1 = pizzaria.criarPedido(cliente1);
pizzaria.adicionarCombo(pedido1, "Combo Salgado");
pizzaria.definirCustoExtra(pedido1, 5.0);

console.log("Pedido 1");
console.log(pizzaria.gerarResumo(pedido1));

console.log("\nFINALIZAÇÃO\n");
pizzaria.finalizarPedido(pedido1, ["email", "sms", "whatsapp"]);

console.log("\n##########################\n");

// Pedido 2 - Combo Doce
const pedido2 = pizzaria.criarPedido(cliente2);
pizzaria.adicionarCombo(pedido2, "Combo Doce");
pizzaria.definirCustoExtra(pedido2, 10.0);

console.log("Pedido 2");
console.log(pizzaria.gerarResumo(pedido2));

console.log("\nFINALIZAÇÃO\n");
pizzaria.finalizarPedido(pedido2, ["email", "sms", "whatsapp"]);
