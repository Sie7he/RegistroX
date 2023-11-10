import pool from './config.js'

export async function getTable(table) {
   try {
     const {rows} = await pool.query(`'SELECT * from ${table}`)
     return (rows)
   } catch (error) {
     throw new Error(error)
   }
}

// export async function insertTable(table, item) {
//   try {
//     const keys =
//     await pool.query(`INSERT INTO ${table} VALUES `)

//   } catch (error) {
    
//   }
// }
