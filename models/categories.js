const db = require('./db.js')

class Category {
    static async getCategories(req, res) {
        const sql = 'SELECT * FROM categories';

        res.send(await db.queryPlain(sql));
    }
    static async getCategory(req, res) {
        const categoryname = req.params.name;

        const where = 'name LIKE ?';
        const values = [ '%'+categoryname+'%' ];
        const sql = 'SELECT * FROM categories WHERE ' + where;

        res.send(await db.queryWhere(sql, values));
    }
    static async insertCategory(req, res) {
        console.log('Insert a category');
        res.send('Insert a category')
    }
    static async updateCategory(req, res) {
        console.log('Update a category')
        res.send('Update a category')
    }
}

module.exports = Category
