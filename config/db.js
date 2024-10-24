import mysql from 'mysql2/promise'

const connectToDatabase = () => {
    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'taskmanager'
        })
        console.log("connected to database");
        return connection

    } catch (error) {
        console.log("error connecting to mysql database ", error);
    }
}
export const conn = connectToDatabase();


