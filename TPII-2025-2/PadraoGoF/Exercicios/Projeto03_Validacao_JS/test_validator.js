// Script de teste para os validadores (executar com Node)
const path = require('path');
const { ValidadorEmail, ValidadorSenha, ValidadorUsername } = require('./validator');

function construirCadeia(existingUsernames = []){
  // Ordem da cadeia: Username -> Email -> Senha (interrompe no primeiro erro)
  const valUsername = new ValidadorUsername(existingUsernames);
  const valEmail = new ValidadorEmail();
  const valSenha = new ValidadorSenha({ minLength: 8, requireNumber: true, requireUppercase: true });

  valUsername.setProximo(valEmail).setProximo(valSenha);
  return valUsername; // primeiro elo
}

function executarTeste(nomeTeste, dados, existingUsernames = []){
  console.log(`\n=== ${nomeTeste} ===`);
  const cadeia = construirCadeia(existingUsernames);
  const resultado = cadeia.handle(dados);
  if(resultado.ok){
    console.log('[OK] Validação bem-sucedida.');
  } else {
    console.log(`[ERRO] ${resultado.message}`);
  }
}

// Casos de teste
const existing = ['admin', 'user1', 'teste'];

// 1) Todos válidos
executarTeste('Teste 1 - Todos válidos', {
  username: 'novoUsuario',
  email: 'novo.usuario@example.com',
  senha: 'SenhaSegura1'
}, existing);

// 2) Email inválido
executarTeste('Teste 2 - Email inválido', {
  username: 'outroUsuario',
  email: 'email-invalido',
  senha: 'SenhaSegura1'
}, existing);

// 3) Senha fraca (sem número / sem maiúscula / curta)
executarTeste('Teste 3 - Senha sem número', {
  username: 'usuario3',
  email: 'u3@example.com',
  senha: 'SenhaSemNumero'
}, existing);

executarTeste('Teste 4 - Senha curta', {
  username: 'usuario4',
  email: 'u4@example.com',
  senha: 'A1b'
}, existing);

// 4) Username duplicado
executarTeste('Teste 5 - Username duplicado', {
  username: 'Admin', // caso-insensitivo
  email: 'admin2@example.com',
  senha: 'SenhaSegura1'
}, existing);

console.log('\nTodos os testes executados.');
