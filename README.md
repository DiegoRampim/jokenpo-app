#Jokenpo API

O `jokenpo-app` é uma API, desenvolvida para o jogo Jokenpo.


## Iniciando o Projeto

Para que possa ser executada a construção do projeto é necessário que você tenha instalado:

* [NodeJS e NPM](https://nodejs.org)


### Baixando as Dependências

Para baixar as dependências do projeto execute `npm install` na raiz do projeto. 

### Execultando o projeto

Para execultar o projeto utilize o comando `npm start` na raiz do projeto.

---

## Utilização da API

Com essa API é possível gerar resultados para o jogo Jokenpo.

O sistema recebe uma lista de `players`, cada player contem um `name` e a sua jogada `played`, 
que pode ser `STONE ` para pedra, 
`PAPER` para papel e `SCISSORS` para tesoura, qualquer entrada diferente o sistema vai apontar erro.  

###Modelo de request correto

**ENDPOINT**

```
POST http://localhost:3000
```

**REQUEST**

```json
Content-Type: application/json

{  
   "players":[  
      {  
         "name":"Player 1",
         "played":"SCISSORS"
      },
      {  
         "name":"Player 2",
         "played":"STONE"
      }
   ]
}
```

**RESPONSE**

```json
200 (OK)
Content-Type: application/json

{
    "draw": false,
    "winner": {
        "name": "Player 2",
        "played": "STONE"
    }
}
```

###Modelo de request incorreto

**ENDPOINT**

```
POST http://localhost:3000
```

**REQUEST**

```json
Content-Type: application/json

{
 "players" : [
 	{
 		"name": "Player 1",
 		"played" : "SCISSORS"
 	},
	{
		"name": "Player 2",
		"played" : "ROCK"
	}
	]
}
```

**RESPONSE**

```json
400 (Bad Request)
Content-Type: application/json

{
    "message": "invalid move"
}
```
