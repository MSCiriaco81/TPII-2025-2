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

## Referências
- [Refactoring Guru - Chain of Responsibility](https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility)
