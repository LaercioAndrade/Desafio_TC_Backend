<h1>Automação BackEnd</h1>

Status: Done

### Avaliação da TC para automação BackEnd utilizando Cypress  

Instalação:

Cypress 
+ npm install -D cypress 

Inicializar Cypress 
+ npx cypress open

Relatório mochawesome
+ npm install --save-dev mochawesome

Configurações do Projeto:

### Integration

+ Request: - Contém os arquivos GETCards e POSTCards que realiza as request na API

+ Test: - Contém os Testes na API

+ Contém as pastas Services, Cards, Request e Tests

### Para executar o Projeto:

Executa o projeto no navegador Google Chrome
+ npm run test:chrome
+ npx cypress open

Executa o projeto em modo modo headless
+ npm run test


### Cenários Automatizados

+ Teste Embaralhar as cartas (Done) : - a automação da um GET na API e valida se status code é 200 e se em body não retorna dados vazios

+ Teste Verificar uma nova carta (Failed): - a automação da um POST  na api com o DeckID recebido no GET e valida se  status code é 200 e se o body não retorna dados vazios

+ Teste Retirar uma carta do baralho (Failed): - a automação da um POST  na api com o DeckID recebido no GET e valida se  status code é 200 e se o body não retorna dados vazios (o teste falha pois foi implementado o code 201 e o esperado era 200)
