import React from "react";
import { create } from 'react-test-renderer';
import Gallery from '../components/Gallery';
import NoImages from '../components/NoImages'

let component;

const props = {
  data: []
}

describe("<Galery />", () => {
  beforeEach(() => {
    component = create(<Gallery {...props}/>)
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
    expect(component.root.findByType("div")).toBeDefined();
    expect(component.root.findByType("ul")).toBeDefined();
  });

  it('Muestra NoImages si la data está vacía', () => {
    expect(component.root.findByType(NoImages)).toBeDefined();
  });

  it('Renderiza las imagenes si data existe o cambia', () => {
    const data = [
      { farm: 'farmTest01', server: 'serverTest', id: 'testId01', secret: 'asdadgsfad', title: 'titleTest01'},
      { farm: 'farmTest02', server: 'serverTest', id: 'testId02', secret: 'qeqwewrt', title: 'titleTest02'},
      { farm: 'farmTest03', server: 'serverTest', id: 'testId03', secret: 'asdfsadff', title: 'titleTest03'},
      { farm: 'farmTest04', server: 'serverTest', id: 'testId04', secret: 'ñlkkjhhñl', title: 'titleTest04'}
    ];

    component.update(<Gallery data={data} />);
  });
})