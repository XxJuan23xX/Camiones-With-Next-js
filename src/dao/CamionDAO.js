import { connectToDB } from '../../utils/db'
import Camion from '../../utils/Camion';
class CamionDAO {
  static async buscar() {
    try {
      const pool = await connectToDB();
      const result = await pool.request().query('SELECT * FROM Camion');

      // Convertimos los resultados en objetos tipo "Camion"
      const camiones = result.recordset.map(
        (row) =>
          new Camion(
            row.Idcamion,
            row.Nombre,
            row.Totalmacenaje,
            row.Placas,
            row.Marca
          )
      );

      return camiones;
    } catch (error) {
      console.error('Error en CamionDAO.buscar:', error.message);
      throw error;
    }
  }
}

export default CamionDAO;
