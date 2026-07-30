const Incidente = require('../models/Incidente');

exports.obtenerTodos = async (req, res) => {
  try { const lista = await Incidente.find(); res.status(200).json(lista); }
  catch (e) { res.status(500).json({error: e.message}); }
};

exports.obtenerPorId = async (req, res) => {
  try { const inc = await Incidente.findById(req.params.id);
        if (!inc) return res.status(404).json({mensaje: 'No encontrado'});
        res.status(200).json(inc); }
  catch (e) { res.status(500).json({error: e.message}); }
};

exports.crear = async (req, res) => {
  try { const nuevo = new Incidente(req.body);
        const guardado = await nuevo.save(); res.status(201).json(guardado); }
  catch (e) { res.status(400).json({error: e.message}); }
};

exports.actualizar = async (req, res) => {
  try { const actualizado = await Incidente.findByIdAndUpdate(
          req.params.id, {...req.body, fechaActualizacion: Date.now()},
          {new: true, runValidators: true});
        if (!actualizado) return res.status(404).json({mensaje: 'No encontrado'});
        res.status(200).json(actualizado); }
  catch (e) { res.status(400).json({error: e.message}); }
};

exports.eliminar = async (req, res) => {
  try { const eliminado = await Incidente.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({mensaje: 'No encontrado'});
        res.status(200).json({mensaje: 'Eliminado correctamente'}); }
  catch (e) { res.status(500).json({error: e.message}); }
};