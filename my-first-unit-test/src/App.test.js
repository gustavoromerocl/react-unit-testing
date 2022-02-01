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

  it("Renderiza el header correctamente", () => {
    const component = create(<App />);
    const header = component.root.findByType("header");
    expect(header).toBeDefined();
    expect(header.props.className).toEqual("App-header");
  })

  it("Renderiza un texto, un link y una imagen", () => {
    const component = create(<App />);
    const header = component.root.findByType("header");

    //Es buena practica verificar que el elemento exista mediante consola, antes de usarlo para las pruebas
    /* console.log(header.findByType("img")); */

    const img = header.findByType("img");
    const p = header.findByType("p");
    const a = header.findByType("a");

    expect(img).toBeDefined();
    expect(img.props.className).toEqual("App-logo");
    expect(img.props.src).toEqual("logo.svg");

    expect(a.props.href).toBe("https://reactjs.org");

    /* console.log(p.props); */
    expect(p).toBeDefined();
    expect(p.findByType("code")).toBeDefined();
  });
});

