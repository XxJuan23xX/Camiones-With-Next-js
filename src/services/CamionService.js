import CamionDAO from '@/dao/CamionDAO';

class CamionService {
  static async obtenerTodos() {
    try {
      const camiones = await CamionDAO.buscar();
      return camiones;
    } catch (error) {
      console.error('Error en CamionService.obtenerTodos:', error.message);
      throw error;
    }
  }
}

export default CamionService;
