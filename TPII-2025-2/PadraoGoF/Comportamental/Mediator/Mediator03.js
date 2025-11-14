/*
DESAFIO:

Implemente o padrão Mediator simulando o funcionamento de uma pizzaria.Nenhum 
componente (Garçom, Cozinha, Forno, Caixa e Entrega) pode se comunicar diretamente.

Toda comunicação deve passar pela classe PizzariaCentral, que atuará como o mediator.

A PizzariaCentral deve: receber pedidos do garçom, gerenciar a fila de operações, 
dar prioridade a pedidos marcados como urgentes, encaminhar cada etapa do pedido ao 
próximo componente (Cozinha → Forno → Caixa → Entrega), garantir que apenas uma etapa 
seja processada por vez.

Cada componente: envia eventos apenas para a PizzariaCentral, nunca chama métodos de 
outro componente diretamente.

Demonstre o funcionamento criando três pedidos, incluindo um pedido urgente que deve 
furar a fila.
*/

// CLASSE CONCRETA DO MEDIATOR
class PizzariaCentral {
  constructor() {
    this.componentes = [];
    this.filaPedidos = [];
  }

  registrar(componente) {
    this.componentes.push(componente);
    componente.setMediator(this);
  }

  receberPedido(pedido) {
    this.filaPedidos.push(pedido);
    this.filaPedidos.sort((a, b) => (b.urgente === a.urgente ? 0 : b.urgente ? 1 : -1));
    this.enviarMensagem(`Novo pedido recebido: ${pedido.toString()}`);
  }

  processarPedidos() {
    while (this.filaPedidos.length > 0) {
      const pedidoAtual = this.filaPedidos.shift();
      console.log("\n");

      this.enviarMensagem(`Iniciando processamento de ${pedidoAtual}`);
      this.processarEtapa("Garçom", `Pedido anotado para ${pedidoAtual.cliente}`);
      this.processarEtapa("Cozinha", "Preparando a pizza...");
      this.processarEtapa("Forno", "Assando a pizza...");
      this.processarEtapa("Caixa", "Registrando pagamento...");
      this.processarEtapa("Entrega", "Enviando pedido para o cliente...");

      this.enviarMensagem(`Pedido finalizado: ${pedidoAtual}`);
      console.log("------------------------------------");
    }
  }

  processarEtapa(componente, mensagem) {
    this.enviarMensagem(`[${componente}] ${mensagem}`);
  }

  enviarMensagem(msg) {
    console.log(`[Central] ${msg}`);
  }
}

// CLASSE ABSTRATA COMPONENTE
class Componente {
  constructor(nome) {
    this.nome = nome;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  getNome() {
    return this.nome;
  }
}

// COMPONENTES CONCRETOS
class Garcom extends Componente {
  constructor() {
    super("garçom");
  }

  criarPedido(cliente, urgente) {
    const pedido = new Pedido(cliente, urgente);
    this.mediator.receberPedido(pedido);
  }
}

class Cozinha extends Componente {
  constructor() {
    super("cozinha");
  }
}

class Forno extends Componente {
  constructor() {
    super("forno");
  }
}

class Caixa extends Componente {
  constructor() {
    super("caixa");
  }
}

class Entrega extends Componente {
  constructor() {
    super("entrega");
  }
}


// CLASSE PEDIDO
class Pedido {
  static contador = 1;

  constructor(cliente, urgente) {
    this.codigo = Pedido.contador++;
    this.cliente = cliente;
    this.urgente = urgente;
  }

  toString() {
    return `Pedido #${this.codigo} (${this.cliente}${this.urgente ? ", URGENTE" : ""})`;
  }
}

// ==========================
// Uso do padrão Mediator
// ==========================
(function(){
  const pizzaria = new PizzariaCentral();

  const garcom = new Garcom();
  const cozinha = new Cozinha();
  const forno = new Forno();
  const caixa = new Caixa();
  const entrega = new Entrega();

  pizzaria.registrar(garcom);
  pizzaria.registrar(cozinha);
  pizzaria.registrar(forno);
  pizzaria.registrar(caixa);
  pizzaria.registrar(entrega);

  // Criar pedidos
  garcom.criarPedido("Paul", false);
  garcom.criarPedido("Alia", true);
  garcom.criarPedido("Jessica", false);

  pizzaria.processarPedidos()
})();
