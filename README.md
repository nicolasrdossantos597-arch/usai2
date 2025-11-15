# UAI Sistemas - Sistema Completo de Gestão

Sistema completo desenvolvido para a UAI Sistemas, incluindo site institucional, área do cliente com chat de suporte em tempo real, e painel administrativo.

## Funcionalidades Principais

### Site Institucional
- Landing page moderna e responsiva
- Seção de serviços com detalhes completos
- Formulário de contato integrado
- Design profissional com paleta azul/ciano

### Autenticação
- Sistema completo de login e cadastro
- Autenticação via Supabase Auth
- Perfis de usuário (cliente e admin)
- Proteção de rotas com middleware

### Área do Cliente
- Dashboard com estatísticas e overview
- Visualização de serviços contratados
- Sistema de tickets de suporte
- Chat em tempo real com a equipe de suporte
- Configurações de perfil

### Painel Administrativo
- Dashboard com métricas do sistema
- Gestão completa de clientes
- Gerenciamento de tickets
- Chat em tempo real com clientes
- Visualização de mensagens de contato
- Atualização de status de tickets

### Sistema de Suporte
- Criação de tickets por clientes
- Chat em tempo real usando Supabase Realtime
- Priorização de tickets (baixa, média, alta, urgente)
- Estados de ticket (aberto, em andamento, resolvido, fechado)
- Histórico completo de mensagens

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **Supabase** - Backend as a Service
  - Autenticação
  - Banco de dados PostgreSQL
  - Realtime (WebSocket)
  - Row Level Security (RLS)
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **shadcn/ui** - Componentes UI

## Estrutura do Banco de Dados

- **profiles** - Dados dos usuários (clientes e admins)
- **tickets** - Chamados de suporte
- **messages** - Mensagens do chat em tempo real
- **services** - Serviços oferecidos
- **client_services** - Serviços contratados por clientes
- **contact_submissions** - Mensagens do formulário de contato

## Segurança

- Row Level Security (RLS) em todas as tabelas
- Políticas de acesso baseadas em roles
- Middleware de autenticação
- Validação de permissões nas APIs
- Proteção de rotas administrativas

## Como Usar

1. Execute os scripts SQL na ordem para criar o schema do banco
2. Configure as variáveis de ambiente do Supabase
3. Faça login ou crie uma conta
4. Clientes acessam `/dashboard`
5. Admins acessam `/admin`

## Rotas Principais

### Públicas
- `/` - Landing page
- `/login` - Login
- `/cadastro` - Cadastro

### Cliente
- `/dashboard` - Dashboard do cliente
- `/dashboard/suporte` - Lista de tickets
- `/dashboard/suporte/novo` - Criar ticket
- `/dashboard/suporte/[id]` - Chat do ticket
- `/dashboard/configuracoes` - Configurações

### Admin
- `/admin` - Dashboard administrativo
- `/admin/clientes` - Gestão de clientes
- `/admin/tickets` - Gestão de tickets
- `/admin/tickets/[id]` - Chat administrativo
- `/admin/contatos` - Mensagens de contato
- `/admin/servicos` - Gestão de serviços

## Próximos Passos

O sistema está completo e funcional. Possíveis melhorias futuras:
- Sistema de notificações por email
- Upload de arquivos no chat
- Relatórios e analytics
- Sistema de avaliação de atendimento
- Integração com WhatsApp
