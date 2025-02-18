import sqlite3 from 'sqlite3';
import { open } from 'sqlite'

let db: sqlite3.Database;

export const connectToDatabase = async () => {
    try {
        db = await open({
            filename: './src/db.sqlite',
            driver: sqlite3.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS documents (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                content TEXT
            )
        `);

        console.log('Connected to the SQLite database');
    } catch (error) {
        console.error('Error connecting to the SQLite database', error);
    }
};

export const getDb = () => db;
