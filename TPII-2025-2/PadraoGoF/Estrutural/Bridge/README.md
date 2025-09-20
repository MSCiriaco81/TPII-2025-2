# Bridge - Padrão de Projeto Estrutural

**Resumo:**
O Bridge é um padrão estrutural que separa a abstração da implementação, permitindo que ambos evoluam independentemente.

---

## Explicação Detalhada
O Bridge desacopla uma abstração de sua implementação, permitindo que as duas variações sejam desenvolvidas separadamente. Ele é útil quando há múltiplas dimensões de variação em um sistema, como formas e cores, e evita a explosão de subclasses.

### Vantagens
- Reduz o acoplamento entre abstração e implementação.
- Facilita a extensão independente de abstrações e implementações.
- Evita a explosão de subclasses.

### Desvantagens
- Pode aumentar a complexidade do código.
- Exige planejamento para identificar as dimensões de variação.

### Quando Usar
- Quando há múltiplas dimensões de variação em um sistema.
- Quando se deseja evitar a criação de muitas subclasses para cada combinação possível.

---

## Exemplo
- Bridge01.java: Exemplo de formas (círculo, quadrado) com diferentes cores.

## Como executar

### Java
```bash
javac Bridge01.java
java MainBridge
```

### Python
```bash
python Bridge01.py
```

### JavaScript
```bash
node Bridge01.js
```

## Referências
- [Refactoring Guru - Bridge](https://refactoring.guru/pt-br/design-patterns/bridge)
