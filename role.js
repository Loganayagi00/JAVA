const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
const secretkey= '1a9b63ae86ece1ad93a3472f685143ad43118637446ac9b9c53b7ff3932c1a172976d01fad36b017ad8161effaaef8f968561e6552dd585c9c3b97b707985331d0ed745d37c8206cfb45a855572202a77b7f9c862ed82514cc880139fe5378b180a3da245b7891725e94ad91bd6da4c4976f5a0f9b5582d1905edcb7b6bd77fd';
const users = [
  {id: 1, username: 'admin', password: bcrypt.hashSync('admin123'), role: 'admin'},
  {id: 2, username: 'user1', password: bcrypt.hashSync('user123'), role: 'user'},
  {id: 3, username: 'user2', password: bcrypt.hashSync('user456'), role: 'user'}
];
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('Not available');

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) return res.status(401).send('Invalid password');

  const token = jwt.sign({ id: user.id, role: user.role }, secretkey, {
      expiresIn: 86400 
  });

  res.status(200).send({ auth: true, token: token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send('No token provided.');

  jwt.verify(token, secretkey, (err, decoded) => {
      if (err) return res.status(401).send('Failed to authenticate token.');
      req.userId = decoded.id;
      req.userRole = decoded.role;
      next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') return res.status(403).send('Requires Admin Role');
  next();
};

app.get('/admin', verifyToken, isAdmin, (req, res) => {
  res.status(200).send('Admin content');
});

app.get('/users', (req,res)=>{
  res.json(users);

});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});