# Builder - Padrão de Projeto Criacional

**Resumo:**
O Builder é um padrão criacional que separa a construção de um objeto complexo da sua representação, permitindo criar diferentes representações usando o mesmo processo de construção.

---

## Explicação Detalhada
O Builder é útil quando a criação de um objeto envolve muitos passos ou parâmetros opcionais. Ele encapsula a lógica de construção em um objeto separado (o builder), tornando o código mais legível e flexível.

### Vantagens
- Permite criar objetos complexos passo a passo.
- O mesmo processo de construção pode criar diferentes representações.
- Facilita a leitura e manutenção do código.

### Desvantagens
- Pode aumentar o número de classes no projeto.
- A implementação pode ser mais complexa para objetos simples.

### Quando Usar
- Quando a criação de um objeto envolve muitos passos ou parâmetros opcionais.
- Quando diferentes representações de um objeto precisam ser criadas.

---

## Exemplos
- Builder01.java: Exemplo de montagem de carros com diferentes configurações.
- Builder02.java: Exemplo de montagem de pizzas com diferentes ingredientes.

## Como executar

### Java
```bash
javac Builder01.java
javac Builder02.java
java MainBuilderCarro
java MainBuilderPizza
```

### Python
```bash
python Builder01.py
python Builder02.py
```

### JavaScript
```bash
node Builder01.js
node Builder02.js
```

## Referências
- [Documentação Oracle - Builder](https://docs.oracle.com/javase/tutorial/java/concepts/builder.html)
- [Refactoring Guru - Builder](https://refactoring.guru/pt-br/design-patterns/builder)
