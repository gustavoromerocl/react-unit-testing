import { create, act } from 'react-test-renderer';
import SampleComponent from './SampleComponent';

let component;

describe("<SampleComponent", () => {
  beforeEach(() => {
    //Instancia los timers de jest
    jest.useFakeTimers();
    
    //sobreescribe la función fetch del objeto windows para poder ejecutarla en ambiente de pruebas
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([])
    }));

    //sobreescribirmos el objeto la función setItem del objeto Storage
    window.Storage.prototype.setItem = jest.fn();

    component = create(<SampleComponent />)
  });

  it("Renderiza correctamente", () => {
    expect(component.root).toBeDefined();
    expect(component.root.findByType("h4")).toBeDefined();
  });

  it("Llama a la API con fetch", async () => {
    //Validamos que fetch no haya sido llamado
    expect(window.fetch).not.toHaveBeenCalled();

    await act(async () => {
      //Ejecuta los timers de jest lo que permite que se gestioné la llamada a la api
      await jest.runAllTimers();
    });
    // console.log(window.fetch);

    //Valida que la función fetch ejecutada en SampleComponent este siendo llamada
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledTimes(2);

    expect(component.root.findAllByType("p").length).toEqual(0);

    //Reescribe fetch para recibir la data de un usuario, esto implica que el contador de llamadas se reinicie en 0
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([{id: 1, name: "Gustavo Romero"}])
    }));

    await act(async () => {
      //Ejecuta los timers nuevamente lo que permite que se gestione la llamada a la api con
      await jest.runAllTimers();
    });

    expect(component.root.findAllByType("p").length).toEqual(1);

    //Actualiza el componente para que los cambios en la data recibida se actualicen
    await component.update(<SampleComponent />);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledTimes(2);
  });

  it("Guarda el resultado en local storage", async () => {
    await act(async () => {
      await jest.runAllTimers();
    });

    //Se valida que setItem gestione la llamada al local storage, los argumentos que se pasan son los usados en la función del componente y el array del mocking de fetch que le hace stringify al array
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith("users", "[]");
  });

  /**
   * @function afterAll
   * @description Esta función ejecuta un callback despues de cada test unitario
   */
  afterAll(() => {
    //Se limpian las funciones mocking de fetch y local storage para evitar conflictos con otros archivos
    window.fetch.mockReset();
    window.Storage.prototype.setItem.mockReset();
  })
})