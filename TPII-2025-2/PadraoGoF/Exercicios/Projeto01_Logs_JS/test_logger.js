// Teste simples do sistema de logs (em JavaScript)
// Executar: node test_logger.js

const path = require('path');
const { LoggerConsole, LoggerArquivo, LoggerEmail } = require('./logger');

// Cria instâncias dos handlers
const consoleLogger = new LoggerConsole();
// Define caminho absoluto para o arquivo de logs dentro da pasta do exercício
const arquivoPath = path.join(__dirname, 'logs_app.txt');
const fileLogger = new LoggerArquivo(arquivoPath);
const emailLogger = new LoggerEmail();

// Configura a cadeia: Console -> Arquivo -> Email
consoleLogger.setNext(fileLogger).setNext(emailLogger);

console.log('--- Iniciando testes do sistema de logs ---');

// 1) INFO -> deve ser tratado por LoggerConsole e LoggerArquivo
console.log('\nEnviando log INFO...');
consoleLogger.handle('INFO', 'Este é um log de informação.');

// 2) WARNING -> deve ser tratado por LoggerArquivo (não pelo Console)
console.log('\nEnviando log WARNING...');
consoleLogger.handle('WARNING', 'Este é um aviso (warning).');

// 3) ERROR -> deve ser tratado por LoggerEmail (somente)
console.log('\nEnviando log ERROR...');
consoleLogger.handle('ERROR', 'Este é um erro crítico.');

// Mostra conteúdo do arquivo de logs para verificar o que foi gravado
const fs = require('fs');
try {
  const content = fs.readFileSync(arquivoPath, 'utf8');
  console.log('\nConteúdo do arquivo de logs:');
  console.log('--------------------------------');
  console.log(content);
  console.log('--------------------------------');
} catch (err) {
  console.log('\n(Leitura) Não foi possível abrir o arquivo de logs ainda:', err.message);
}

console.log('\n--- Testes concluídos ---');
