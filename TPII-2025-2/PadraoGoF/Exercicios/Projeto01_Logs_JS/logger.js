// Sistema de Logs usando Chain of Responsibility (exemplo simples em JavaScript)
// Comentários em português explicando cada parte.

// Níveis de log usados neste exemplo: 'INFO', 'WARNING', 'ERROR'

class Logger {
  // Construtor aceita o próximo handler na cadeia
  constructor(next = null) {
    this.next = next;
  }

  // Define o próximo handler e retorna-o para facilitar encadeamento
  setNext(next) {
    this.next = next;
    return next;
  }

  // Método público para tratar uma mensagem; cada handler decide se trata e
  // passa a mensagem adiante (permitindo que múltiplos handlers processem a
  // mesma mensagem quando apropriado).
  handle(level, message) {
    if (this.canHandle(level)) {
      this.write(message, level);
    }

    // Sempre encaminha ao próximo (se houver) para que outros handlers
    // também possam processar a mesma mensagem quando aplicável.
    if (this.next) {
      this.next.handle(level, message);
    }
  }

  // Subclasses devem sobrescrever canHandle e write
  canHandle(level) {
    return false;
  }

  write(message, level) {
    // Implementado nas subclasses
  }
}

// Logger que escreve no console — lida apenas com INFO
class LoggerConsole extends Logger {
  canHandle(level) {
    return level === 'INFO';
  }

  write(message, level) {
    // Exibe no console com um prefixo identificador
    console.log(`[CONSOLE][${level}] ${message}`);
  }
}

// Logger que grava em arquivo — lida com INFO e WARNING
class LoggerArquivo extends Logger {
  // filePath padrão é 'logs_app.txt' mas pode ser sobrescrito
  constructor(filePath = 'logs_app.txt', next = null) {
    super(next);
    this.filePath = filePath;
    // Importa módulo fs localmente para facilitar testes e evitar falhas
    this.fs = require('fs');
  }

  canHandle(level) {
    return level === 'INFO' || level === 'WARNING';
  }

  write(message, level) {
    const line = `[ARQUIVO][${level}] ${message}\n`;
    try {
      // appendFileSync é suficiente para este exemplo simples
      this.fs.appendFileSync(this.filePath, line, { encoding: 'utf8' });
    } catch (err) {
      // Em um sistema real: tratar erro apropriadamente (retry, fallback, etc.)
      console.error('[LoggerArquivo] Erro ao escrever no arquivo:', err.message);
    }
  }
}

// Logger que simula envio de e-mail — lida com ERROR
class LoggerEmail extends Logger {
  canHandle(level) {
    return level === 'ERROR';
  }

  write(message, level) {
    // Em vez de enviar e-mail de verdade, apenas imprimimos uma mensagem
    // simulando o envio para facilitar execução local e didática.
    console.log(`[EMAIL][${level}] Simulando envio de e-mail: ${message}`);
  }
}

// Exporta as classes para uso em testes/integração
module.exports = {
  Logger,
  LoggerConsole,
  LoggerArquivo,
  LoggerEmail,
};
