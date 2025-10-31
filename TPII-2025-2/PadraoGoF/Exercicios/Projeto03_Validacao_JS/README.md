# Projeto 03 — Validação de Formulário com Chain of Responsibility

Exemplo em JavaScript demonstrando validação de formulário com o padrão Chain of Responsibility.

Validadores implementados:
- `ValidadorUsername`: verifica se o nome de usuário não está em uma lista simulada de existentes (verifica unicidade, case-insensitive).
- `ValidadorEmail`: verifica formato básico de email.
- `ValidadorSenha`: verifica requisitos mínimos (tamanho, presença de número e letra maiúscula).

Estrutura dos arquivos:
- `validator.js` — implementações dos validadores.
- `test_validator.js` — script de testes com vários cenários.

Como executar:

```powershell
cd "c:/Users/shalo/Documents/faculdade/segundo semestre/TPII-2025-2/PadraoGoF/Exercicios/Projeto03_Validacao_JS"
node test_validator.js
```

Comportamento esperado:
- A cadeia é configurada como: Username -> Email -> Senha.
- Ao encontrar uma falha, a cadeia é interrompida e a mensagem de erro é retornada/impresa.

Testes incluídos:
- Teste 1: todos os campos válidos (deve passar).
- Teste 2: email inválido (deve falhar no validador de email).
- Teste 3: senhas fracas (vários subcasos explorados).
- Teste 5: username duplicado (verificação case-insensitive).
