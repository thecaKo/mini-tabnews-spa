# Mini TabNews SPA

Uma aplicação front-end inspirada no [TabNews](https://www.tabnews.com.br/), desenvolvida em React. Esta SPA (Single Page Application) consome a [Mini TabNews API](https://github.com/thecaKo/mini-tabnews-api) para exibir, criar e interagir com conteúdos (posts e comentários).

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Funcionalidades

- [x] Listagem de conteúdos (posts e comentários)
- [x] Visualização de conteúdo individual
- [x] Criação de novos posts
- [x] Criação de comentários
- [x] Interface moderna com navegação rápida

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/thecaKo/mini-tabnews-spa.git
cd mini-tabnews-spa
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

> ⚠️ Certifique-se de que a [API](https://github.com/thecaKo/mini-tabnews-api) está rodando localmente em `http://localhost:3333`.

---

## 🌐 Estrutura de Rotas

| Caminho                 | Descrição                           |
|------------------------|-------------------------------------|
| `/`                    | Lista todos os posts                |
| `/cadastro`            | Realizar o Cadastro                 |
| `/login`               | Realizar o Login                    |
| `/user/:username`      | Busca perfil de usuário pelo nome   |
| `/post/:slug`          | Visualiza o conteúdo de um post     |
| `/post/publicar`       | Cria um novo post                   |
| `/comment/:parentId`   | Adiciona um comentário a um conteúdo|

## 👨‍💻 Autor

Desenvolvido por [@thecaKo](https://github.com/thecaKo)
