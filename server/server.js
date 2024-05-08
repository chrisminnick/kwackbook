import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'Why is my duck winning so much?', author: 'Ben' },
    { id: 2, content: "Hooray! It's Maya day!", author: 'Maya G' },
  ]);
});
app.listen(3000, () => console.log('server started on port 3000'));
