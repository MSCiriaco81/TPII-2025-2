# Factory Method - Padrão de Projeto Criacional

**Resumo:**
O Factory Method é um padrão criacional que define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe instanciar.

---

## Explicação Detalhada
O Factory Method delega a responsabilidade de instanciar objetos para subclasses, promovendo o baixo acoplamento e facilitando a extensão do sistema. Cada subclasse implementa o método de fábrica para criar um tipo específico de produto.

### Vantagens
- Facilita a extensão do sistema com novos tipos de produtos.
- Reduz o acoplamento entre o código cliente e as classes concretas dos produtos.
- Segue o princípio aberto/fechado.

### Desvantagens
- Pode aumentar o número de classes no projeto.
- O código pode ficar mais complexo devido à necessidade de subclasses para cada tipo de produto.

### Quando Usar
- Quando uma classe não sabe de antemão qual classe de objetos deve criar.
- Quando subclasses precisam especificar os objetos que serão criados.
- Quando se deseja delegar a criação de objetos para subclasses.

---

## Exemplos
- FactoryMethod01.java: Exemplo de criação de veículos (carro, moto, caminhão).
- FactoryMethod02.java: Exemplo de criação de pessoas com diferentes cargos.

## Como executar

### Java
```bash
javac FactoryMethod01.java
javac FactoryMethod02.java
java MainFactoryMethodVeiculo
java MainFactoryMethodPessoa
```

### Python
```bash
python FactoryMethod01.py
python FactoryMethod02.py
```

### JavaScript
```bash
node FactoryMethod01.js
node FactoryMethod02.js
```

## Referências
- [Refactoring Guru - Factory Method](https://refactoring.guru/pt-br/design-patterns/factory-method)
