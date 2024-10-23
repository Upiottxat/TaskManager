import mysql from 'mysql2/promise'
export const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'taskmanager'
})
export const connectToDatabase = () => {

    // conn.connect((err, res) => {
    //     if (err) return console.log(err);
    //     console.log("connection established");

    // })



}

