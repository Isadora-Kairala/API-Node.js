import express from 'express' // importa o express

const app = express() // recomendavel usar uma variavel para ter acesso ao express

app.get('/usuarios', (req, res) => {
    res.send('Ok, tudo certo')
})

app.listen(3000)
//pra rodar/subir o servidor: node server.js  (node + nome do arquivo)

/*
para rota:
1- tipo de rota / metodo http
2-endereço
*/
