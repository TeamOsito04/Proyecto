const mongoose = require('mongoose'); // Asegúrate de instalar mongoose previamente

// Obtén la URI desde las variables de entorno o usa un valor predeterminado
const mongoUri = process.env.MONGO_URI || 'mongodb://alejandro1ro:dockerale@proyecto:27017/mydatabase';

// Conexión a MongoDB
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error);
  });

// Configuración adicional
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Servidor corriendo y conectado a MongoDB!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
