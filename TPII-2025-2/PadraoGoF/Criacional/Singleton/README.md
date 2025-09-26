
---


# Singleton - Padrão de Projeto Criacional

**Resumo:**
O Singleton é um padrão criacional que garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

---

## Explicação Detalhada
O Singleton é utilizado para controlar o acesso a recursos compartilhados, como conexões com banco de dados ou arquivos de configuração. Ele impede que múltiplas instâncias de uma mesma classe sejam criadas, centralizando o controle em um único objeto.

### Vantagens
- Garante uma única instância global.
- Facilita o controle de acesso a recursos compartilhados.
- Pode ser implementado com inicialização preguiçosa (lazy loading).

### Desvantagens
- Pode dificultar testes unitários devido ao estado global.
- Pode introduzir problemas de concorrência se não for implementado corretamente.

### Quando Usar
- Quando é necessário garantir uma única instância de uma classe.
- Quando o acesso global a um recurso é necessário.

---

## Como executar

### Java
```bash
javac Singleton01.java
javac Singleton02.java
java MainSingleton01
java MainSingleton02
```

### Python
```bash
python Singleton01.py
python Singleton02.py
```

### JavaScript
```bash
node Singleton01.js
node Singleton02.js
```

## Exercício prático deste padrão

> Exemplos completos de Singleton:
> - [Singleton01.js (JavaScript)](./Singleton01.js)
> - [Singleton01.py (Python)](./Singleton01.py)
> - [Singleton01.java (Java)](./Singleton01.java)

## Referências
- [Documentação Oracle - Singleton](https://docs.oracle.com/javase/tutorial/java/concepts/singleton.html)
- [Refactoring Guru - Singleton](https://refactoring.guru/pt-br/design-patterns/singleton)

## Referências
- [Documentação Oracle - Singleton](https://docs.oracle.com/javase/tutorial/java/concepts/singleton.html)
- [Refactoring Guru - Singleton](https://refactoring.guru/pt-br/design-patterns/singleton)
```

## Referências
- [Documentação Oracle - Singleton](https://docs.oracle.com/javase/tutorial/java/concepts/singleton.html)
- [Refactoring Guru - Singleton](https://refactoring.guru/pt-br/design-patterns/singleton)
