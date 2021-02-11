const db = require('./db.js');
const formatImages = require('../share/formatimages.js');

const selectquery = `SELECT bc.title, bc.description, bc.content, l.name language, l.symbol lang_code, c.name category, sc.name subcategory, GROUP_CONCAT(bi.path) images
                     FROM blogs b LEFT
                     JOIN blogs_content bc on b.blog_id = bc.blog_id
                     LEFT JOIN languages l on bc.lang_id = l.lang_id
                     LEFT JOIN categories c ON b.cat_id = c.cat_id
                     LEFT JOIN subcategories sc ON b.subcat_id = sc.subcat_id
                     LEFT JOIN blogs_img bi ON b.blog_id = bi.blog_id
                     GROUP BY b.blog_id `;

class Blog {

    static async getBlogs(req, res) {
      let result = await db.queryPlain(selectquery);

      result.map((r) => {r.images = formatImages(r.images, req)});

      res.send(result);
    };

    static async getLatestBlogs(req, res) {
      const sql = selectquery +
                  `ORDER BY upload_date
                   DESC LIMIT 5`;

      let result = await db.queryPlain(sql);

      result.map((r) => {r.images = formatImages(r.images, req)});

      res.send(result);
    }

    static async getBlog(req, res) {
        const blogname = req.params.name;

        const where = ' WHERE bc.title = ?';
        const values = [blogname];
        const sql = selectquery.substring(0, 540) + where + selectquery.substring(540, selectquery.length);

        const result = await db.queryWhere(sql, values);

        result.map((r) => {r.images = formatImages(r.images, req)});

        res.send(result);
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
