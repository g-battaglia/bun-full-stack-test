import { Request, Response } from 'express';
import { getDb } from '../services/database';

export const getDocuments = async (req: Request, res: Response) => {
    const db = getDb();
    const documents = await db.all('SELECT * FROM documents');
    res.json(documents);
};

export const getDocument = async (req: Request, res: Response) => {
    const db = getDb();
    const document = await db.get('SELECT * FROM documents WHERE id = ?', [req.params.id]);
    res.json(document);
};

export const saveDocument = async (req: Request, res: Response) => {
    const db = getDb();
    const { title, content } = req.body;
    const result = await db.run('INSERT INTO documents (title, content) VALUES (?, ?)', [title, content]);
    const newDocument = { id: result.lastID, title, content };
    res.json(newDocument);
};

export const deleteDocument = async (req: Request, res: Response) => {
    const db = getDb();
    await db.run('DELETE FROM documents WHERE id = ?', [req.params.id]);
    res.json({ message: 'Document deleted' });
};

