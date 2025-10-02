// QUESTÃO-6.7: Singleton para cache de dados centralizado
class CacheDados {
    constructor() {
        if (CacheDados._instance) {
            return CacheDados._instance;
        }
        this.cache = {};
        CacheDados._instance = this;
    }
    set(key, value) {
        this.cache[key] = value;
    }
    get(key) {
        return this.cache[key];
    }
    static getInstance() {
        if (!CacheDados._instance) {
            CacheDados._instance = new CacheDados();
        }
        return CacheDados._instance;
    }
}

// Exemplo de uso:
// const cache = CacheDados.getInstance();

// Saída de exemplo:
const cache1 = CacheDados.getInstance();
cache1.set('planeta', 'Arrakis');
const cache2 = CacheDados.getInstance();
cache2.set('castelo', 'Winterfell');
console.log(`Chani: planeta = ${cache1.get('planeta')}, castelo = ${cache1.get('castelo')}`);
console.log(`Robb Stark: planeta = ${cache2.get('planeta')}, castelo = ${cache2.get('castelo')}`);
