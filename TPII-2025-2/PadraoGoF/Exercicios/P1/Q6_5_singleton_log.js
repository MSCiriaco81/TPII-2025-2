// QUESTÃO-6.5: Singleton para sistema de log centralizado
class LogCentral {
    constructor() {
        if (LogCentral._instance) {
            return LogCentral._instance;
        }
        this.logs = [];
        LogCentral._instance = this;
    }
    log(msg) {
        this.logs.push(msg);
    }
    getLogs() {
        return this.logs;
    }
    static getInstance() {
        if (!LogCentral._instance) {
            LogCentral._instance = new LogCentral();
        }
        return LogCentral._instance;
    }
}

// Exemplo de uso:
// const logger = LogCentral.getInstance();

// Saída de exemplo:
const logger1 = LogCentral.getInstance();
logger1.log('Spice flow interrupted!');
const logger2 = LogCentral.getInstance();
logger2.log('Winter is coming!');
console.log(`Thufir Hawat: ${logger1.getLogs().join(' | ')}`);
console.log(`Bran Stark: ${logger2.getLogs().join(' | ')}`);
