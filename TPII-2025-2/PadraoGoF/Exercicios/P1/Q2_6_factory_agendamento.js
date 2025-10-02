// QUESTÃO-2.6: Agendamento de serviços usando Factory Method
class Servico {
    agendar() {
        throw new Error('Método agendar() deve ser implementado.');
    }
}

class Consulta extends Servico {
    agendar() {
        return 'Consulta agendada.';
    }
}

class Reparo extends Servico {
    agendar() {
        return 'Reparo agendado.';
    }
}

class Entrega extends Servico {
    agendar() {
        return 'Entrega agendada.';
    }
}

class Agendamento {
    criarServico() {
        throw new Error('Método criarServico() deve ser implementado.');
    }
    agendarServico() {
        const servico = this.criarServico();
        return servico.agendar();
    }
}

class AgendamentoConsulta extends Agendamento {
    criarServico() {
        return new Consulta();
    }
}

class AgendamentoReparo extends Agendamento {
    criarServico() {
        return new Reparo();
    }
}

class AgendamentoEntrega extends Agendamento {
    criarServico() {
        return new Entrega();
    }
}


// Saída de exemplo:
const agendamentos = [
    { nome: 'Daenerys Targaryen', ag: new AgendamentoConsulta() },
    { nome: 'Leto Atreides', ag: new AgendamentoReparo() },
    { nome: 'Tyrion Lannister', ag: new AgendamentoEntrega() }
];
agendamentos.forEach(a => {
    console.log(`${a.nome}: ${a.ag.agendarServico()}`);
});
