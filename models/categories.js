const db = require('./db.js');

class Category {
    static async getCategories(req, res) {
        const sql = 'SELECT * FROM categories';

        db.queryPlain(sql).then((categories) => {
          res.send(categories);
        });
    };

    static async getCategory(req, res) {
        const categoryname = req.params.name;

        const where = 'c.name LIKE ?';
        const values = [ '%'+categoryname+'%' ];
        const sql = `SELECT c.cat_id category_id, c.name category, s.subcat_id subcategory_id, s.name subcategory
                     FROM categories c
                     LEFT JOIN subcategories s ON s.cat_id = s.cat_id
                     WHERE ` + where;

        db.queryWhere(sql, values).then((category) => {
          if(category.length) {
            const categoryresult = {};
                  categoryresult.category_id = category[0].category_id;
                  categoryresult.category = category[0].category;
                  categoryresult.subcategories = [];

            for (const cat of category) {
              let subcategory = {
                'subcategory' : cat.subcategory,
                'subcategory_id' : cat.subcategory_id
              };

              categoryresult.subcategories.push(subcategory);
            };

            res.send(categoryresult);
          } else {
            res.send('Not found');
          }
        });
    };

    static async insertCategory(req, res) {
        console.log('Insert a category');
        res.send('Insert a category');
    };

    static async updateCategory(req, res) {
        console.log('Update a category');
        res.send('Update a category');
    };
};

module.exports = Category;
