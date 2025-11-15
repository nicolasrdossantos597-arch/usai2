# Projeto adaptado para Bolt.new

Este projeto foi preparado para facilitar o upload no Bolt.new.

**O que foi adicionado**
- `bolt.project.json` — metadados para o Bolt.
- `README-BOLT.md` — instruções rápidas.

**Recomendações antes de enviar ao Bolt**
1. Remova a pasta `node_modules` (se existir).
2. Faça um `npm install` ou `pnpm install` dentro do Bolt (se o Bolt suportar).
3. Caso o Bolt não aceite Next.js com App Router, converta para uma versão estática (export) ou para React/Vite.

**Scripts sugeridos no package.json**
- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`

Se quiser, eu posso:
- Converter o projeto para uma versão **estática** pronta com `next export`.
- Converter para **React + Vite** para máxima compatibilidade com Bolt.
- Remover arquivos que costumam provocar erros (ex.: `pnpm-lock.yaml`, `middleware.ts`) — eu posso fazer isso agora.

Diga qual opção prefere:
- Mantém Next.js (atual) — já preparado com `bolt.project.json`.
- Converter para export estático.
- Converter para React + Vite (mais compatível).
