const express = require('express');
const server = express();

server.use(express.json());
const users = ['Diego', 'Robson', 'Victor'];

/** Retorna um curso */
server.get('/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json(users[index]);
});

/** Retorna todos os cursos */
server.get('/users', (req, res) => {
    return res.json(users);
});

/** Cria um curso */
server.post('/users', (req, res) => {
    const { name } = req.body;
    users.push(name);

    return res.json(users);
});

/** Atualiza um curso */
server.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
   
    users[index] = name;
    return res.json(users);
});

/** Deleta um curso */
server.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.json({message: "Usuário deletado com sucesso!"});
});


server.listen(3000);
