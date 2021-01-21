const db = require('./db.js')

const selectquery = `SELECT bc.title, bc.description, bc.content, l.name language, l.symbol lang_code, c.name category, sc.name subcategory
                     FROM blogs b
                     LEFT JOIN blogs_content bc on b.blog_id = bc.blog_id
                     LEFT JOIN languages l on bc.lang_id = l.lang_id
                     LEFT JOIN categories c ON b.cat_id = c.cat_id
                     LEFT JOIN subcategories sc ON b.subcat_id = sc.subcat_id `;

class Blog {

    static async getBlogs(req, res) {
        res.send(await db.queryPlain(selectquery));
    };

    static async getLatestBlogs(req, res) {
      const sql = selectquery +
                  `ORDER BY upload_date
                   DESC LIMIT 5`;

      res.send(await db.queryPlain(sql));
    }

    static async getBlog(req, res) {
        const blogname = req.params.name;

        const where = 'WHERE bc.title LIKE ?';
        const values = [ '%'+blogname+'%' ];
        const sql = selectquery + where;

        res.send(await db.queryWhere(sql, values));
    };

    static async insertBlog(req, res) {
        console.log('Get a blog');
        res.send('Get a blog');
    };

    static async updateBlog(req, res) {
        console.log('Get a blog');
        res.send('Get a blog');
    };
};

module.exports = Blog;
