# 🚀 Developer Portal

Portal para desenvolvedores consumirem APIs, com documentação, sandbox interativo e gestão de aplicações em um fluxo único e intuitivo.

---

## 🧰 Tecnologias utilizadas

* Angular 19
* TypeScript
* HTML5 + CSS3

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js (recomendado: versão LTS)
* npm (geralmente já vem com o Node)

---

## ▶️ Como rodar o projeto localmente

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
ng serve
```

---

## 🌐 Acesse no navegador

Abra:

```
http://localhost:4200
```

---

## 📁 Estrutura do projeto

```bash
src/
 ├── app/
 │   ├── components/   # Componentes reutilizáveis (header, footer, etc)
 │   ├── pages/        # Páginas da aplicação (home, api-detail, etc)
 │   ├── app.routes.ts # Configuração de rotas
 │   └── app.component.ts
 ├── assets/
 └── styles.css
```

---

## ✨ Funcionalidades

* 🏠 Página inicial (Hero + apresentação)
* 📚 Catálogo de APIs
* 🔍 Detalhe da API com documentação
* 🧪 Sandbox interativo (simulação de requests)
* 🔐 Fluxo de autenticação (layout)
* 📦 Gestão de aplicações (layout)

---

## 🛠️ Build para produção

Para gerar a versão de produção:

```bash
ng build
```

Os arquivos serão gerados em:

```bash
dist/
```

---

## 📌 Observações

* Este projeto é **frontend-only**
* As integrações com APIs estão simuladas (mock/layout)
* Ideal para prototipação de portais de APIs e Developer Experience (DX)

---

## 👨‍💻 Autor

Desenvolvido por Gustavo Galli
