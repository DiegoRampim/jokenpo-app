# Jokenpo API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/03e6ef726e7e4cddbc69a21385f2efaf)](https://www.codacy.com/app/DiegoRampim/jokenpo-app?utm_source=github.com&utm_medium=referral&utm_content=DiegoRampim/jokenpo-app&utm_campaign=badger)

O `jokenpo-app` é uma API, desenvolvida para o jogo Jokenpo.


## Iniciando o Projeto

Para que possa ser executada a construção do projeto é necessário que você tenha instalado:

* [NodeJS e NPM](https://nodejs.org)


### Baixando as Dependências

Para baixar as dependências do projeto execute `npm install` na raiz do projeto. 

### Executando o projeto

Para executar o projeto utilize o comando `npm start` na raiz do projeto.

---

## Utilização da API

Com essa API é possível gerar resultados para o jogo Jokenpo.

O sistema conta com dois tipos de jogo, multiplayer ou singleplayer.
 
### Modo multiplayer
 
No modo `multiplayer` o sistema recebe uma lista de `players`, cada player contem um `name` e a sua jogada `played`, 
que pode ser `STONE ` para pedra, `PAPER` para papel e `SCISSORS` para tesoura, qualquer entrada diferente o sistema vai apontar erro.  

#### Modelo de request multiplayer

**ENDPOINT**

```
POST http://localhost:3000/multi
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
----

### Modo singleplayer
 
No modo `singleplayer` o sistema recebe um objeto, que contem um `name` e a sua jogada `played`, 
que pode ser `STONE ` para pedra, `PAPER` para papel e `SCISSORS` para tesoura, qualquer entrada diferente o sistema vai apontar erro.  

#### Modelo de request singleplayer

**ENDPOINT**

```
POST http://localhost:3000/single
```

**REQUEST**

```json
Content-Type: application/json

{  
    "name":"Player 1",
    "played":"SCISSORS"
}
```

**RESPONSE**

```json
200 (OK)
Content-Type: application/json

{
    "draw": false,
    "winner": {
        "played": "STONE",
        "name": "IA"
    }
}
```

----

### Em caso de empate o sistema retorna

**RESONSE**

```json
200 (OK)
Content-Type: application/json

{
    "draw": true,
    "winner": {}
}
```


----

### Em caso de jogada invalida o sistema retorna

**RESPONSE**

```json
400 (Bad Request)
Content-Type: application/json

{
    "message": "invalid move"
}
```



