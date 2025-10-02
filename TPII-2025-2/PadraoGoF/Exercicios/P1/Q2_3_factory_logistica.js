// QUESTÃO-2.3: Sistema de logística usando Factory Method
class Transporte {
    entregar() {
        throw new Error('Método entregar() deve ser implementado.');
    }
}

class Caminhao extends Transporte {
    entregar() {
        return 'Entrega realizada por caminhão.';
    }
}

class Navio extends Transporte {
    entregar() {
        return 'Entrega realizada por navio.';
    }
}

class Drone extends Transporte {
    entregar() {
        return 'Entrega realizada por drone.';
    }
}

class Logistica {
    criarTransporte() {
        throw new Error('Método criarTransporte() deve ser implementado.');
    }
    processarEntrega() {
        const transporte = this.criarTransporte();
        return transporte.entregar();
    }
}

class LogisticaCaminhao extends Logistica {
    criarTransporte() {
        return new Caminhao();
    }
}

class LogisticaNavio extends Logistica {
    criarTransporte() {
        return new Navio();
    }
}

class LogisticaDrone extends Logistica {
    criarTransporte() {
        return new Drone();
    }
}


// Saída de exemplo:
const pedidos = [
    { nome: 'Paul Atreides', logistica: new LogisticaCaminhao() },
    { nome: 'Arya Stark', logistica: new LogisticaNavio() },
    { nome: 'Duncan Idaho', logistica: new LogisticaDrone() }
];
pedidos.forEach(pedido => {
    console.log(`${pedido.nome}: ${pedido.logistica.processarEntrega()}`);
});
