const sqlite = require("sqlite3").verbose()
const db = new sqlite.Database("./src/database/database.db")

module.exports = db


db.serialize(() => {
    /*
        db.run(`
                CREATE TABLE IF NOT EXISTS places(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    image TEXT,
                    name TEXT,
                    address TEXT,
                    address2 TEXT,
                    state TEXT,
                    city TEXT,
                    items TEXT 
                )
            `)
            
                //inserir

                const insert = `INSERT INTO places(image,name,address,address2,state,city,items) 
                        VALUES(?,?,?,?,?,?,?);`

                const values = ["https://www.1000imagens.com/foto.asp?id=03826972657249&g=&dt=0&ma=&p=1&o=0", "Googlectoria", "Criador Goggle, Avenida Googles",
                    "Número 600623", "Rio do sudeste", "Resíduos de Google", "TextoItems"
                ]

                function afterInsertData(err) {
                    if (err) {
                        return console.log(err)
                    }

                    console.log("Cadastrado com sucesso")
                    console.log(this)
                }
                //
                //Add no banco
                db.run(insert, values, afterInsertData)

            */
    /*
        //Consulta
        //db.all(`SELECT campoEspecifico FROM places`, function(err, rows)

        db.all(`SELECT * FROM places`, function(err, rows) {
                if (err) {
                    return console.log(err)
                }

                console.log("Estes são os registros:")
                console.log(rows)
            })  */
    /*
        //Deletar
        /*   
        db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
            if (err) {
                return console.log(err)
            }

            console.log("Registra deletado com sucesso!:")

        })
     */

})