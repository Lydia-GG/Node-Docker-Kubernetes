import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('hello from node app docker kubernetes');
});
app.get('/default', (req, res) => {
  res.send('hello from default page');
});
app.get('/about', (req, res) => {
  res.send('deploy node app on kubernetes');
});

app.listen(8000);
export default app;
