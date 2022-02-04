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
      //Ejecuta los timers de jest
      await jest.runAllTimers();
    });
    // console.log(window.fetch);

    //Valida que la función fetch ejecutada en SampleComponent este siendo llamada
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledTimes(2);
  })
})