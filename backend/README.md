<h3 align="center">
  Backend aplicativo GoBarber - Desenvolvido durante o curso Bootcamp
</h3>

<p align="center">“Só deseje as coisas as quais você está disposto a lutar”!</blockquote>

<div align="center">
  <a href="https://github.com/alanhrc">
    <img alt="Made by Alan Henrique" src="https://img.shields.io/badge/By-Alan%20Henrique-%2304D361"></img>
  </a>
  <img alt="Language count" src="https://img.shields.io/github/languages/count/AlanHRC/GoBarberBootcampBackend?color=%2304D361"></img>
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
    <img src="https://img.shields.io/badge/node.js-informational?logo=Node.JS&color=%2304D361"></img>
  </a>
  <a aria-label="Versão do Typescript" href="#">
    <img src="https://img.shields.io/badge/typescript-informational?logo=Typescript&color=%2304D361"></img>
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361"></img>
  <a href="https://github.com/alanhrc/GoBarberBootcampBackend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/alanhrc/GoBarberBootcampBackend?style=social"></img>
  </a>
</div>

</br>
<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, continua o desenvolvimento da aplicação de gestão de transações, treinando o que fora aprendido até agora no Node.js junto ao TypeScript, mas dessa vez incluindo o uso de banco de dados com o TypeORM e envio de arquivos com o Multer ensinado pela Rocketseat! :rocket:!

## Instalação

Para instalar as dependências e executar o Servidor (modo desenvolvimento), clone o projeto em seu computador e rode os comandos:

```bash
yarn install ou yarn
yarn dev:server
```

A rota do navegador a página é `localhost:3333`.

### Imnsonia

Para testar a API, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` → `Import Data` → `From File` → e selecione o arquivo [`Insomnia.json`](./Insomnia.json).

[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API&uri=https://raw.githubusercontent.com/AlanHRC/GoBarberBootcampBackend/master/Insomnia.json)

</br>

### Rotas da aplicação

Em breve descrição das rotas da aplicação

<!--

Os objetivos de cada rota:

- **`POST /transactions`**: A rota recebe `title`, `value`, `type`, e `category` dentro do corpo da requisição, sendo o `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela é armazenada dentro do seu banco de dados, possuindo os campos `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`.

**Dica**: Para a categoria, é criada uma nova tabela, que terá os campos `id`, `title`, `created_at`, `updated_at`.

**Dica 2**: Antes de criar uma nova categoria, é verificado se já existe uma categoria com o mesmo título. Caso ela exista, será utilizado o `id` já existente no banco de dados.

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income",
  "category": "Alimentação"
}
```

- **`GET /transactions`**: Essa rota retorna uma listagem com todas as transações que foram cadastradas até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota retorna um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Salary"
      }
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Recreation"
      }
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

**Dica**: Dentro de balance, o income é a soma de todos os valores das transações com `type` income. O outcome é a soma de todos os valores das transações com `type` outcome, e o total é o valor de `income - outcome`.

**Dica 2**: Para fazer a soma dos valores, foi usado a função [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) para agrupar as transações pela propriedade `type`, assim somado todos os valores com facilidade e obter o retorno do `balance`.

- **`DELETE /transactions/:id`**: A rota deleta uma transação com o `id` presente nos parâmetros da rota;

* **`POST /transactions/import`**: A rota permite a importação de um arquivo com formato `.csv` contendo as mesmas informações necessárias para criação de uma transação `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`, onde cada linha do arquivo CSV é  um novo registro para o banco de dados, e por fim retorna todas as `transactions` que foram importadas para seu banco de dados. O arquivo csv, segue o seguinte [modelo](./assets/file.csv)

### Específicação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

* **`should create tags when inserting new transactions`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o `id` que acabou de ser criado.

- **`should not create tags when they already exists`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o `id` dessa categoria existente, não permitindo a criação de categorias com o mesmo `title`.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`.

* **`should be able to delete a transaction`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

- **`should be able to import transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo csv, contendo o seguinte [modelo](./assets/file.csv). Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas. -->


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by Alan :wave: [Chama no Discord!](https://discordapp.com/invite/#8402)
