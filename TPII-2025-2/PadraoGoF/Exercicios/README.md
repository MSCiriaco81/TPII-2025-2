
# Exercícios de Design Patterns

Este diretório contém exercícios práticos de aplicação dos padrões de projeto estudados. Cada arquivo implementa um ou mais padrões, com exemplos em JavaScript, Python e Java.


## Subpastas

- [P1 – Exercícios Pré-Prova](./P1/README.md): Exercícios referentes à atividade anterior à primeira prova do semestre, com exemplos de Factory, Abstract Factory, Builder, Prototype e Singleton em JavaScript.

## Descrição dos Arquivos

- **Exercicio01.java / Exercicio01.py / Exercicio01.js**
	- Exercício de Abstract Factory: Criação de veículos terrestres e aéreos usando fábricas abstratas.
	- Padrão utilizado: Abstract Factory
	- [Leia mais sobre Abstract Factory](../Criacional/AbstractFactory/README.md)

- **Pizza.java / Pizza.py / Pizza.js**
	- Exercício de Bridge: Demonstra a separação entre tipos de pizza e suas coberturas, permitindo combinações flexíveis.
	- Padrão utilizado: Bridge
	- [Leia mais sobre Bridge](../Estrutural/Bridge/README.md)

- **pizzariaCompositeAndDecorator.java / pizzariaCompositeAndDecorator.py / pizzariaCompositeAndDecorator.js**
	- Exercício de Composite e Decorator: Montagem de pizzas com ingredientes compostos e aplicação dinâmica de adicionais.
	- Padrões utilizados: Composite e Decorator
	- [Leia mais sobre Composite](../Estrutural/Composite/README.md) | [Leia mais sobre Decorator](../Estrutural/Decorator/README.md)

## Como executar

Escolha o arquivo na linguagem desejada e execute conforme abaixo:

### Java
```bash
javac NomeDoArquivo.java
java NomeDaClassePrincipal
```

### Python
```bash
python NomeDoArquivo.py
```

### JavaScript
```bash
node NomeDoArquivo.js
```

> Substitua `NomeDoArquivo` e `NomeDaClassePrincipal` pelo nome do exercício que deseja rodar.

---

Cada exercício está comentado para facilitar o entendimento dos padrões aplicados. Consulte os READMEs dos padrões para mais detalhes teóricos e exemplos adicionais.
