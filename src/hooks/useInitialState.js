import { useState, useEffect } from 'react';

/***
 * Permite ir a mi FakeAPI, obtiene info y la envia a f(x) setVideo para procesarla
 * UseEffect necesita 2 parametros; el arreglo que necesita con
 * la info de conexión a la API, con su comportamiento (response y data); y cuantas veces se  desea ejecutar esa consulta
 * Es importante que retorne explicitamente la lsitade videos
 */

const useInitialState = (API) => {
  /**
   * Como necesito mi lista de objeto para utilizarlo
   * Nota: Si hay un error de consola diciendo que la propiedad length o map no existe
   * o no se puede usar hay que especificar que lista de objectos, se desean traer desde la API
  */
  const [videos, setVideos] = useState([{ mylist: [], trends: [], originals: [] }]);

  /**
   * Se agregado esta porcion de codigo para generar Carrousel segun cuantas lista alla disponible
  */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data)); // Por cada key
      });
  }, []);

  return [videos, categories];
};

export default useInitialState;