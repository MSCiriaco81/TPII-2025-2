// QUESTÃO-6.4: Singleton para gerenciador de configurações
class Configuracoes {
    constructor() {
        if (Configuracoes._instance) {
            return Configuracoes._instance;
        }
        this.configs = {};
        Configuracoes._instance = this;
    }
    setConfig(chave, valor) {
        this.configs[chave] = valor;
    }
    getConfig(chave) {
        return this.configs[chave];
    }
    static getInstance() {
        if (!Configuracoes._instance) {
            Configuracoes._instance = new Configuracoes();
        }
        return Configuracoes._instance;
    }
}

// Exemplo de uso:
// const conf = Configuracoes.getInstance();

// Saída de exemplo:
const conf1 = Configuracoes.getInstance();
conf1.setConfig('idioma', 'Fremen');
const conf2 = Configuracoes.getInstance();
conf2.setConfig('tema', 'Stark');
console.log(`Paul Atreides: idioma = ${conf1.getConfig('idioma')}, tema = ${conf1.getConfig('tema')}`);
console.log(`Jon Snow: idioma = ${conf2.getConfig('idioma')}, tema = ${conf2.getConfig('tema')}`);
