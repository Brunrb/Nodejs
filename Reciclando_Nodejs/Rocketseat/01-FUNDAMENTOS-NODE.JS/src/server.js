import http from 'node:http'

    // - Criar usuários
    // - Listagem usuários
    // - Edição usuários
    // - Exclusão usuários

    // HTTP Methods
    // GET, POST, PUT, DELETE

    // GET    => Buscar uma recursos no back-end
    // POST   => Criar um recurso no back-end
    // PUT    => Alterar um recurso no back-end
    // DELETE => Deletar um recurso no back-end


    // GET /users          => Buscar usuários do back-end
    // POST /users         => Criar um usuário no back-end

    // Stateful - Stateless

    // JSON - JavaScript Object Notation

    // Cabeçalhos (Requisição/resposta) => Metadados)

    // HTTP Status Code

const users = []

const server = http.createServer((req, res) => {

    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Joaquim Barbosa',
            email: 'joaquimbar@example.com'
        })

        return res.end('Criação de um usuário')
    }

    return res.end('Hello World! Deu super certo!')
})

server.listen(3333)