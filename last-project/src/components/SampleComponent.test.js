import { create } from 'react-test-renderer';
import SampleComponent from './SampleComponent';

let component;

describe("<SampleComponent", () => {
  beforeEach(() => {
    jest.useFakeTimers();

    component = create(<SampleComponent />)
  });

  it("Renderiza correctamente", () => {
    expect(component.root).toBeDefined();
    expect(component.root.findByType("h4")).toBeDefined();
  });

})