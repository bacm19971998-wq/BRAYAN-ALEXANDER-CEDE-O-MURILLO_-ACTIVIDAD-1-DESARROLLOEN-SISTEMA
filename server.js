require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const incidenteRoutes = require('./routes/incidentes');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conexión:', err));

// Rutas
app.use('/api/incidentes', incidenteRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));