// Projeto 03 — Validação de Formulário com Chain of Responsibility (JavaScript)
// Implementação didática com comentários em português.

// Classe base para validadores
class Validador {
  constructor() {
    this.proximo = null;
  }

  // Define o próximo validador na cadeia
  setProximo(proximo) {
    this.proximo = proximo;
    return proximo;
  }

  // Método que inicia o processamento na cadeia. Retorna um objeto {ok: boolean, message?: string}
  handle(dadosFormulario) {
    const resultado = this.validar(dadosFormulario);
    if (!resultado.ok) {
      // Interrompe a cadeia retornando o erro
      return resultado;
    }

    // Se ok e houver próximo, encaminha
    if (this.proximo) {
      return this.proximo.handle(dadosFormulario);
    }

    // Se ok e sem próximo, retorna sucesso
    return { ok: true };
  }

  // Subclasses devem implementar validar
  validar(dadosFormulario) {
    throw new Error('Método validar deve ser implementado');
  }
}

// Validador de Email
class ValidadorEmail extends Validador {
  validar(dados) {
    const email = (dados.email || '').trim();
    // Regex simples para validar formato básico de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return { ok: false, message: 'Email é obrigatório.' };
    }
    if (!regex.test(email)) {
      return { ok: false, message: 'Formato de email inválido.' };
    }
    return { ok: true };
  }
}

// Validador de Senha (complexidade mínima)
class ValidadorSenha extends Validador {
  constructor({minLength = 8, requireNumber = true, requireUppercase = true} = {}) {
    super();
    this.minLength = minLength;
    this.requireNumber = requireNumber;
    this.requireUppercase = requireUppercase;
  }

  validar(dados) {
    const senha = dados.senha || '';
    if (!senha) {
      return { ok: false, message: 'Senha é obrigatória.' };
    }
    if (senha.length < this.minLength) {
      return { ok: false, message: `Senha deve ter ao menos ${this.minLength} caracteres.` };
    }
    if (this.requireNumber && !/[0-9]/.test(senha)) {
      return { ok: false, message: 'Senha deve conter ao menos um número.' };
    }
    if (this.requireUppercase && !/[A-Z]/.test(senha)) {
      return { ok: false, message: 'Senha deve conter ao menos uma letra maiúscula.' };
    }
    return { ok: true };
  }
}

// Validador de Username (verifica unicidade em uma lista simulada)
class ValidadorUsername extends Validador {
  // existingUsernames: array com usernames já em uso (simulação)
  constructor(existingUsernames = []) {
    super();
    this.existingUsernames = existingUsernames.map(u => u.toLowerCase());
  }

  validar(dados) {
    const username = (dados.username || '').trim();
    if (!username) {
      return { ok: false, message: 'Nome de usuário é obrigatório.' };
    }
    // Simula verificação de unicidade
    if (this.existingUsernames.includes(username.toLowerCase())) {
      return { ok: false, message: 'Nome de usuário já está em uso.' };
    }
    return { ok: true };
  }
}

// Exporta os validadores
module.exports = {
  Validador,
  ValidadorEmail,
  ValidadorSenha,
  ValidadorUsername,
};
