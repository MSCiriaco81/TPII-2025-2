# Command - Padrão de Projeto Comportamental

**Resumo:**
O Command é um padrão comportamental que encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou registrar solicitações e suportar operações que podem ser desfeitas.

---

## Explicação Detalhada
O Command desacopla o objeto que invoca a operação daquele que a executa. Ele permite implementar filas de comandos, operações de desfazer/refazer e macros.

### Vantagens
- Desacopla o remetente do executor da ação.
- Permite implementar operações de desfazer/refazer.
- Facilita a criação de comandos compostos (macros).

### Desvantagens
- Pode aumentar o número de classes no sistema.
- Pode adicionar complexidade desnecessária para comandos simples.

### Quando Usar
- Quando se deseja parametrizar objetos com operações.
- Quando operações precisam ser enfileiradas, desfeitas ou refeitas.

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
# Execute os exemplos JavaScript desta pasta (ex.: node Command01.js)
```

## Exercício prático deste padrão

Consulte a pasta `Exercicios` para exemplos que exploram comandos e operações.

## Referências
- [Refactoring Guru - Command](https://refactoring.guru/pt-br/design-patterns/command) 
