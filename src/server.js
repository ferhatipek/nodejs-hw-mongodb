const express = require('express');
const cors = require('cors');
const pino = require('pino')();
const contactsRouter = require('./routes/contacts');

const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use((req, res, next) => {
    pino.info(`${req.method} ${req.url}`);
    next();
  });
  app.use('/contacts', contactsRouter);
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use((err, req, res, next) => {
    pino.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
};

module.exports = setupServer; 