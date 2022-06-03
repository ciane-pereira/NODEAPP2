const express = require('express')
const router = express.Router()

router.get('/casacos', (req, res)=>{
    res.end("Página de casacos")
})

router.get('/botas/:id', (req, res)=>{
    res.send(req.params.id)
    res.end("Página de botas")
})

module.exports = router