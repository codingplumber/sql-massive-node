const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = module.exports = express();
app.use(bodyParser.json());

const conn = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/massive_demo'
});

app.set('db', conn);
const db = app.get('db');

const port = 3000;

const ctrl = require('./productsCtrl.js');

app.post('/create', ctrl.create);
app.get('/reads', ctrl.getAll);
app.get('/reads/:id', ctrl.getOne);
app.put('/update/:id/:desc', ctrl.update);
app.delete('/destroy/:id', ctrl.delete);

app.listen(port, function() {
  console.log("Started server on port", port);
});
//In productsCtrl

// app.post('/create', (req, res) => {
//   let data = [req.body.name, req.body.description, req.body.price, req.body.imageurl];
//   db.create_product(data, (err, sqlResponse) => {
//     console.log('working');
//     if (!err) {
//       console.log(sqlResponse);
//       res.status(200).send(sqlResponse);
//     } else {
//       res.send(err);
//     }
//   });
// });
//
// app.get('/reads', (req, res) => {
//   db.read_products((err, products) => {
//     if (!err) {
//       res.status(200).send(products);
//     } else {
//       res.send(err);
//     }
//   });
// });
//
// app.get('/reads/:id', (req, res) => {
//   let search = parseInt(req.params.id);
//   db.read_product(search, (err, product) => {
//     if (!err) {
//       res.status(200).send(product);
//     } else {
//       res.send(err);
//     }
//   });
// });
//
// app.put('/update/:id/:desc', (req, res) => {
//   let item = parseInt(req.params.id);
//   let update = req.params.desc;
//   db.update_product([item, update], (err, product) => {
//     if (!err) {
//       res.status(200).send(product);
//     } else {
//       res.send(err);
//     }
//   });
// });
//
// app.delete('/destroy/:id', (req, res) => {
//   let item = parseInt(req.params.id);
//   db.delete_product(item, (err, product) => {
//     if (!err) {
//       res.status(200).send(product);
//     } else {
//       res.send(err);
//     }
//   });
// });
