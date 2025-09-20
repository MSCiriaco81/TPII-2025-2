# Observer - Padrão de Projeto Comportamental

**Resumo:**
O Observer é um padrão comportamental que define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

---

## Explicação Detalhada
O Observer é útil para implementar sistemas de eventos, notificações e assinaturas. Ele desacopla o objeto que emite o evento dos objetos que reagem a ele.

### Vantagens
- Desacopla o emissor do receptor.
- Facilita a implementação de sistemas reativos.
- Permite múltiplos observadores para um mesmo objeto.

### Desvantagens
- Pode ser difícil rastrear notificações em sistemas grandes.
- Pode causar problemas de performance com muitos observadores.

### Quando Usar
- Quando múltiplos objetos precisam reagir a mudanças em outro objeto.
- Quando se deseja implementar sistemas de eventos ou notificações.

---

## Exemplo
(Será adicionado mais tarde)

## Referências
- [Refactoring Guru - Observer](https://refactoring.guru/pt-br/design-patterns/observer)
