# Projeto 02 — Extensão do Sistema de Processamento de Pagamento

Objetivo: inserir uma nova etapa `EtapaDeteccaoFraude` entre `EtapaAutenticacao` e `EtapaConfirmacao`.

Arquivos:
- `payment_chain.js` — implementação e testes rápidos.

Como executar:

```powershell
cd "c:/Users/shalo/Documents/faculdade/segundo semestre/TPII-2025-2/PadraoGoF/Exercicios/Projeto02_Pagamento_JS"
node payment_chain.js
```

Comportamento esperado:
- Teste 1 (sem fraude): fluxo completo — conexão, validação, envio, autenticação, detecção de fraude (OK), confirmação.
- Teste 2 (com fraude): etapa de detecção de fraude detecta fraude e bloqueia o processo (não chama confirmação).

Observações:
- A detecção de fraude é simulada via a propriedade `pagamento.possuiFraude` para manter o exemplo simples.
- Em produção, essa etapa chamaria serviços de prevenção de fraude e aplicaria regras mais sofisticadas.
