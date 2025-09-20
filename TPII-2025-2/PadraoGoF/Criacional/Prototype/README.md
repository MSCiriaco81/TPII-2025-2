# Prototype - Padrão de Projeto Criacional

**Resumo:**
O Prototype é um padrão criacional que permite criar novos objetos a partir de um protótipo, clonando instâncias já existentes em vez de criar do zero.

---

## Explicação Detalhada
O Prototype é útil quando a criação de um objeto é custosa ou complexa. Em vez de instanciar um novo objeto, você clona um protótipo já existente, podendo modificar apenas o necessário. Isso é especialmente útil para objetos que possuem muitos atributos ou dependências.

### Vantagens
- Reduz o custo de criação de objetos complexos.
- Permite clonar objetos sem acoplar o código às classes concretas.
- Facilita a criação de cópias personalizadas.

### Desvantagens
- Pode ser difícil implementar a clonagem profunda em objetos complexos.
- Requer atenção para não compartilhar referências indesejadas entre clones.

### Quando Usar
- Quando a criação de um objeto é custosa ou complexa.
- Quando se deseja evitar a criação de subclasses apenas para variar a configuração de um objeto.
- Quando objetos semelhantes precisam ser criados frequentemente.

---

## Exemplo
- Prototype01.java: Exemplo de clonagem de objetos Pessoa.

## Como executar

### Java
```bash
javac Prototype01.java
java MainPrototypePessoa
```

### Python
```bash
python Prototype01.py
```

### JavaScript
```bash
node Prototype01.js
```

## Referências
- [Refactoring Guru - Prototype](https://refactoring.guru/pt-br/design-patterns/prototype)
