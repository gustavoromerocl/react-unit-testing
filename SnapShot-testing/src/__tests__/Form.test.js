import React from "react";
import Form from '../components/Form';
import { create } from 'react-test-renderer';

let component;

const props = {
  history: {},
  handleSubmit: () => {}
}

describe("<Form />", () => {
  beforeEach(() => {
    component = create(<Form {...props}/>)
  })

  it("Rederiza correctamente", () => {
    expect(component).toBeDefined();
    expect(component.toJSON().type).toEqual("form");
    expect(component.root.findByType("input")).toBeDefined();
    expect(component.root.findByType("button")).toBeDefined();
    expect(component.root.findByType("svg")).toBeDefined();

    /* //toJson() devuelve un objeto que representa el dom  rederizado en formato json
    console.log(component.toJSON()); */
  });

  it("El boton debe habilitarse si el input deja de estar vacío", () => {
    const form = component.root.findByType("form");
    const input = form.findByType("input");
    const button = form.findByType("button");

    /* console.log(button.props); */
    //Confirmamos que el botón venga desacgtivado y tenga la clase null
    expect(button.props.disabled).toBeTruthy();
    expect(button.props.className).toEqual("search-button null");
  });
})