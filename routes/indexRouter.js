//Chamo o express
const express = require('express')
const router = express.Router()

const produtosRouter = require('./produtosRouter')

router.use('/produtos', produtosRouter)

//Substituo o app por router poque criei a const router
router.get('/', (req, res)=>{
    //res.end("Index Primeira pagina") //node enviou resposta final que aparece na pg 
    res.render('index')
})

//A partir da rota acima criei essa e as demais
router.get('/produtos', (req, res)=>{
    //res.end("Página de Produtos")
    res.render('produtos')
})

router.get('/servicos', (req, res)=>{
    res.end("Página de Serviços")
})

router.get('/contatos', (req, res)=>{
    res.end("Página de Contatos")
})

router.post('/receber', (req, res)=>{
    res.end("Página de Contatos")
})

//Finalizo a router que está preparada para responder o servidor e será chamada no server
module.exports = router