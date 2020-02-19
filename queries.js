//DB
const Pool = require('pg').Pool
global.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: 'root',
    port: 5432,
})

//Users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {
        name,
        email
    } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
        response.status(201).send(`User added with ID: ${results}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        email
    } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

//Posts
const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPostById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createPost = (request, response) => {
    const {
        title,
        body,
        published,
        userId,
    } = request.body

    pool.query('INSERT INTO posts (title, body, published, user_id) VALUES ($1, $2, $3, $4)', [title, body, published, userId], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
        response.status(201).send(`Post added`)
    })
}

const updatePost = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        title,
        body,
        published
    } = request.body

    pool.query(
        'UPDATE posts SET title = $1, body = $2, published = $3 WHERE id = $4',
        [title, body, published, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Post modified with ID: ${id}`)
        }
    )
}

const deletePost = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Post deleted with ID: ${id}`)
    })
}

//comment
const getComments = (request, response) => {
    pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCommentById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM comments WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createComment = (request, response) => {
    const {
        text,
        user_id,
        post_id
    } = request.body

    pool.query('INSERT INTO comments (text, user_id, post_id) VALUES ($1, $2, $3)', [text, user_id, post_id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
        response.status(201).send(`Comment added`)
    })
}

const updateComment = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        text
    } = request.body

    pool.query(
        'UPDATE comments SET text = $1 WHERE id = $2',
        [text, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Post modified with ID: ${id}`)
        }
    )
}

const deleteComment= (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM comments WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Post deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
}