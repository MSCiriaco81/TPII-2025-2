# Decorator - Padrão de Projeto Estrutural

**Resumo:**
O Decorator é um padrão estrutural que permite adicionar funcionalidades a objetos de forma dinâmica, sem alterar sua estrutura original.

---

## Explicação Detalhada
O Decorator envolve um objeto original com um novo objeto que adiciona funcionalidades extras, mantendo a interface original. Isso permite estender o comportamento de objetos de forma flexível e reutilizável, sem recorrer a herança.

### Vantagens
- Permite adicionar funcionalidades de forma dinâmica e flexível.
- Evita a explosão de subclasses.
- Segue o princípio aberto/fechado.

### Desvantagens
- Pode tornar o sistema mais complexo devido ao grande número de objetos decoradores.
- A ordem dos decoradores pode afetar o resultado final.

### Quando Usar
- Quando se deseja adicionar responsabilidades a objetos de forma dinâmica.
- Quando a herança não é viável ou desejada.

---

## Exemplo
- Decorator01.java: Exemplo de notificação com camadas de decoradores (SMS, Whatsapp, Email).
- Decorator01.py: Versão Python do exemplo de notificação.
- Decorator01.js: Versão JavaScript do exemplo de notificação.

## Como executar

### Java
```bash
javac Decorator01.java
java MainDecorator
```

### Python
```bash
python Decorator01.py
```

### JavaScript
```bash
node Decorator01.js
```

## Referências
- [Refactoring Guru - Decorator](https://refactoring.guru/pt-br/design-patterns/decorator)
