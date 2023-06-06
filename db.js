const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./rockseat.db')

db.serialize(function() {

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT, 
        title TEXT,
        category TEXT, 
        description TEXT, 
        link TEXT
        );

    `)   
    //Inserir dados na tabela
    

    //Consultar dados na tabela
   // db.all(`SELECT * FROM ideas`, function(err, rows){
    //    if (err) return console.log(err)

    //    console.log(rows)
  //  })

    //Deletar um dado na tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
     //   if(err) return console.log(err)

     //  console.log("DELETEI",this)
    //})
})

module.exports = db

    

