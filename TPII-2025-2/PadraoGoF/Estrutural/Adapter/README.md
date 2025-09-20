# Adapter - Padrão de Projeto Estrutural

**Resumo:**
O Adapter é um padrão estrutural que permite que interfaces incompatíveis trabalhem juntas, funcionando como um tradutor entre elas.

---

## Explicação Detalhada
O Adapter converte a interface de uma classe em outra interface esperada pelos clientes. Ele permite que classes com interfaces incompatíveis colaborem sem modificar seu código-fonte. Pode ser implementado por herança (classe adapter) ou composição (objeto adapter).

### Vantagens
- Permite a reutilização de código legado sem alterações.
- Facilita a integração de sistemas com interfaces diferentes.
- Segue o princípio aberto/fechado.

### Desvantagens
- Pode aumentar a complexidade do sistema.
- O uso excessivo pode mascarar problemas de design.

### Quando Usar
- Quando você deseja usar uma classe existente, mas sua interface não é compatível com o restante do sistema.
- Quando deseja integrar sistemas de terceiros sem modificar seu código.

---

## Exemplo
- Adapter01.java: Exemplo de adaptação de interface para integração de sistemas.

## Como executar

### Java
```bash
javac Adapter01.java
java MainAdapter
```

### Python
```bash
python Adapter01.py
```

### JavaScript
```bash
node Adapter01.js
```

## Referências
- [Refactoring Guru - Adapter](https://refactoring.guru/pt-br/design-patterns/adapter)
