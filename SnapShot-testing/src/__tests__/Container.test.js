import React from "react";
import { create, act } from 'react-test-renderer';
import Container from '../components/Container';
import Gallery from "../components/Gallery";
import Loader from "../components/Loader";
import PhotoContextProvider from "../context/PhotoContext";

let component;


describe("<Container />", () => {
  beforeEach(() => {
    component = create(
      <PhotoContextProvider>
        <Container searchTerm="" />
      </PhotoContextProvider>
    );
  });

  it("Renderiza correctamente", () => {
    /* console.log(component.root); */
    expect(component.root).toBeDefined();
    //Cuando es un componente de react, no se pasa como string en findByType
    expect(component.root.findByType(Container)).toBeDefined();

    //Validamos que Loader exista
    expect(component.root.findByType(Loader));

    //Validamos que la galeria no haya sido cargada aun
    expect(component.root.findAllByType(Gallery).length).toEqual(0);
  });

  it("Llama a la API si es necesario o si cambia el texto", async () => {
    await component.update(
      <PhotoContextProvider>
        <Container searchTerm="text" />
      </PhotoContextProvider>
    );
  })
});

