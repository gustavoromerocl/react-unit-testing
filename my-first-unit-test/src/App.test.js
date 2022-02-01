import { create } from 'react-test-renderer';
import App from './App';

/**
 * @function describe
 * @description La función describe recibe un identificador de los casos de prueba y un arrow function que puede agrupar más de una prueba
 */
describe("<App />", () => {
  //It recibe el identificador de la prueba y un arrow function para ejecutar dicha prueba
  it("Renderiza correctamente", () => {
    //Create crea el componente recibido en un dom virtual de pruebas
    const component = create(<App />);
    //expect como ya vimos anteriormente recibe el argumento para validar que retorne lo esperado
    expect(component).toBeDefined();
  });
});

