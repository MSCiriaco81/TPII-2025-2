// QUESTÃO-4.7: Builder para relatórios
class Relatorio {
    constructor() {
        this.partes = [];
    }
    addParte(parte) {
        this.partes.push(parte);
    }
    show() {
        return this.partes.join('\n');
    }
}

class RelatorioBuilder {
    constructor() {
        this.relatorio = new Relatorio();
    }
    addCapa(titulo) { this.relatorio.addParte(`Capa: ${titulo}`); return this; }
    addSumario() { this.relatorio.addParte('Sumário'); return this; }
    addConteudo(conteudo) { this.relatorio.addParte(`Conteúdo: ${conteudo}`); return this; }
    addConclusao() { this.relatorio.addParte('Conclusão'); return this; }
    build() { return this.relatorio; }
}

// Exemplo de uso:
// const builder = new RelatorioBuilder();

// Saída de exemplo:
const relatorios = [
    { nome: 'Vladimir Harkonnen', relatorio: new RelatorioBuilder().addCapa('Arrakis').addSumario().addConteudo('Especiaria').addConclusao().build() },
    { nome: 'Bran Stark', relatorio: new RelatorioBuilder().addCapa('O Norte').addSumario().addConteudo('Corvos').addConclusao().build() }
];
relatorios.forEach(r => {
    console.log(`${r.nome}:\n${r.relatorio.show()}`);
});
