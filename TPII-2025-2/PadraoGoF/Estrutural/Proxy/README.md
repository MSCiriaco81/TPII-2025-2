# Proxy - Padrão de Projeto Estrutural

**Resumo:**
O Proxy é um padrão estrutural que fornece um substituto ou representante de outro objeto para controlar o acesso a ele.

---

## Explicação Detalhada
O Proxy atua como um intermediário entre o cliente e o objeto real, podendo controlar o acesso, adicionar funcionalidades ou otimizar recursos. Existem vários tipos de proxy: virtual, de proteção, remoto, entre outros.

### Vantagens
- Controla o acesso a objetos sensíveis ou custosos.
- Permite adicionar funcionalidades sem alterar o objeto real.
- Pode otimizar recursos (ex: carregamento sob demanda).

### Desvantagens
- Pode adicionar complexidade e latência.
- O cliente pode depender do proxy em vez do objeto real.

### Quando Usar
- Quando é necessário controlar ou monitorar o acesso a um objeto.
- Quando se deseja adicionar funcionalidades sem modificar o objeto real.

---

## Exemplo
(Será adicionado mais tarde)

## Referências
- [Refactoring Guru - Proxy](https://refactoring.guru/pt-br/design-patterns/proxy)
