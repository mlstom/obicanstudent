const mysql = require('mysql2/promise');

export default async function database() {
    return await mysql.createConnection(
        {
            host: 'sql.freedb.tech',
            user: 'freedb_obicanstudent',
            password: 'Gsv7H*tsmYUtzy*',
            database: 'freedb_obicanstudent',
            port: 3306
        }
    )
}