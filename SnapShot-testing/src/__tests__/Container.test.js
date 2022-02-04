import React from "react";
import { create, act } from 'react-test-renderer';
import Container from '../components/Container';
import Gallery from "../components/Gallery";
/* import Loader from "../components/Loader"; */
import PhotoContextProvider from "../context/PhotoContext";

import axios from 'axios';

let component;

describe("<Container />", () => {
  beforeEach(async () => {
    await act(async () => {
      component = await create(
        <PhotoContextProvider>
          <Container searchTerm="" />
        </PhotoContextProvider>
      );
    })
  });

  it("Renderiza correctamente", () => {
    /* console.log(component.root); */
    expect(component.root).toBeDefined();
    //Cuando es un componente de react, no se pasa como string en findByType
    expect(component.root.findByType(Container)).toBeDefined();

    //Validamos que Loader exista
    /* expect(component.root.findByType(Loader)); */

    //Validamos que la galeria haya sido cargada
    expect(component.root.findAllByType(Gallery).length).toEqual(1);
  });

  it("Llama a la API si es necesario o si cambia el texto", async () => {
    const customData = {
      data: {
        photos: {
          photo: [
            { farm: 'farmTest01', server: 'serverTest', id: 'testId01', secret: 'asdadgsfad', title: 'titleTest01'},
          ]
        }
      }
    }

    axios.get.mockImplementation(() => Promise.resolve(customData));

    await act(async () => {
      await component.update(
        <PhotoContextProvider>
          <Container searchTerm="text" />
        </PhotoContextProvider>
      );
    });

    //validamos que la funcion haya sido llamada
    expect(axios.get).toHaveBeenCalled();

    //Validamos que la funcion haya sido llamada 3 veces
    expect(axios.get).toHaveBeenCalledTimes(3);

    //Validamos que post y put no hayan sido llamados
    expect(axios.post).not.toHaveBeenCalled();
    expect(axios.put).not.toHaveBeenCalled();

    //Obtenemos el componente Gallery actualizado y validamos que la data que recibe sea la de customData
    expect(component.root.findByType(Gallery).props.data).toEqual(customData.data.photos.photo);

  })
});

