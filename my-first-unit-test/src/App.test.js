import { create } from 'react-test-renderer';
import App from './App';

/* Se instancian las variables de manera global para usar en las distintas pruebas */
let component;
let header;

/**
 * @function describe
 * @description La función describe recibe un identificador de los casos de prueba y un arrow function que puede agrupar más de una prueba
 */
describe("<App />", () => {
  
  /**
   * @function beforeAll
   * @description Esta función de jest se ejecuta antes de cada una de las pruebas
   */
  beforeAll(()=>{
    /* 
    Create() crea el componente recibido en un dom virtual de pruebas 
    Se declaran las variables dentro de beforeAll(), para que cada vez que se inicie una prueba se instancien
    */
    component = create(<App />);
    header = component.root.findByType("header");
  })

  //It recibe el identificador de la prueba y un arrow function para ejecutar dicha prueba
  it("Renderiza correctamente", () => {

    //expect como ya vimos anteriormente recibe el argumento para validar que retorne lo esperado
    expect(component).toBeDefined();
  });

  it("Renderiza el header correctamente", () => {
    expect(header).toBeDefined();
    expect(header.props.className).toEqual("App-header");
  })

  it("Renderiza un texto, un link y una imagen", () => {


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

