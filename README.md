# Mini TabNews API

Uma API REST inspirada no [TabNews](https://www.tabnews.com.br/), desenvolvida com foco educacional e uso em conjunto com a aplicação front-end [Mini TabNews SPA](https://github.com/thecaKo/mini-tabnews-spa). Permite criar, listar, atualizar e excluir conteúdos como posts e comentários.

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemon](https://nodemon.io/)

## 🚀 Funcionalidades

- [x] Criar conteúdos
- [x] Listar todos os conteúdos
- [x] Listar um conteúdo por ID
- [x] Listar comentários de um conteúdo
- [x] Atualizar um conteúdo
- [x] Deletar um conteúdo

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/thecaKo/mini-tabnews-api.git
cd mini-tabnews-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

```bash
npx prisma migrate dev
```

4. Inicie o servidor:

```bash
npm run dev
```

Servidor disponível em `http://localhost:3333`.

---

## 📄 Endpoints da API

### 📚 Conteúdos (Posts e Comentários)

| Método   | Rota                         | Descrição                             |
|----------|------------------------------|----------------------------------------|
| `GET`    | `/contents`                  | Lista todos os conteúdos               |
| `GET`    | `/contents/:id`              | Retorna um conteúdo por ID             |
| `GET`    | `/contents/:id/comments`     | Lista os comentários de um conteúdo    |
| `POST`   | `/contents`                  | Cria um novo conteúdo                  |
| `PUT`    | `/contents/:id`              | Atualiza um conteúdo existente         |
| `DELETE` | `/contents/:id`              | Deleta um conteúdo pelo ID             |

#### 📝 Exemplo de Body (POST/PUT)

```json
{
  "title": "Título do conteúdo",
  "content": "Texto do conteúdo",
  "parentId": null
}
```

> `parentId`: Use `null` para posts ou forneça um `id` de conteúdo para adicionar como comentário.

---

## 🧪 Exemplo de Requisição com cURL

```bash
curl -X POST http://localhost:3333/contents \
-H "Content-Type: application/json" \
-d '{
  "title": "Exemplo de post",
  "content": "Conteúdo do post aqui.",
  "parentId": null
}'
```

---

## 📁 Estrutura de Pastas

```
mini-tabnews-api/
├── prisma/              # Schema e migrations do banco de dados
├── src/
│   ├── routes/          # Rotas da aplicação
│   ├── controllers/     # Lógica dos endpoints
│   └── server.ts        # Arquivo principal do servidor
├── .env                 # Variáveis de ambiente
├── package.json
└── README.md
```

## 👨‍💻 Autor

Desenvolvido por [@thecaKo](https://github.com/thecaKo)
