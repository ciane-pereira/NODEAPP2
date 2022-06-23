if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//Importar os módulos
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Configurações de arquivos estáticos para express
app.use(express.static('public'))
app.use(('/css', express.static(__dirname + 'public/css')))
app.use(('/img', express.static(__dirname + 'public/img')))
app.use(('/js', express.static(__dirname + 'public/js')))

//Configurar view engine para ejs integrar ao express
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
app.set('layout', 'layouts/layout') //Alterou a localização do arquivo layout.ejs p/ pasta layouts
app.use(expressLayouts)


//Configurar rotas: essa é forma padrão com get. Recortei para o indexRouter
/*app.get('/', (req, res)=>{
    res.end("Primeira pagina")
})*/
//Importar o router index atraves da const indexRouter (é pasta:routes.js/é arquivo:indexRouter.js)
const indexRouter = require('./routes/indexRouter')
const produtosRouter = require('./routes/produtosRouter')

//Implanto(habilitação) a rota e chamo o indexRouter, página está funcionando
app.use('/', indexRouter)
app.use('/', produtosRouter)

//Inicializar o serviço o PORT busca o 3000//
app.listen(process.env.PORT,console.log("Servidor iniciado"))
/*app.listen(process.env.PORT || 3000, console.log("Servidor em execução"))*/
