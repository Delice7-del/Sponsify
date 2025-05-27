
const express= require('express');
const mongoose= require("mongoose");
const cors= require('cors');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB connected successfully"))

.catch(err => console.error('Mongo DB failed'));

const childRoutes= require('../Backend/routes/childRoutes');

app.use('/api/child', childRoutes);

const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Your server is running at http://localhost:${PORT}`);
})