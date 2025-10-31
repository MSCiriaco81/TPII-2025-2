# Projeto 01 — Sistema de Logs (Chain of Responsibility)

Implementação didática em JavaScript do padrão Chain of Responsibility para um
sistema de logging simples.

Arquivos:
- `logger.js` — implementação das classes `LoggerConsole`, `LoggerArquivo`, `LoggerEmail`.
- `test_logger.js` — script de teste que configura a cadeia e envia logs.
- `logs_app.txt` — arquivo de logs gerado pelo `LoggerArquivo` (criado na primeira execução).

Como executar:

1. Abra um terminal na pasta do projeto (ou use o caminho completo):

```powershell
cd "c:/Users/shalo/Documents/faculdade/segundo semestre/TPII-2025-2/PadraoGoF/Exercicios/Projeto01_Logs_JS"
node test_logger.js
```

Comportamento esperado:
- Log INFO: processado por `LoggerConsole` (imprime no console) e por `LoggerArquivo` (grava em `logs_app.txt`).
- Log WARNING: processado por `LoggerArquivo` (grava em `logs_app.txt`) apenas.
- Log ERROR: processado por `LoggerEmail` (simulado via console).

Observações:
- O envio de e-mail é apenas simulado para manter o exemplo simples e autocontido.
- Em um sistema real, `LoggerArquivo` deveria ter handling de erros, rotação de logs, etc.
