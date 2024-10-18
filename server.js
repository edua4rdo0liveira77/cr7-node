
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/cr7', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCr7(body);
    return reply.status(201).send();
})

// READE
server.get('/cr7', async () => {
    const cr7 = await databasePostgres.listCr7();
    return cr7;
});

// UPDATE
server.put('/cr7/:id', async (request, reply) => {
    const cr7ID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCr7(cr7ID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/cr7/:id', async (request, reply) => {
    const cr7ID = request.params.id;
    await databasePostgres.deletecr7(cr7ID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
