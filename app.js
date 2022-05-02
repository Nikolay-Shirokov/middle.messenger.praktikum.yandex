const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.static(__dirname + '/dist/'));
app.use('/signup', express.static(__dirname + '/dist/'));
app.use('/signin', express.static(__dirname + '/dist/'));
app.use('/profile', express.static(__dirname + '/dist/'));
app.use('/profile-edit', express.static(__dirname + '/dist/'));
app.use('/password-edit', express.static(__dirname + '/dist/'));
app.use('/error', express.static(__dirname + '/dist/'));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}!`);
});
