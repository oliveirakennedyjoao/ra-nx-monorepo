const jsonServer = require('json-server');
const db = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(db); // Arquivo JSON que serve como base de dados
const middlewares = jsonServer.defaults();

// Usa os middlewares padrão (CORS, logs, etc.)
server.use(middlewares);

// Middleware personalizado para modificar headers
server.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});

server.use(router);

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está rodando em http://localhost:${PORT}`);
});
