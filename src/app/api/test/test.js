import { connectToDB } from '../../../../utils/db';

export async function GET() {
  try {
    const pool = await connectToDB();
    const result = await pool.request().query('SELECT 1 AS Test');
    console.log('🚀 Conexión de prueba exitosa:', result.recordset);
    return new Response(JSON.stringify(result.recordset), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('❌ Error en la conexión de prueba:', error.message);
    return new Response(JSON.stringify({ error: 'Error al conectar' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
