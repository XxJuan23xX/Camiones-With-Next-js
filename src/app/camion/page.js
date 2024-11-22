'use client';

import { useEffect, useState } from 'react';
import styles from './camion.module.css'; // Importar el archivo CSS

export default function CamionPage() {
  const [camiones, setCamiones] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/camion')
      .then((response) => {
        if (!response.ok) throw new Error('Error al cargar los datos');
        return response.json();
      })
      .then((data) => {
        setCamiones(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      camiones.filter((camion) =>
        camion.Nombre.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, camiones]);

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lista de Camiones</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.search}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tonelaje</th>
            <th>Placas</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((camion) => (
            <tr key={camion.Idcamion}>
              <td>{camion.Idcamion}</td>
              <td>{camion.Nombre}</td>
              <td>{camion.Totalmacenaje}</td>
              <td>{camion.Placas}</td>
              <td>{camion.Marca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
