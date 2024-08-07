# Conversor de Arquivo TXT para XLSX

Conversor que lê o conteúdo de um arquivo `.txt` e salva os dados extraídos em um arquivo `.xlsx`.

## Requisitos

-  [Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)
-  [NPM](https://www.npmjs.com/get-npm)

## Instalação

Primeiro, clone este repositório ou faça o download dos arquivos.
Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://github.com/Denis-moreira98/teste-dev-jr.git
```

Depois de clonar o repositório, navegue até o diretório do projeto:

```bash
cd teste-dev-jr
```

Logo em seguida acesse a branch "developer" com seguinte comando:

```bash
git checkout developer
```

Depois, navegue até o diretório `desafio1` e instale as dependências necessárias executando:

```bash
cd desafio1
```

Execute:

```bash
npm install
```

## Rodando o sistema

```bash
node index.js
```

### Arquivo `.xlsx` será criado no diretório `desafio1`.

## O que o Código Faz

-  lerArquivoTxt(caminhoArquivo): Lê o conteúdo de um arquivo .txt especificado pelo caminhoArquivo e retorna um array de linhas do arquivo.
-  salvarParaExcel(dados, caminhoArquivo): Recebe um array de dados e salva esses dados em um arquivo .xlsx especificado pelo caminhoArquivo.
-  O script principal lê o arquivo .txt, converte suas linhas em um formato adequado para Excel e salva essas linhas em um arquivo .xlsx.

## Tecnologias utilizadas

-  Linguagem: JavaScript foi escolhido pela sua simplicidade com o ambiente Node.js.
-  Bibliotecas:
   -  fs: Biblioteca nativa do Node.js utilizada para operações de leitura e escrita de arquivos.
   -  xlsx: Biblioteca popular para manipulação de arquivos Excel em JavaScript.
