import CamionService from '../../../services/CamionService';

export async function GET() {
  try {
    const camiones = await CamionService.obtenerTodos();
    return new Response(JSON.stringify(camiones), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error en el endpoint /api/camion:', error.message);
    return new Response(JSON.stringify({ error: 'Error al obtener datos' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
