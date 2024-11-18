import express from 'express';
import mongoose from 'mongoose';

// Crear instancia de Express
const app = express();

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Servidor corriendo y conectado a MongoDB!');
});

// Conexión a MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://alejandro1ro:dockerale@proyecto:27017/mydatabase';
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((err) => {
    console.error('Error conectando a MongoDB:', err);
  });

// Levantar servidor solo si se ejecuta directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

export default app;
