import request from 'supertest'; 
import app from '../index.js';  

describe('Pruebas de la API', () => {
  it('Debería responder con un mensaje en la raíz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);   
    expect(res.text).toBe('¡Servidor corriendo y conectado a MongoDB!'); 
  });
});
