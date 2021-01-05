const db = require('./db.js')

class Blog {
    static async getBlogs(req, res) {
        console.log('Get blogs');

        const sql = 'SELECT * FROM blogs';

        res.send(await db.queryPlain(sql));
    }
    static async getBlog(req, res) {
        const blogname = req.params.name;

        const where = 'title LIKE ?';
        const values = [ '%'+blogname+'%' ];
        const sql = 'SELECT * FROM blogs WHERE ' + where;

        res.send(await db.queryWhere(sql, values));
    }
    static async insertBlog(req, res) {
        console.log('Get a blog')
        res.send('Get a blog')
    }
    static async updateBlog(req, res) {
        console.log('Get a blog')
        res.send('Get a blog')
    }
}

module.exports = Blog
