import db from '../config/database.js'

const UserModels = {
    getAllUsers : () => {
        const sql = 'SELECT * FROM users'

        return db.execute(sql)
    },  

    getUserById : (id) =>{
        const sql = `SELECT * FROM users WHERE id = ${id}`
       
        return db.execute(sql)
    },

    addUser: (body) => {
        const sql = `INSERT INTO users (nik, name, email, divisi, alamat) 
                     VALUES ('${body.nik}','${body.name}','${body.email}','${body.divisi}','${body.alamat}')`

        return db.execute(sql)
    },

    updateUser: (body, id) => {
        const sql = `UPDATE users SET nik=${body.nik}, name='${body.name}', email='${body.email}'
                    , divisi='${body.divisi}', alamat='${body.alamat}' WHERE id=${id}`

        return db.execute(sql)
    },


    deleteUser: (id) => {
        const sql = `DELETE FROM users WHERE id = ${id}`

        return db.execute(sql)
    }
}

// export models
// module.exports = UserModels
export default UserModels