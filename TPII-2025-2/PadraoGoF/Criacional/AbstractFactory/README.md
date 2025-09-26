
---


# Abstract Factory - Padrão de Projeto Criacional

**Resumo:**
O Abstract Factory é um padrão criacional que fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

---

## Explicação Detalhada
O Abstract Factory é utilizado quando o sistema precisa ser independente de como seus objetos são criados, compostos e representados. Ele permite que você produza famílias de objetos relacionados (por exemplo, botões e caixas de seleção de um mesmo tema visual) sem acoplar o código às classes concretas desses objetos.

### Vantagens
- Garante a compatibilidade entre produtos de uma mesma família.
- Facilita a troca de famílias de produtos sem alterar o código cliente.
- Segue o princípio da inversão de dependência.

### Desvantagens
- Pode aumentar a complexidade do código devido à criação de múltiplas interfaces e classes.
- Dificulta a adição de novos tipos de produtos à família.

### Quando Usar
- Quando o sistema deve ser configurado com uma das várias famílias de produtos.
- Quando se deseja garantir que produtos de uma família sejam usados juntos.
- Quando se quer fornecer uma biblioteca de classes de produtos, revelando apenas suas interfaces.

---

## Como executar

### Java
```bash
javac AbstractFactory01.java
javac AbstractFactory02.java
javac Exercicio01.java
java MainAbstractFactory
```

### Python
```bash
python AbstractFactory01.py
python AbstractFactory02.py
```

### JavaScript
```bash
node AbstractFactory01.js
node AbstractFactory02.js
node Exercicio01.js
```

## Exercício prático deste padrão

> Exemplos completos de Abstract Factory:
> - [Exercicio01.js (JavaScript)](../../Exercicios/Exercicio01.js)
> - [Exercicio01.py (Python)](../../Exercicios/Exercicio01.py)
> - [Exercicio01.java (Java)](../../Exercicios/Exercicio01.java)

## Referências
- [Refactoring Guru - Abstract Factory](https://refactoring.guru/pt-br/design-patterns/abstract-factory)
node Exercicio01.js
```

## Referências
- [Refactoring Guru - Abstract Factory](https://refactoring.guru/pt-br/design-patterns/abstract-factory)
