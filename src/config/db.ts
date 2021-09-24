import { connect, connection } from "mongoose";

const database = {
  start: () => {
    connect('mongodb://localhost:27017', { readPreference: 'primary', appName: 'sesService', directConnection: true, ssl: false })
    
    const db = connection
    
    db.once('open', () => {
        console.log('[DB] Connection open')
    })
    
    db.on('connected', () => {
        console.log('[DB] Connected')
    })
    
    db.on('disconnected', () => {
        console.log('[DB] Disconnected')
    })
    
    db.on('error', (error) => {
        console.log('Connection error', error)
    })
    
    process.on('SIGINT', () => {
        db.close(() => {
            console.log('Connection closed by ctrl+C command')
            process.exit(0)
        })
    });
  }
}

export default database;