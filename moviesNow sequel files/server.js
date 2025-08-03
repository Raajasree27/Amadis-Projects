const express = require('express');
const sequelize = require('../server/config/db');
const User = require('../server/models/userModel'); // import models
const app = express();

// DB Connection and Sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected.');

    await sequelize.sync(); // Use sync({ alter: true }) in dev only
    console.log('✅ Models synced.');
  } catch (error) {
    console.error('❌ DB connection failed:', error);
  }
})();

// Rest of your server setup
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
