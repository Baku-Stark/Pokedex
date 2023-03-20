<div align="center">

# POKEMON | POKEDEX

</div>

<div align="center">

`🪁 | Projeto em Angular JS - POKEDEX`

<br>

<img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" /> <img height="50" src="assets/img/pokeapi_256.png" />


</div>


<hr>

<div align="center">

# Pokedex | Angular Js <br> (DESENVOLVIMENTO)

</div>

* **`API RESTful com AdonisJS`**
    * [Vídeo no YouTube](https://www.youtube.com/watch?v=y8XfJJYhXPE&t=0s&ab_channel=MatheusBattisti-HoradeCodar)


* **`POKÉAPI`**
    * [Link](https://pokeapi.co/)

<details>

<summary><strong>AdonisJS</strong></summary>

* Um <mark>framework Nodej.js</mark>, para desenvolver aplicações web;

* Facilita muito a programação de apps, possui uma estrutura similar ao <mark>Laravel</mark>;

* Utilizar arquitetura <mark>MVC</mark>;

* Possui vários recursos, como: <mark>CLI, File Upload</mark> simples, <mark>validações</mark> e etc;

* Há também outros pacotes externos para complementar o ecossistema <mark>ORM, Autenticação, Autorização</mark>;

</details>

<details>

<summary><strong>Detalhes</strong></summary>

* Criação de uma <mark>API RESTful</mark>;

* <mark>CRUD</mark> e relacionamento entre entidades;

* Utilizar a <mark>CLI do Adonis e outros recursos</mark> excluisvos do framework;

* Testes realizados no <mark>Postman</mark>, para garantir o correto funcionamentoo da API;

</details>

<br>

<details>

<summary><strong>[🪁] CRIANDO A API</strong></summary>

* `npm init adonis-ts-app@latest` (Última versão do Adonis)

* `npm i @adonisjs/lucid`
    * `node ace configure @adonisjs/lucid` (SQLite > Terminal)

</details>

<details>

<summary><strong>[🪁] MODEL</strong></summary>

* `node ace make:model <nome-do-modulo> -m` (Criando model com migration)

* `node ace migration:run`

* `node ace make:controller <nome-do-modulo>` (Desenvolver a função do do banco de dados)

</details>

<details>

<summary><strong>[🪁] ROUTES</strong></summary>

* `node ace list:routes` (Ver lista de rotas da API)

</details>

</details>

<details>

<summary><strong>[🪁] UPLOAD IMAGE</strong></summary>

* `npm i uuid` (Upload de imagens)

* **Complete** - Support for RFC4122 version 1, 3, 4, and 5 UUIDs

* **Cross-platform** - Support for ...
    * CommonJS, [ECMAScript Modules](https://www.npmjs.com/package/uuid#ecmascript-modules) and [CDN builds](https://www.npmjs.com/package/uuid#cdn-builds)
    * Node 12, 14, 16, 18
    * _Chrome, Safari, Firefox, Edge browsers_
    * Webpack and rollup.js module bundlers
    * [React Native](https://www.npmjs.com/package/uuid#react-native--expo) / [Expo](https://www.npmjs.com/package/uuid#react-native--expo)

* **Secure** - Cryptographically-strong random values

* **Small** - Zero-dependency, small footprint, plays nice with "tree shaking" packagers

* **CLI** - Includes the uuid command line utility

</details>

<div align="center">

<table>

<thead>

<tr align="center">

<th colspan="5">SOFTWARES</th>

</tr>

</thead>

<tbody>

<tr align="center">

<td>

<img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />

</td>

<td>

<img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

</td>

<td>

<img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />

</td>

<td>

<img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />

</td>

<td>

<img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" />

</td>

</tr>

</tbody>

</table>

</div>

<hr>

<details>

<summary><strong>[🪁] INICIANDO A APLICAÇÃO ANGULAR</strong></summary>

* `ng new <nome-do-projeto>` (Iniciando um projeto Angular)

* `ng serve` (Ativando o servidor)

</details>

<details>

<summary><strong>[🪁] COMPONENTES</strong></summary>

* `ng generate component <diretório do component>`
    * _header_
    * _footer_
    * **_pages_**
        * `home`
        * `about`
        * `new-pkmn`

* `npm i @fortawesome/angular-fontawesome` (**fortawesome**)

</details>

<details>

<summary><strong>[🪁] SERVIÇOS</strong></summary>

* `ng generate service <diretório do serviço>` (Interação com o banco de dados)

</details>

<details>

<summary><strong>[🪁] ENVIRONMENTS</strong></summary>

* `ng generate environments` (Usando a CLI do Angular, comece executando o comando gerar ambientes mostrado aqui para criar o diretório `src/environments/` e configurar o projeto para usar esses arquivos.)

</details>

<div align="center">

<hr>

# Pokedex | Angular Js <br> (HOME)

</div>

<div align="center">

<img src="assets/img/image.png" />

</div>