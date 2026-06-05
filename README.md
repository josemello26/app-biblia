# Bíblia Web

Aplicação web de leitura da bíblia desenvolvida com o framework React. O projeto faz parte da avaliação individual da disciplina de Desenvolvimento de Aplicações Multiplataformas - Serratec.

## Tecnologias e Ferramentas
* **Node.js**
* **React**
* **Vite** (biblioteca JavaScript focada na criação de interfaces)
* **MockApi** (criação de teste de endpoints)
* **Vscode** (editor de código)

## Resumo da Aplicação
* **ideia** - Fornecer um forma simples e prática para leitura de livros da bíblia. 
* **conteúdo** - Apenas alguns livros foram listados com restrição de capítulos, para atender ao tempo curto de elaboração do projeto.

## Como Executar o Projeto Localmente
### Pré-requisitos
* Node instalado.
* Vscode ou outra IDE de sua preferência.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/josemello26/app-biblia.git
2. no terminal execute o comando **npm install**
3. no arquivo .env.example, mude o caminho da url da variável VITE_API_BASE_URL para **https://6a205b8fe96c1d13b5876129.mockapi.io/api/biblia** e renomeie o arquivo para **.env**
4. Execute a aplicação via terminal na raiz do projeto:
   ```bash
   npm run dev
5. A api estará disponível na url **http://localhost:5173/**
