import React from "react";
import { create } from 'react-test-renderer';
import Gallery from '../components/Gallery';
import NoImages from '../components/NoImages'
import Images from '../components/Image'

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

    /* Actualiza el componente con la nueva data*/
    component.update(<Gallery data={data} />);

    /* El método findByType en caso de no encontrar conicidencias ejecuta un error, en cambio finAllByType retorna un arreglo, y en caso de no existir tendría valor 0 */
    expect(component.root.findAllByType(NoImages).length).toEqual(0);
    expect(component.root.findAllByType(Images).length).toEqual(data.length);
    expect(component.root.findAllByType(Images)[0].props.alt).toEqual(data[0].title)

  /* console.log(component.root.findAllByType(Images)[0].props); */
  });
})