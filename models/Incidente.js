const mongoose = require('mongoose');

const IncidenteSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true },
  severidad: { type: String, enum: ['baja', 'media', 'alta', 'critica'], default: 'media' },
  estado: { type: String, enum: ['abierto', 'en_proceso', 'resuelto', 'cerrado'], default: 'abierto' },
  responsable: { type: String, default: 'Sin asignar' },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Incidente', IncidenteSchema);