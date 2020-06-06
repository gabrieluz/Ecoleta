const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.urlencoded({ extended: true }))

//Configuração da pasta public, para ser usada no arquivos html
server.use(express.static("public"))

//Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//pagina inicial
//requisição e responsta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de residuos" });
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
})
server.post("/savepoint", (req, res) => {

    const query = `INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items)
         VALUES(?,?,?,?,?,?,?);`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.render("/partials/error-page")
        }
        console.log(this)

    }
    //
    //Add no banco
    db.run(query, values, afterInsertData)

    return res.render("confirmacao.html");
})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if (search == "") {
        return res.render("search-results.html", { total: 0 });
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("search-results.html", { places: rows, total });
    })



})

server.listen(3000)