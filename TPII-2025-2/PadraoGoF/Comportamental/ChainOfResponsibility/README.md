# Chain of Responsibility - Padrão de Projeto Comportamental

**Resumo:**
O Chain of Responsibility é um padrão comportamental que permite que vários objetos tenham a chance de tratar uma solicitação, passando-a ao longo da cadeia até que um objeto a trate.

---

## Explicação Detalhada
No Chain of Responsibility, cada objeto da cadeia decide se processa a solicitação ou a passa adiante. Isso desacopla o remetente do receptor e permite flexibilidade na atribuição de responsabilidades.

### Vantagens
- Desacopla o remetente do receptor.
- Permite adicionar ou remover manipuladores facilmente.
- Facilita a extensão da cadeia de tratamento.

### Desvantagens
- Pode ser difícil rastrear o fluxo da solicitação.
- Não garante que a solicitação será tratada.

### Quando Usar
- Quando múltiplos objetos podem tratar uma solicitação.
- Quando o remetente não precisa saber quem irá tratar a solicitação.

---

## Exemplo
(Será adicionado mais tarde)

## Como executar

### Java
```bash
# Compile e execute os exemplos Java desta pasta
```

### Python
```bash
# Execute os exemplos Python desta pasta
```

### JavaScript
```bash
# Execute os exemplos JavaScript desta pasta (ex.: node Chain02.js)
```

## Exercício prático deste padrão

Consulte os exemplos relacionados na pasta `Exercicios` do repositório, incluindo `Projeto01_Logs_JS` e `Projeto02_Pagamento_JS` que demonstram variações do padrão.

## Referências
- [Refactoring Guru - Chain of Responsibility](https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility) 
