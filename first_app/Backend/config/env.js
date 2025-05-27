const dotenv = require('dotenv');
const fs = require('fs');

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  dotenv.config(); // fallback to `.env`
}


const requiredVars = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(` Missing required env var: ${key}`);
    process.exit(1);
  }
});

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
