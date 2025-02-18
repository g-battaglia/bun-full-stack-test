import { Router } from 'express';
import { getDocuments, getDocument, saveDocument, deleteDocument } from '../controllers';

const router = Router();

export const setRoutes = (app: any) => {
    router.get('/documents', getDocuments);
    router.get('/documents/:id', getDocument);
    router.post('/documents', saveDocument);
    router.delete('/documents/:id', deleteDocument);

    app.use(router);
};
