# Arquitetura do MVP

## Objetivo

Construir um MVP simples para gestao de um congresso academico pequeno, com foco em entrega rapida, baixa manutencao e evolucao incremental.

O sistema deve atender inicialmente a um unico evento, sem tentar virar uma plataforma generica de eventos.

## Stack

* Next.js App Router
* TypeScript
* TailwindCSS
* Mock data no inicio
* Supabase futuramente
* Deploy na Vercel

Fora do MVP inicial:

* autenticacao
* pagamentos
* webhooks
* RBAC
* certificados
* fluxos administrativos complexos

## Principios de arquitetura

* Preferir simplicidade sobre flexibilidade prematura.
* Usar Server Components por padrao.
* Usar Client Components apenas para formularios, filtros, tabs, interacoes locais e estados de UI.
* Manter fluxo de dados direto.
* Evitar repository pattern, Clean Architecture, Zustand, Redux e camadas genericas.
* Manter pastas rasas e nomes obvios.
* Separar dados mockados, tipos e funcoes simples de acesso para facilitar a troca por Supabase depois.

## Estrutura de pastas

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  evento/
    page.tsx
  programacao/
    page.tsx
  palestrantes/
    page.tsx
  inscricao/
    page.tsx
  submissao/
    page.tsx
  admin/
    page.tsx
    inscritos/
      page.tsx
    trabalhos/
      page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
    Container.tsx
    PageHeader.tsx
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
    Select.tsx
    Textarea.tsx
    EmptyState.tsx
  event/
    EventHero.tsx
    EventInfoGrid.tsx
    ScheduleList.tsx
    SpeakerCard.tsx
    RegistrationForm.tsx
    SubmissionForm.tsx
  admin/
    AdminStatCard.tsx
    AdminTable.tsx
    RegistrationStatusBadge.tsx
    SubmissionStatusBadge.tsx

lib/
  constants.ts
  formatters.ts
  validators.ts

mock/
  event.ts
  schedule.ts
  speakers.ts
  registrations.ts
  submissions.ts

services/
  event-service.ts
  registration-service.ts
  submission-service.ts

types/
  event.ts
  registration.ts
  submission.ts
```

## Responsabilidade das pastas

`app/`

Contem rotas, layouts e composicao das paginas. As paginas devem buscar dados simples nos services e montar componentes visuais. Evitar logica pesada aqui.

`components/`

Componentes reutilizaveis e pequenos. Dividir por uso real, nao por arquitetura teorica.

`components/ui/`

Elementos basicos de interface. Devem ser simples, estilizados com TailwindCSS e sem dependencia de regra de negocio.

`components/event/`

Componentes especificos da experiencia publica do evento.

`components/admin/`

Componentes especificos do painel administrativo simples.

`mock/`

Dados estaticos usados no MVP antes do Supabase. Devem seguir os mesmos tipos definidos em `types/`.

`services/`

Funcoes simples para ler dados mockados e simular persistencia quando necessario. No futuro, estas funcoes podem chamar Supabase sem alterar todas as paginas.

`types/`

Tipos centrais do dominio. Manter poucos arquivos e nomes claros.

`lib/`

Funcoes utilitarias pequenas: formatacao de data, validacoes simples, constantes do evento.

## Paginas iniciais

### `/`

Landing page do evento.

Conteudo sugerido:

* nome do congresso
* data e local
* chamada principal
* botoes para inscricao e submissao
* resumo do evento
* destaques da programacao
* palestrantes em destaque
* informacoes praticas

### `/evento`

Pagina institucional com detalhes do congresso.

Conteudo sugerido:

* objetivo do evento
* publico-alvo
* organizacao
* local
* datas importantes

### `/programacao`

Agenda do evento.

Conteudo sugerido:

* lista por dia
* horario
* titulo da atividade
* tipo da atividade
* palestrante ou responsavel
* local ou sala

### `/palestrantes`

Lista de palestrantes e convidados.

Conteudo sugerido:

* foto opcional
* nome
* instituicao
* mini bio
* tema da palestra

### `/inscricao`

Formulario publico de inscricao.

Campos iniciais:

* nome completo
* email
* telefone
* instituicao
* categoria
* necessidade especial ou observacao

No MVP, pode usar fake persistence em local state, localStorage ou mock em memoria durante a sessao. Ao integrar Supabase, salvar em tabela `registrations`.

### `/submissao`

Formulario publico para submissao de trabalhos.

Campos iniciais:

* titulo
* resumo
* area tematica
* autores
* autor responsavel
* email do responsavel
* arquivo opcional em etapa futura

No MVP, evitar upload real se isso atrasar a entrega. O upload pode entrar depois com Supabase Storage.

### `/admin`

Dashboard administrativo simples.

Conteudo sugerido:

* total de inscritos
* total de trabalhos submetidos
* trabalhos pendentes
* inscritos recentes
* atalhos para listas

Como nao havera autenticacao no MVP inicial, esta rota deve ser tratada como painel demonstrativo, nao como area segura.

### `/admin/inscritos`

Tabela simples de inscritos.

Recursos iniciais:

* listagem
* busca local
* filtro por categoria
* status simples

### `/admin/trabalhos`

Tabela simples de trabalhos submetidos.

Recursos iniciais:

* listagem
* busca local
* filtro por area
* status: recebido, em avaliacao, aprovado, recusado

## Componentes reutilizaveis

### Layout

`Header`

Navegacao principal com links para paginas publicas e acesso ao admin.

`Footer`

Informacoes do evento, organizacao e contatos.

`Container`

Componente simples para largura maxima e padding horizontal consistente.

`PageHeader`

Cabecalho padrao para paginas internas.

### UI

`Button`

Variantes simples: primary, secondary, ghost.

`Card`

Container visual para blocos de informacao. Usar borda suave, sombra discreta e raio pequeno.

`Badge`

Status, categorias e tipos de atividade.

`Input`, `Select`, `Textarea`

Campos de formulario com label, erro e estado disabled quando necessario.

`EmptyState`

Estado vazio para tabelas e listas.

### Evento

`EventHero`

Hero da landing page com informacoes principais do congresso.

`EventInfoGrid`

Grid com data, local, modalidade, publico-alvo e prazos.

`ScheduleList`

Lista de atividades agrupadas por dia.

`SpeakerCard`

Card de palestrante.

`RegistrationForm`

Formulario de inscricao. Deve ser Client Component.

`SubmissionForm`

Formulario de submissao. Deve ser Client Component.

### Admin

`AdminStatCard`

Card com metricas simples.

`AdminTable`

Tabela simples para listas administrativas. Evitar criar uma tabela generica complexa demais; ela deve cobrir apenas o necessario.

`RegistrationStatusBadge`

Status visual de inscricao.

`SubmissionStatusBadge`

Status visual de trabalho.

## Modelagem inicial de dados

### Event

```ts
export type Event = {
  id: string;
  name: string;
  theme: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  venue?: string;
  city: string;
  contactEmail: string;
};
```

### ScheduleItem

```ts
export type ScheduleItem = {
  id: string;
  day: string;
  startsAt: string;
  endsAt: string;
  title: string;
  description?: string;
  type: 'opening' | 'lecture' | 'panel' | 'workshop' | 'break' | 'presentation' | 'closing';
  speakerIds?: string[];
  room?: string;
};
```

### Speaker

```ts
export type Speaker = {
  id: string;
  name: string;
  title?: string;
  institution: string;
  bio: string;
  talkTitle?: string;
  photoUrl?: string;
};
```

### Registration

```ts
export type RegistrationCategory =
  | 'student'
  | 'professor'
  | 'researcher'
  | 'professional'
  | 'other';

export type RegistrationStatus = 'received' | 'confirmed' | 'cancelled';

export type Registration = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  institution?: string;
  category: RegistrationCategory;
  notes?: string;
  status: RegistrationStatus;
  createdAt: string;
};
```

### Submission

```ts
export type SubmissionStatus =
  | 'received'
  | 'under_review'
  | 'approved'
  | 'rejected';

export type SubmissionAuthor = {
  name: string;
  email?: string;
  institution?: string;
};

export type Submission = {
  id: string;
  title: string;
  abstract: string;
  topic: string;
  authors: SubmissionAuthor[];
  correspondingAuthorName: string;
  correspondingAuthorEmail: string;
  status: SubmissionStatus;
  fileUrl?: string;
  createdAt: string;
};
```

## Estrategia de dados

### Fase inicial

Usar arquivos em `mock/` com arrays tipados.

Exemplo:

```ts
import type { Speaker } from '@/types/event';

export const speakers: Speaker[] = [];
```

Services devem ser funcoes diretas:

```ts
export function getSpeakers() {
  return speakers;
}
```

Evitar criar classes, interfaces genericas ou repositories.

### Fake persistence

Para formularios no MVP visual, existem tres opcoes aceitaveis:

1. Mostrar mensagem de sucesso sem persistir.
2. Persistir temporariamente em `localStorage`.
3. Simular resposta em um service client-side.

A melhor escolha inicial e mostrar sucesso sem prometer persistencia real. Quando o admin precisar refletir dados enviados, usar `localStorage` temporariamente.

### Supabase futuramente

Quando Supabase entrar, criar:

```txt
lib/
  supabase/
    client.ts
    server.ts
```

E alterar os services para buscar nas tabelas:

* `events`
* `speakers`
* `schedule_items`
* `registrations`
* `submissions`

Nao criar uma camada complexa de acesso a dados antes disso.

## Estrategia de escalabilidade sem overengineering

O projeto deve escalar apenas no que tem chance real de crescer.

Escalar agora:

* tipos bem definidos
* componentes pequenos
* services simples como ponto unico de troca para dados reais
* rotas claras
* UI responsiva
* env vars preparadas para Supabase

Nao escalar agora:

* multi-evento
* multi-tenant
* permissoes avancadas
* workflow de avaliacao completo
* fila de emails
* pagamentos
* certificados
* painel administrativo sofisticado

Se houver segundo evento no futuro, avaliar primeiro se vale duplicar dados/configuracao ou transformar em suporte multi-evento. Para um unico congresso, multi-evento e custo desnecessario.

## Etapas de desenvolvimento

### Etapa 1: Base visual

* Criar projeto Next.js com TypeScript e TailwindCSS.
* Configurar layout global.
* Criar `Header`, `Footer`, `Container` e estilos base.
* Criar mock principal do evento.

Resultado esperado: aplicacao rodando com layout consistente.

### Etapa 2: Landing page

* Criar hero.
* Criar secoes de resumo, destaques, datas e chamadas para acao.
* Usar dados mockados.

Resultado esperado: pagina inicial apresentavel.

### Etapa 3: Paginas publicas

* Criar `/evento`.
* Criar `/programacao`.
* Criar `/palestrantes`.
* Criar componentes de lista e cards.

Resultado esperado: usuario consegue entender o evento.

### Etapa 4: Inscricao

* Criar formulario de inscricao.
* Validar campos obrigatorios.
* Mostrar feedback de sucesso.
* Opcionalmente persistir em `localStorage`.

Resultado esperado: fluxo publico de inscricao demonstravel.

### Etapa 5: Submissao

* Criar formulario de submissao.
* Validar titulo, resumo, autores e email.
* Evitar upload real no primeiro momento.

Resultado esperado: fluxo publico de submissao demonstravel.

### Etapa 6: Admin simples

* Criar `/admin`.
* Criar cards de metricas.
* Criar tabelas de inscritos e trabalhos.
* Adicionar busca e filtros locais se forem simples.

Resultado esperado: visao administrativa basica.

### Etapa 7: Preparacao para Supabase

* Criar tabelas equivalentes aos tipos.
* Adicionar variaveis de ambiente.
* Trocar services mockados por chamadas Supabase.
* Decidir se formularios usam Server Actions ou Route Handlers.

Resultado esperado: persistencia real sem grande reescrita.

### Etapa 8: Polimento e deploy

* Ajustar responsividade.
* Revisar copy.
* Validar formularios.
* Configurar deploy na Vercel.
* Testar variaveis de ambiente.

Resultado esperado: MVP publicavel.

## Riscos e pontos de atencao

### Admin sem autenticacao

Sem autenticacao, o admin nao pode conter dados sensiveis em producao. No MVP inicial, tratar como demonstracao. Antes de uso real, adicionar pelo menos uma protecao simples.

### Formularios sem persistencia real

Mensagem de sucesso sem persistencia pode ser aceitavel para prototipo visual, mas nao para operacao real. Antes de divulgar o evento, conectar inscricoes e submissoes ao Supabase.

### Dados pessoais

Inscricoes coletam nome, email e telefone. Mesmo em evento pequeno, isso exige cuidado com acesso, exposicao no admin e backups.

### Upload de trabalhos

Upload adiciona complexidade: limite de tamanho, tipo de arquivo, virus, armazenamento e permissao de acesso. Deve entrar depois da submissao textual.

### Escopo do painel administrativo

O painel pode crescer rapidamente. Para o MVP, limitar a listagem, busca, filtros simples e status basico.

### Pagamentos

Pagamentos mudam o sistema: webhooks, conciliacao, estados intermediarios e suporte. Nao devem ser adicionados sem uma etapa propria de arquitetura.

### Supabase RLS

Quando Supabase entrar, Row Level Security precisa ser planejado. Sem autenticacao, usar policies publicas com muito cuidado, especialmente para leitura de dados administrativos.

### SEO e informacoes publicas

Como o evento depende de divulgacao, paginas publicas devem ter metadados adequados, texto claro e carregamento rapido.

### Manutencao apos o evento

Planejar desde cedo o que acontece depois do congresso:

* manter site como arquivo historico
* remover formularios
* exportar dados
* desligar integracoes pagas

## Decisoes recomendadas para o MVP

* Usar mock data ate a interface estar validada.
* Usar Server Components nas paginas de conteudo.
* Usar Client Components apenas nos formularios e filtros.
* Manter services simples para facilitar a troca por Supabase.
* Nao implementar autenticacao ate o admin precisar ir para producao.
* Nao implementar upload de arquivo na primeira versao do formulario de submissao.
* Nao criar suporte multi-evento.

## Criterio de sucesso

O MVP estara bem arquitetado se:

* uma pessoa consegue entender a estrutura em poucos minutos;
* as principais paginas podem ser entregues rapidamente;
* os dados mockados podem virar Supabase sem reescrever a UI inteira;
* a interface parece profissional e confiavel;
* a manutencao depois do evento continua simples.
