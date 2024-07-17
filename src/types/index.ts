// Define el tipo para los datos de trabajo
export interface Trabajo {
  id: number;  // Cambia a string si el id es un string
  name: string;
  image: string;  // Cambia a string si la imagen es una URL o un path a una imagen
}

// Define el tipo para las props del componente Home
export interface HomeProps {
  data: Trabajo[];  // data es un array de objetos de tipo Trabajo
}

// Define el tipo para las props del componente CardOneTrabajo
export interface CardOneTrabajoProps {
  elem: Trabajo;  // Asegúrate de que elem sea de tipo Trabajo
}
