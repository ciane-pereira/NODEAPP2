//inclusão do express para habilitar///
const express = require('express')
const router = express.Router()

/***cada produto abaixo será uma rota para  individual a ser criada*****/
router.get('/camisetas', (req, res)=>{
    res.end("Página de camisetas")    
})

router.get('/calca', (req, res)=>{
    res.end("Página de calças")    
})

router.get('/sapatos', (req, res)=>{
    res.end("Página de sapatos")    
})

//forma de passar para a rota, como paramentro, o que vem depois da barra, a informação do id, não funcionou//
/**router.get('/sapatos/:id', (req, res)=>{
    res.send(req.params.id) //forma de acessar o parametro(params via id)//
    res.end("Página de sapatos")
})**/

module.exports = router