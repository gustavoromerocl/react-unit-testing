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
})