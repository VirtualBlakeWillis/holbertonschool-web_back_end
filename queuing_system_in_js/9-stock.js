const express = require('express');
const redis = require('redis');
const { promisify } = require('util');


const listProducts = [
  {
    id: 1,
    name: 'Suitcase 250',
    price: 50,
    stock: 4,
  },
  {
    id: 2,
    name: 'Suitcase 450',
    price: 100,
    stock: 10,
  },
  {
    id: 3,
    name: 'Suitcase 650',
    price: 350,
    stock: 2,
  },
  {
    id: 4,
    name: 'Suitcase 1050',
    price: 550,
    stock: 5,
  },
];

function getItemById(id) {
  return listProducts.find((item) => item.id === id);
}


const app = express();
const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/list_products', (req, res) => {
  res.json(listProducts);
});


const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

function reserveStockById(itemId, stock) {
  client.set(`item.${itemId}`, stock);
}

async function getCurrentReservedStockById(itemId) {
  const stock = await getAsync(`item.${itemId}`);
  return stock;
}


app.get('/list_products/:itemId', async (req, res) => {
  const itemId = Number(req.params.itemId);
  const item = getItemById(itemId);
  if (!item) {
    res.status(404).json({ status: 'Product not found' });
    return;
  }

  const currentReservedStock = await getCurrentReservedStockById(itemId);
  const stock = item.stock - (currentReservedStock || 0);
  res.json({ ...item, stock });
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = Number(req.params.itemId);
  const item = getItemById(itemId);
  if (!item) {
    res.status(404).json({ status: 'Product not found' });
    return;
  }

  const currentReservedStock = await getCurrentReservedStockById(itemId);
  const stock = item.stock - (currentReservedStock || 0);
  if (stock <= 0) {
    res.status(403).json({ status: 'Not enough stock available', itemId });
    return;
  }

  reserveStockById(itemId, Number(currentReservedStock) + 1);
  res.json({ status: 'Reservation confirmed', itemId });
});

