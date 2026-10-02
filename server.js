/**
 * Order Service - dummy demo implementation
 * Demo microservice for managing customer orders.
 *
 * In-memory CRUD API matching openapi.yaml. No real persistence or auth -
 * for demo purposes only.
 */
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4002;

let orders = [
  {
    "id": "o-1",
    "userId": "u-1",
    "items": [
      "sku-100",
      "sku-101"
    ],
    "total": 49.99,
    "status": "pending"
  },
  {
    "id": "o-2",
    "userId": "u-2",
    "items": [
      "sku-102"
    ],
    "total": 19.99,
    "status": "shipped"
  }
];

function nextId() {
  return 'o-' + (Math.floor(Math.random() * 90000) + 10000);
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.get('/orders/:id', (req, res) => {
  const found = orders.find((r) => r.id === req.params.id);
  if (!found) return res.status(404).json({ error: 'order not found' });
  res.json(found);
});

app.post('/orders', (req, res) => {
  const created = { id: nextId(), ...req.body };
  orders.push(created);
  res.status(201).json(created);
});

app.put('/orders/:id', (req, res) => {
  const idx = orders.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'order not found' });
  orders[idx] = { ...orders[idx], ...req.body, id: req.params.id };
  res.json(orders[idx]);
});

app.delete('/orders/:id', (req, res) => {
  const idx = orders.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'order not found' });
  orders.splice(idx, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Order Service demo listening on http://localhost:${PORT}`);
});

module.exports = app;
