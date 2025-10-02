// QUESTÃO-2.4: Sistema educacional usando Factory Method
class Prova {
    aplicar() {
        throw new Error('Método aplicar() deve ser implementado.');
    }
}

class ProvaObjetiva extends Prova {
    aplicar() {
        return 'Aplicando prova objetiva.';
    }
}

class ProvaDissertativa extends Prova {
    aplicar() {
        return 'Aplicando prova dissertativa.';
    }
}

class ProvaPratica extends Prova {
    aplicar() {
        return 'Aplicando prova prática.';
    }
}

class SistemaEducacional {
    criarProva() {
        throw new Error('Método criarProva() deve ser implementado.');
    }
    aplicarProva() {
        const prova = this.criarProva();
        return prova.aplicar();
    }
}

class SistemaObjetiva extends SistemaEducacional {
    criarProva() {
        return new ProvaObjetiva();
    }
}

class SistemaDissertativa extends SistemaEducacional {
    criarProva() {
        return new ProvaDissertativa();
    }
}

class SistemaPratica extends SistemaEducacional {
    criarProva() {
        return new ProvaPratica();
    }
}


// Saída de exemplo:
const provas = [
    { nome: 'Gurney Halleck', sistema: new SistemaObjetiva() },
    { nome: 'Sansa Stark', sistema: new SistemaDissertativa() },
    { nome: 'Jessica Atreides', sistema: new SistemaPratica() }
];
provas.forEach(p => {
    console.log(`${p.nome}: ${p.sistema.aplicarProva()}`);
});
