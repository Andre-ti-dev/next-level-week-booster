# ♻ Ecoleta - Booster
[![CAPA](https://raw.githubusercontent.com/Andre-ti-dev/next-level-week-booster/master/Ecoleta.png)]()

Projeto com foco em pontos de coletas de resíduos que não podem ser colocados em conjunto com o lixo convencional como pilhas, baterias, entre outros.

O projeto é parte da Next Level Week Booster da Rocketseat com o instrutor Diego Fernandes.

O projeto Booster tem foco no aprendizado de uma das stacks mais utilizadas no desenvolvimento web e mobile que são o Node, React e React Native.

📝  Anotações realizadas durante o desenvolvimento do projeto: [NOTION](https://www.notion.so/Ecoleta-Booster-52cb73b2f5b14f4e8460d4d7cde8763a)

[CAPTURAS DE TELA](/screenshots)

### Tecnologias utilizadas

- Node
  - O Node permite desenvolvermos nossas aplicações Back-end utilizando JavaScript.
  - Podemos desenvolver vários tipos de aplicação, no projeto ele é utilizado na criação de nossa API  que será consumida pelos nossos clientes em React e React Native.
  - O projeto é desenvolvido com TypeScript com o auxílio de bibliotecas que permite que criemos aplicações mais robustas e de fácil manutenção graças a adição de tipagem.

- React
  - Biblioteca utilizada para desenvolvermos nossas interfaces web, permite que trabalhemos com componentes para organizar nosso código, além de fornecer uma grande facilidade e produtividade no desenvolvimento de Single Page Applications.
- React Native
  - Framework utilizado no desenvolvimento do aplicativo tanto para android quanto para iOS de forma nativa e utilizando o React, ele fornece uma maior produtividade já que uma mesma base de código é utilizada para ambas plataformas.
- TypeScript
  - Adiciona tipagem ao nosso JavaScript melhorando a organização do nosso código, pois podemos definir os tipos esperados de entrada e saída de dados na aplicação e facilitando os testes.
  - Outra vantagem é que utilizando o editor Visual Studio Code temos o auxílio do InteliSense para desenvolver o nosso código e melhorando a produtividade.
  

## Instalação

Após clonar esse repositório siga os passos para cada aplicação

#### Aplicação Front-End (React)

Na pasta `web` instale as dependências com `npm`.
```
$ npm install
```
E execute a aplicação com o comando.
```
$ npm start
```

#### Aplicação Back-End (Node)

Na pasta `server` instale as dependências com `npm`.
```
$ npm install
```
Execute a migration do banco de dados
```
$ npm run knex:migrate
```
Execute a seed
```
$ npm run knex:seed
```
E execute a aplicação com o comando.
```
$ npm run dev
```

#### Aplicação Mobile (React Native)

> O projeto foi criado com o Expo utilizando yarn então aqui será utilizado ele.

Na pasta `mobile` instale as dependências com `npm`.
```
$ npm install
```
E execute a aplicação com o comando.
```
$ npm start
```

### Ambiente de Testes
É necessário alterar em `mobile/src/services/api.tsx`, `web/src/services/api.ts`, `server/src/controllers/ItemsController.ts` e `server/src/controllers/PointsController.ts` o host `http://10.0.0.150:3333` para o utilizado pelo Expo para poder testar utilizando o APP do Expo ou utilizar `http://localhost:3333` caso esteja testando apenas a aplicação Web.
