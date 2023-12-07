const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) Values('Rodrigo')"
connection.query(sql)
const sql2 = "INSERT INTO people(name) Values('Lais')"
connection.query(sql2)
const sql3 = "INSERT INTO people(name) Values('Pedro')"
connection.query(sql3)
const sql4 = "INSERT INTO people(name) Values('Maria')"
connection.query(sql4)
connection.end()

app.get('/', (request, response) => {
    connection.query(
      'Select name from people;',
      function (error, results, fields) {
        let text =
          '<h1>FullCycle Rocks!!!</h1><p>- Lista de nomes cadastrada no banco de dados.</p><br><ul>';
        for (const user of results) {
          text += `<li>${user.name}</li>`;
        }
        text += '</ul>';
        return response.send(text);
      }
    );

});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})