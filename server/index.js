import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  if (Math.random() > 0.5) {
    res.status(500).json({ error: 'something went wrong!' });
  } else {
    res.json([
      { id: 1, name: 'Product1', price: 100 },
      { id: 2, name: 'Product2', price: 200 },
    ]);
  }
});

const PORT = 4600;
app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
