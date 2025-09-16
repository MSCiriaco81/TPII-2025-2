# Padrões Criacionais

Os padrões criacionais do GoF lidam com a forma de criação de objetos, abstraindo a complexidade do processo e permitindo maior flexibilidade e reutilização de código.

Neste diretório você encontrará as implementações e explicações dos seguintes padrões:

---

## Abstract Factory

O padrão **Abstract Factory** fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

- **Objetivo:** Permitir a criação de objetos que pertencem a famílias específicas, garantindo que objetos compatíveis sejam usados juntos.
- **Quando usar:** Quando o sistema precisa ser independente da forma como seus produtos são criados, compostos e representados.
- **Exemplo:** Interfaces gráficas para diferentes sistemas operacionais (Windows, macOS, Linux), onde cada "família" de componentes é diferente.

---

## Builder

O padrão **Builder** separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações.

- **Objetivo:** Construir objetos complexos passo a passo, com diferentes configurações.
- **Quando usar:** Quando a criação do objeto requer vários passos e configurações, e o processo de construção deve ser separado da representação final.
- **Exemplo:** Construção de um carro, onde diferentes componentes são configurados antes da montagem final.

---

## Factory Method

O padrão **Factory Method** define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe instanciar.

- **Objetivo:** Delegar a criação do objeto para subclasses, tornando o código mais flexível e extensível.
- **Quando usar:** Quando uma classe não pode antecipar o tipo de objetos que precisa criar ou quer permitir que subclasses especifiquem os objetos.
- **Exemplo:** Sistema de criação de documentos (PDF, Word, TXT) onde cada documento é criado pela sua respectiva fábrica.

---

## Prototype

O padrão **Prototype** permite copiar objetos existentes sem depender de suas classes concretas.

- **Objetivo:** Criar novos objetos duplicando um protótipo, evitando a criação do objeto do zero.
- **Quando usar:** Quando o custo de criação de um objeto é alto ou complexo, e a cópia de um objeto existente é mais eficiente.
- **Exemplo:** Clonagem de objetos gráficos complexos em uma aplicação.

---

## Singleton

O padrão **Singleton** garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

- **Objetivo:** Controlar o acesso a um recurso único e garantir que não existam múltiplas instâncias.
- **Quando usar:** Quando é necessário garantir uma única instância de uma classe, como em gerenciadores de configuração, conexão com banco de dados, logs, etc.
- **Exemplo:** Gerenciador de configuração da aplicação.

---

## Como usar este diretório

Cada subpasta contém a implementação e exemplos do padrão correspondente. Sinta-se livre para explorar, testar e contribuir com melhorias ou novos exemplos.

---

## Contribuições

Contribuições são bem-vindas! Você pode abrir issues para dúvidas, sugestões ou pull requests para adicionar mais explicações e exemplos.

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
