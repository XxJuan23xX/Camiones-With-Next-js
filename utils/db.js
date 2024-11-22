import sql from 'mssql';

export const dbConfig = {
  user: 'Juan', // Cambia esto por tu usuario de SQL Server
  password: 'Manino04', // Cambia esto por tu contraseña
  server: 'localhost', // Cambia si usas otro servidor o IP
  database: 'refaccionaria', // Cambia al nombre correcto de tu base de datos
  options: {
    encrypt: true, // Necesario si usas Azure
    trustServerCertificate: true, // Necesario para entornos locales
  },
};

export async function connectToDB() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('🚀 Conexión exitosa con SQL Server'); // Mensaje de éxito
    return pool;
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error.message); // Mensaje de error detallado
    throw error; // Lanza el error para manejarlo en otros lugares
  }
}
