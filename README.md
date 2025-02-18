# Node.js Backend Test

Questo progetto consiste in due applicazioni Node.js (Applicazione A e Applicazione B) che comunicano tra loro tramite API. Ogni applicazione ha il proprio database locale per eseguire operazioni CRUD.

## Panoramica

- **Applicazione A**: 
  - Espone API per la gestione dei documenti.
  - Fornisce autenticazione tramite un'API di login.
  
- **Applicazione B**: 
  - Consuma le API dell'Applicazione A.
  - Persiste i risultati delle API dell'Applicazione A nel proprio database.
  - Fornisce anche autenticazione.

## Iniziare

### Prerequisiti

- Node.js (versione 14 o superiore)
- npm (Node Package Manager)

### Configurazione

1. **Clona il repository**:
   ```
   git clone <repository-url>
   cd nodejs-backend-test
   ```

2. **Installa le dipendenze per l'Applicazione A**:
   ```
   cd appA
   npm install
   ```

3. **Installa le dipendenze per l'Applicazione B**:
   ```
   cd ../appB
   npm install
   ```

### Esecuzione delle Applicazioni

1. **Avvia l'Applicazione A**:
   ```
   cd appA
   npm start
   ```

2. **Avvia l'Applicazione B**:
   ```
   cd appB
   npm start
   ```

### Endpoint delle API

#### Applicazione A

- **Login**: `POST /login`
  - Richiesta: `{ "username": "user", "password": "pass" }`
  - Risposta: `{ "token": "your-token" }`

- **Ottieni Lista di Documenti**: `GET /documents`
  - Risposta: `[ { "id": 1, "title": "Document 1", "content": "Content 1" }, ``` ]`

- **Ottieni Documento**: `GET /documents/:id`
  - Risposta: `{ "id": 1, "title": "Document 1", "content": "Content 1" }`

- **Salva Documento**: `POST /documents`
  - Richiesta: `{ "title": "New Document", "content": "New Content" }`
  - Risposta: `{ "id": 2, "title": "New Document", "content": "New Content" }`

- **Elimina Documento**: `DELETE /documents/:id`
  - Risposta: `{ "message": "Document deleted" }`

#### Applicazione B

- **Login**: `POST /login`
  - Richiesta: `{ "username": "user", "password": "pass" }`
  - Risposta: `{ "token": "your-token" }`

- **Interagisci con l'Applicazione A**: L'Applicazione B chiamerà gli endpoint sopra descritti dell'Applicazione A per gestire i documenti.

## Database

Ogni applicazione utilizza un database locale per memorizzare i documenti. Assicurati che il database sia configurato correttamente secondo i modelli definiti in ciascuna applicazione.

## Conclusione

Questo progetto dimostra l'interazione tra due applicazioni Node.js utilizzando API RESTful. Segui le istruzioni sopra per configurare ed eseguire entrambe le applicazioni con successo.
