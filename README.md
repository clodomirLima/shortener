# Projeto Encurtador de URL
Visão Geral
Este projeto é um encurtador de URL construído com NodeJS e TypeScript. Ele gera hashes únicos para cada URL e conecta essas entradas aos seus respectivos hashes. O projeto também inclui testes utilizando Insomnia e armazena dados de URL no MongoDB.

# Requisitos Básicos
NodeJS instalado.
Um editor de texto de sua escolha.

# Inicialize o projeto:
npm init
npm install typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint
npm install nodemon express cors


# Acessando via Navegador
URL: http://localhost:5000/encurtar
{
  "originURL": "https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters"
}

resposta
{
  "hash": "VaDg91-3w",
  "shortURL": "http://localhost:5000/VaDg91-3w"
}