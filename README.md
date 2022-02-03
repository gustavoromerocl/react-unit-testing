# react-unit-testing

## Conociendo y configurando Jest

### Tipos de pruebas frontend

Las pruebas en el frontend se clasifican de la siguiente forma: S

- Pruebas unitarias:  Realiza pruebas a cada unidad por separado
- Pruebas de integración: Es una extensión lógica de pruebas unitarias, verifica funcionalidad y seguridad de los componentes integrados.
- Pruebas E2E: Comprueban el flujo de inicio a fin de un software asegurando que funcione de la manera esperada

### Test Runner

Los test runner son aquellos que nos ayudan a crear o implementar el ambiente de pruebas

- Jest
- Mocha
- Jasmine
- Ava

### Que es Jest

Es un framework de pruebas creado en javascript, sus principales características son:

- Zero config: No requiere configuración y react lo trae integrado.
- Snapshots: Son pruebas en base a una copia del arbol de tu componente.
- Isolated Tests: Las pruebas se generan de forma aislada de el ambiente de desarrollo y producción.
- API: Cuenta con una amplia comunidad y documentación.

sitio oficial: [https://jestjs.io/]

### Configurando Jest en React

- Crea una aplicación con el scaffold de react: npx create-react-app my-first-unit-test

- Ejecuta la configuración integrada y el ambiente de pruebas en el proyecto de react: npm run test

### Configuración personalidaza para jest

Los proyectos creados con react-app tienen integrada la configuración de jest por lo que solo es editable a través de la ejecución del script

### Jest Expect

Expect como su traducción lo indica se refiere a lo esperado o que lo que se espera del resultado, entonces recibe un argumento y ejecuta un matcher para validar.

tuFuncion(){
  return 5;
}

expect(tuFuncion()).toEquals(5);

Matchers más usados

- toBeDefined()
- toBeUndefined()
- toEqual(valor)
- toBe(valor)
- toBeinstanceOf(valor)
- toBeTruthy()
- toBeGreatherThan(valor)
- toHaveLength(valor)
- toBeInTheDocument()

### Alcance de tus pruebas con Jest Coverage

Para activarlo es necesario pasar la configuración a través del script ya que en nuestro caso que usamos react-create-app, su función es mostrar una tabla resumen de las pruebas realizadas
- --collectCoverage=true

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.725 s

## Mi primer prueba unitaria

### Explicación de la estructura de una prueba unitaria

Para poder realizar esta sección del curso fue necesario instalar la siguiente dependencia 

- npm install -d react-test-renderer

Para ejecutar las pruebas agrupadas utilizamos las función describe, que puedes revisar en detalle en el dashboard de la documentación.

### React Test Renderer [https://es.reactjs.org/docs/test-renderer.html]

Este paquete proporciona un procesador de React que se puede usar para procesar componentes de React a objetos JavaScript puros, sin depender del DOM o de un entorno móvil nativo.
Básicamente, este paquete facilita tomar una instantánea de la jerarquía de la vista de la plataforma (similar a un árbol DOM) representada por un componente React DOM o React Native sin usar un navegador o jsdom.

### Prueba unitarias del primer componente

Para ejecutar las pruebas unitarias usamos los métodos establecidos en la documentación [https://es.reactjs.org/docs/test-renderer.html], en esta oportunidad usamos los siguientes:

- root = puede realizar busquedas en lo profundo del dom

- toBeDefined = indica si el componente existe en el dom
- findByType = busca el tipo de tag html ingresado, solo puede retornar un elemento
- toEqual = valida o compara la cadena con el parametro recibido

Los componentes del entorno de pruebas tambien cuentan con props, por lo que es posible acceder a ellos.

PASS  src/App.test.js
  <App />
    ✓ Renderiza correctamente (15 ms)
    ✓ Renderiza el header correctamente (5 ms)
    ✓ Renderiza un texto, un link y una imagen (4 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 App.js   |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total

### Ciclo de vida de una prueba unitaria

Jest nos ofrece distintos metodos para ejecutar durante el ciclo de vida de la prueba unitaria, en la documentación oficial encontramos la totalidad de estos métodos. También encontraras los usados en este módulo en el dashboard con una breve descripción.
[https://jestjs.io/docs/setup-teardown]

## Pruebas unitarias sobre un proyecto existente

### Primer prueba a SnapShot

Para comenzar a aplicar lo aprendido, usaremos el siguiente proyecto:

- repo: [https://github.com/Yog9/SnapShot]

Para ejecutar las pruebas, debemos activar el --collectCoverage y señalar en el sccript la carpeta que creamos para organizarlas **npm run test  src/__tests__** 

### Probando onChange usando act

Para poder realizar modificaciones en el dom de pruebas es necesario usar la función act de react-test-renderer, puedes revisar en detalle la prueba ejecutada en el dashborad. Lo resultados obtenidos son los siguientes:

PASS  src/__tests__/Form.test.js
<Form />
  ✓ Rederiza correctamente (21ms)
  ✓ El boton debe habilitarse si el input deja de estar vacío (5ms)

-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |     4.81 |     5.26 |     4.65 |     4.81 |                   |
 src               |        0 |        0 |        0 |        0 |                   |
  App.js           |        0 |      100 |        0 |        0 |... 40,42,43,44,48 |
  index.js         |        0 |      100 |      100 |        0 |              7,12 |
  serviceWorker.js |        0 |        0 |        0 |        0 |... 23,130,131,132 |
 src/api           |        0 |      100 |      100 |        0 |                   |
  config.js        |        0 |      100 |      100 |        0 |                 1 |
 src/components    |     12.5 |    33.33 |    13.33 |     12.5 |                   |
  Container.js     |        0 |        0 |        0 |        0 |        6,7,8,9,13 |
  Form.js          |    83.33 |      100 |    66.67 |    83.33 |                12 |
  Gallery.js       |        0 |        0 |        0 |        0 |... 15,16,17,20,22 |
  Header.js        |        0 |      100 |        0 |        0 |               5,6 |
  Image.js         |        0 |      100 |        0 |        0 |               3,4 |
  Item.js          |        0 |      100 |        0 |        0 |               4,5 |
  Loader.js        |        0 |      100 |        0 |        0 |               3,4 |
  Navigation.js    |        0 |      100 |        0 |        0 |               4,5 |
  NoImages.js      |        0 |      100 |        0 |        0 |               3,4 |
  NotFound.js      |        0 |      100 |        0 |        0 |               3,4 |
  Search.js        |        0 |      100 |        0 |        0 |               4,5 |
 src/context       |        0 |      100 |        0 |        0 |                   |
  PhotoContext.js  |        0 |      100 |        0 |        0 |... 10,15,16,19,25 |
-------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.862s

Aumentamos la cobertura de Form a un 83.33%

### Corroborando data con findAllByType

Busca todos los objetos de la instancia descendientes con el tipo (type) pasado como argumento. Retorna un array.

## Mocking en unit testing con Jest

### Jest module mock

Para el uso de librerias externas como lo son axios o fetch es necesario utilizar la funcion mock de jest, debido a que sus funcionalidades salen de un ambiente de pruebas al realizar la llamada a la API. Para organizar y reutilizar los mocks de jest podemos crear una carpeta llamada __mocks__, esta sera montada antes de ejecutar el entorno de pruebas. La información la podemos encontrar en la documentación oficial: [https://jestjs.io/docs/25.x/bypassing-module-mocks]

### Mocking de funciones

Para validar que las llamadas a funciones se esten ejecutando, a través de los mocks podemos declarar funciones que tambien pueden ser personalizadas. A continuacion un ejemplo de la documentación de jest: [https://jestjs.io/docs/25.x/jest-object#jestfnimplementation]

const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();

// With a mock implementation:
const returnsTrue = jest.fn(() => true);
console.log(returnsTrue()); // true;

### Mocking Timers

Las funciones de temporizador nativas (es decir, setTimeout, setInterval, clearTimeout, clearInterval) son menos que ideales para un entorno de prueba, ya que dependen del tiempo real para transcurrir. Jest puede intercambiar temporizadores con funciones que te permiten controlar el paso del tiempo. En el siguiente enlace podemos revisar la documentación oficial [https://jestjs.io/docs/timer-mocks].

- jest.useFakeTimers();