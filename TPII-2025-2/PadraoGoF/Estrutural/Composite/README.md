
---


# Composite - Padrão de Projeto Estrutural

**Resumo:**
O Composite é um padrão estrutural que permite compor objetos em estruturas de árvore para representar hierarquias parte-todo.

---

## Explicação Detalhada
O Composite permite tratar objetos individuais e composições de objetos de maneira uniforme. Ele é útil para representar estruturas hierárquicas, como menus, pastas e arquivos, ou componentes gráficos.

### Vantagens
- Permite tratar objetos individuais e composições de forma uniforme.
- Facilita a adição de novos tipos de componentes.
- Simplifica o código cliente.

### Desvantagens
- Pode tornar o design mais complexo devido à recursividade.
- Pode ser difícil restringir tipos de componentes em composições.

### Quando Usar
- Quando objetos devem ser compostos em estruturas de árvore.
- Quando clientes devem tratar objetos individuais e composições de maneira uniforme.

---

## Como executar

### Java
```bash
javac Composite01.java
java MainComposite
```

### Python
```bash
python Composite01.py
```

### JavaScript
```bash
node Composite01.js
```

## Exercício prático deste padrão

> Exemplos completos de Composite (e Decorator):
> - [pizzariaCompositeAndDecorator.js (JavaScript)](../../Exercicios/pizzariaCompositeAndDecorator.js)
> - [pizzariaCompositeAndDecorator.py (Python)](../../Exercicios/pizzariaCompositeAndDecorator.py)
> - [pizzariaCompositeAndDecorator.java (Java)](../../Exercicios/pizzariaCompositeAndDecorator.java)

## Referências
- [Refactoring Guru - Composite](https://refactoring.guru/pt-br/design-patterns/composite)
