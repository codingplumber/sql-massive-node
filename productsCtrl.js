const app = require('./index.js');
const db = app.get('db');

module.exports = {

  create: (req, res) => {
    let data = [req.body.name, req.body.description, req.body.price, req.body.imageurl];
    console.log(req.body)
    db.create_product(data, (err, sqlResponse) => {
      console.log('working');
      if (!err) {
        console.log(sqlResponse);
        res.status(200).send(sqlResponse);
      } else {
        res.send(err);
      }
    });
  },

  getAll: (req, res) => {
    db.read_products((err, products) => {
      if (!err) {
        res.status(200).send(products);
      } else {
        res.send(err);
      }
    });
  },

  getOne: (req, res) => {
    let search = parseInt(req.params.id);
    db.read_product(search, (err, product) => {
      if (!err) {
        res.status(200).send(product);
      } else {
        res.send(err);
      }
    });
  },

  update: (req, res) => {
    let item = parseInt(req.params.id);
    let update = req.params.desc;
    db.update_product([item, update], (err, product) => {
      if (!err) {
        res.status(200).send(product);
      } else {
        res.send(err);
      }
    });
  },

  delete: (req, res) => {
    let item = parseInt(req.params.id);
    db.delete_product(item, (err, product) => {
      if (!err) {
        res.status(200).send(product);
      } else {
        res.send(err);
      }
    });
  }

};

// Export an object with 5 functions
// Create, GetOne, GetAll, Update, Delete
// At the top of the controller (outside the object), get the db object off of our express app (see mini-project)
// Inside of Create use the create_product query
// Inside of GetAll use the read_products query
// Inside of GetOne, use the read_product query
// Inside of Update, use the update_product query
// Inside of Delete, use the delete_product query
